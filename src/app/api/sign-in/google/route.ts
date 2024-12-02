import {
  googleAuth,
  googleAuthScopes,
  googleCodeCookie,
  googleStateCookie,
} from "@/services/google/consts";
import { generateCodeVerifier, generateState } from "arctic";
import { cookies } from "next/headers";

export async function GET(): Promise<Response> {
  const state = generateState();
  const codeVerifier = generateCodeVerifier();
  const url = await googleAuth.createAuthorizationURL(
    state,
    codeVerifier,
    googleAuthScopes,
  );

  const defaultCookieOptions = {
    secure: true,
    path: "/",
    httpOnly: true,
    maxAge: 60 * 10,
  };

  (await cookies()).set(googleStateCookie, state, defaultCookieOptions);
  (await cookies()).set(googleCodeCookie, codeVerifier, defaultCookieOptions);

  return Response.redirect(url);
}
