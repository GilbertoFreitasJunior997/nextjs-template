import { OAuth2RequestError } from "arctic";
import { setSession } from "@/lib/session";
import { redirectLoginURL } from "@/config";
import { github, githubService } from "@/services/github";
import { GithubEmail, GithubUser } from "@/services/github/types";
import { getCookie } from "@/lib/utils";

export async function GET(request: Request): Promise<Response> {
  const url = new URL(request.url);
  const code = url.searchParams.get("code");
  const state = url.searchParams.get("state");
  const storedState = await getCookie("github_oauth_state");

  if (!code || !state || !storedState || state !== storedState) {
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
          Location: redirectLoginURL,
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

    const user = await createGithubUser(githubUser);
    await setSession(user.id);
    return new Response(null, {
      status: 302,
      headers: {
        Location: redirectLoginURL,
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
