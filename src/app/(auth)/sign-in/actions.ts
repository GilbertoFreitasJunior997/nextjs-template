"use server";

import { verifyPasswordHash } from "@/lib/password";
import { setSession } from "@/lib/session";
import { userService } from "@/services/user";
import { SIGN_IN_INVALID_ERROR_MESSAGE } from "./consts";
import { SignInFormData } from "./sign-in-form";

export const signIn = async ({ email, password }: SignInFormData) => {
  const [dbUser] = await userService.getByColumn("email", email);

  if (!dbUser) {
    throw new Error(SIGN_IN_INVALID_ERROR_MESSAGE);
  }

  if (dbUser.githubId) {
    throw new Error("This email is associated to a Github account");
  }

  if (dbUser.googleId) {
    throw new Error("This email is associated to a Google account");
  }

  if (!dbUser.password) {
    throw new Error(SIGN_IN_INVALID_ERROR_MESSAGE);
  }

  const passwordMatches = verifyPasswordHash(dbUser.password, password);

  if (!passwordMatches) {
    throw new Error(SIGN_IN_INVALID_ERROR_MESSAGE);
  }

  const { password: _, ...user } = dbUser;

  await setSession(user.id);
  return user;
};
