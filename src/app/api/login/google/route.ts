import { googleAuth } from "@/services/google";
import { cookies } from "next/headers";
import { generateCodeVerifier, generateState } from "arctic";

export async function GET(): Promise<Response> {
  const state = generateState();
  const codeVerifier = generateCodeVerifier();
  const url = await googleAuth.createAuthorizationURL(state, codeVerifier, {
    scopes: ["profile", "email"],
  });

  const defaultCookieOptions = {
    secure: true,
    path: "/",
    httpOnly: true,
    maxAge: 60 * 10,
  };

  (await cookies()).set("google_oauth_state", state, defaultCookieOptions);
  (await cookies()).set(
    "google_code_verifier",
    codeVerifier,
    defaultCookieOptions,
  );

  return Response.redirect(url);
}
