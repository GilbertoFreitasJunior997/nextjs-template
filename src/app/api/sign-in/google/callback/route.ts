import { appConfig } from "@/app-config";
import { setSession } from "@/lib/session";
import { googleService } from "@/services/google";
import {
  googleAuth,
  googleCodeCookie,
  googleStateCookie,
} from "@/services/google/consts";
import { GoogleUser } from "@/services/google/types";
import { OAuth2RequestError } from "arctic";
import { cookies } from "next/headers";

export async function GET(request: Request): Promise<Response> {
  const url = new URL(request.url);
  const code = url.searchParams.get("code");
  const state = url.searchParams.get("state");

  const c = await cookies();
  const storedState = c.get(googleStateCookie);
  const codeVerifier = c.get(googleCodeCookie);

  if (
    !code ||
    !state ||
    !storedState?.value ||
    state !== storedState.value ||
    !codeVerifier
  ) {
    return new Response(null, {
      status: 400,
    });
  }

  try {
    const tokens = await googleAuth.validateAuthorizationCode(
      code,
      codeVerifier.value,
    );
    const response = await fetch(
      "https://openidconnect.googleapis.com/v1/userinfo",
      {
        headers: {
          Authorization: `Bearer ${tokens.accessToken}`,
        },
      },
    );
    const googleUser: GoogleUser = await response.json();

    const { createGoogleUser, getAccountByGoogleId } = googleService;

    const existingUser = await getAccountByGoogleId(googleUser.sub);

    if (existingUser) {
      await setSession(existingUser.id);
      return new Response(null, {
        status: 302,
        headers: {
          Location: appConfig.redirectSignInURL,
        },
      });
    }

    const user = await createGoogleUser(googleUser);
    await setSession(user.id);

    c.delete(googleStateCookie);
    c.delete(googleCodeCookie);

    return new Response(null, {
      status: 302,
      headers: {
        Location: appConfig.redirectSignInURL,
      },
    });
  } catch (e) {
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
