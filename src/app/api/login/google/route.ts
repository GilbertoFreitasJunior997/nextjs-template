import { generateCodeVerifier, generateState } from "arctic";
import { googleAuth } from "@/services/google";
import { setCookie } from "@/lib/utils";

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
