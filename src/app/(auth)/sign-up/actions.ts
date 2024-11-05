import { userService } from "@/services/user";
import { FormData } from "./types";
import { hashPassword } from "@/lib/password";
import { setSession } from "@/lib/session";

export const signUp = async ({
  email,
  password,
  confirmPassword,
}: FormData) => {
  if (password !== confirmPassword) {
    throw new Error(`passwords doesn't match`);
  }

  const [userAlreadyRegistered] = await userService.getByColumn("email", email);

  if (userAlreadyRegistered) {
    throw new Error("Email already in use");
  }

  const hashedPassword = await hashPassword(password);

  const createdUser = await userService.create({
    email,
    password: hashedPassword,
  });

  setSession(createdUser.id);
  return createdUser;
};
