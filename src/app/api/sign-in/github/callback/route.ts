import { appConfig } from "@/app-config";
import { setSession } from "@/lib/session";
import { githubService } from "@/services/github";
import { github, githubStateCookie } from "@/services/github/consts";
import { GithubEmail, GithubUser } from "@/services/github/types";
import { userService } from "@/services/user";
import { OAuth2RequestError } from "arctic";
import { cookies } from "next/headers";

export async function GET(request: Request): Promise<Response> {
  const url = new URL(request.url);
  const code = url.searchParams.get("code");
  const state = url.searchParams.get("state");

  const c = await cookies();
  const storedState = c.get(githubStateCookie);

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

    const [emailAlreadyRegistered] = await userService.getByColumn(
      "email",
      githubUser.email,
    );

    if (emailAlreadyRegistered) {
      const { id } = emailAlreadyRegistered;
      await userService.update(id, { githubId: githubUser.id });
      await setSession(id);

      return new Response(null, {
        status: 302,
        headers: {
          Location: appConfig.redirectSignInURL,
        },
      });
    }
    const user = await createGithubUser(githubUser);
    await setSession(user.id);

    c.delete(githubStateCookie);
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
