import { github, githubStateCookie } from "@/services/github/consts";
import { generateState } from "arctic";
import { cookies } from "next/headers";

export async function GET(): Promise<Response> {
  const state = generateState();

  const url = await github.createAuthorizationURL(state, {
    scopes: ["user:email"],
  });

  (await cookies()).set(githubStateCookie, state, {
    path: "/",
    secure: process.env.NODE_ENV === "production",
    httpOnly: true,
    maxAge: 60 * 10,
    sameSite: "lax",
  });

  return Response.redirect(url);
}
