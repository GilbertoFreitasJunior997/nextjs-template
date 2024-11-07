import { appConfig } from "@/app-config";
import { setSession } from "@/lib/session";
import { githubService } from "@/services/github";
import { github } from "@/services/github/consts";
import { GithubEmail, GithubUser } from "@/services/github/types";
import { OAuth2RequestError } from "arctic";
import { cookies } from "next/headers";

export async function GET(request: Request): Promise<Response> {
  const url = new URL(request.url);
  const code = url.searchParams.get("code");
  const state = url.searchParams.get("state");
  const storedState = (await cookies()).get("github_oauth_state");

  if (!code || !state || !storedState || state !== storedState?.value) {
    return new Response(null, {
      status: 400,
    });
  }

  try {
    const tokens = await github.validateAuthorizationCode(code);

    const githubUserResponse = await fetch("https://api.github.com/user", {
      headers: {
        Authorization: `Bearer ${tokens.accessToken}`,
      },
    });

    const githubUser: GithubUser = await githubUserResponse.json();

    const { createGithubUser, getAccountByGithubId } = githubService;

    const existingUser = await getAccountByGithubId(githubUser.id);

    if (existingUser) {
      await setSession(existingUser.id);
      return new Response(null, {
        status: 302,
        headers: {
          Location: appConfig.redirectSignInURL,
        },
      });
    }

    if (!githubUser.email) {
      const githubUserEmailResponse = await fetch(
        "https://api.github.com/user/emails",
        {
          headers: {
            Authorization: `Bearer ${tokens.accessToken}`,
          },
        },
      );
      const githubUserEmails = await githubUserEmailResponse.json();

      githubUser.email = getPrimaryEmail(githubUserEmails);
    }

    //TODO: validate if githubuser.email is already in the db

    const user = await createGithubUser(githubUser);

    await setSession(user.id);
    return new Response(null, {
      status: 302,
      headers: {
        Location: appConfig.redirectSignInURL,
      },
    });
  } catch (e) {
    console.error(e);
    // the specific error message depends on the provider
    if (e instanceof OAuth2RequestError) {
      // invalid code
      return new Response(null, {
        status: 400,
      });
    }
    return new Response(null, {
      status: 500,
    });
  }
}

const getPrimaryEmail = (emails: GithubEmail[]) => {
  const primaryEmail = emails.find((email) => email.primary);

  return primaryEmail?.email ?? "";
};
