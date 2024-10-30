import { userService } from "@/services/user";
import { FormData } from "./types";
import { setSession } from "@/lib/session";

export const signIn = async ({ email, password }: FormData) => {
  const [user] = await userService.getByColumn("email", email);

  const passwordMatches = user.password === password;

  if (!user || !passwordMatches) {
    throw new Error("incorrect email or password");
  }

  setSession(user.id);
};
