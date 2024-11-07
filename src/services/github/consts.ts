import { GitHub } from "arctic";
import { env } from "@/lib/env";

export const github = new GitHub(
  env.GITHUB_CLIENT_ID,
  env.GITHUB_CLIENT_SECRET,
  { redirectURI: `${env.HOST_NAME}/api/sign-in/github/callback` },
);
