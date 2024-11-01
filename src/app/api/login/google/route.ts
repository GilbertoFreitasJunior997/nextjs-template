import { setCookie } from "@/app/_lib/cookies";
import { googleAuth } from "@/services/google";
import { generateCodeVerifier, generateState } from "arctic";

export async function GET(): Promise<Response> {
  const state = generateState();
  const codeVerifier = generateCodeVerifier();
  const url = await googleAuth.createAuthorizationURL(state, codeVerifier, {
    scopes: ["profile", "email"],
  });

  await setCookie("google_oauth_state", state);
  await setCookie("google_code_verifier", codeVerifier);

  return Response.redirect(url);
}
