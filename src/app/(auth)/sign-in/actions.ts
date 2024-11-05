import { userService } from "@/services/user";
import { FormData } from "./types";
import { setSession } from "@/lib/session";
import { verifyPasswordHash } from "@/lib/password";

export const signIn = async ({ email, password }: FormData) => {
  const [user] = await userService.getByColumn("email", email);

  if (!user) {
    throw new Error("incorrect email or password");
  }

  const passwordMatches = verifyPasswordHash(user.password!, password);

  if (!passwordMatches) {
    throw new Error("incorrect email or password");
  }

  setSession(user.id);
  return user;
};
