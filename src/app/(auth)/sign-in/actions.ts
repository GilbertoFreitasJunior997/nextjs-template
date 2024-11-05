import { verifyPasswordHash } from "@/lib/password";
import { setSession } from "@/lib/session";
import { userService } from "@/services/user";
import { SIGN_IN_INVALID_ERROR_MESSAGE } from "./consts";
import { FormData } from "./types";

export const signIn = async ({ email, password }: FormData) => {
  const [user] = await userService.getByColumn("email", email);

  if (!user) {
    throw new Error(SIGN_IN_INVALID_ERROR_MESSAGE);
  }

  if (user.githubId) {
    throw new Error("This email is associated to a Github account");
  }

  if (user.googleId) {
    throw new Error("This email is associated to a Google account");
  }

  if (!user.password) {
    throw new Error(SIGN_IN_INVALID_ERROR_MESSAGE);
  }

  const passwordMatches = verifyPasswordHash(user.password, password);

  if (!passwordMatches) {
    throw new Error(SIGN_IN_INVALID_ERROR_MESSAGE);
  }

  await setSession(user.id);

  return user;
};
