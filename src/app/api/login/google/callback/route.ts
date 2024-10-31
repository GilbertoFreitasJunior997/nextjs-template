import { OAuth2RequestError } from "arctic";
import { setSession } from "@/lib/session";
import { googleAuth, googleService } from "@/services/google";
import { GoogleUser } from "@/services/google/types";
import { redirectLoginURL } from "@/config";
import { getCookie } from "@/lib/utils";

export async function GET(request: Request): Promise<Response> {
  const url = new URL(request.url);
  const code = url.searchParams.get("code");
  const state = url.searchParams.get("state");
  const storedState = await getCookie("google_oauth_state");
  const codeVerifier = await getCookie("google_code_verifier");

  if (
    !code ||
    !state ||
    !storedState ||
    state !== storedState ||
    !codeVerifier
  ) {
    return new Response(null, {
      status: 400,
    });
  }

  try {
    const tokens = await googleAuth.validateAuthorizationCode(
      code,
      codeVerifier,
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
          Location: redirectLoginURL,
        },
      });
    }

    const user = await createGoogleUser(googleUser);
    await setSession(user.id);
    return new Response(null, {
      status: 302,
      headers: {
        Location: redirectLoginURL,
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
