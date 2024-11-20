import { env } from "@/lib/env";
import { GitHub } from "arctic";

export const github = new GitHub(
  env.GITHUB_CLIENT_ID,
  env.GITHUB_CLIENT_SECRET,
  { redirectURI: `${env.HOST_NAME}/api/sign-in/github/callback` },
);

export const githubStateCookie = "github_oauth_state";
