"use server";

import "server-only";
import { hashPassword } from "@/lib/password";
import { setSession } from "@/lib/session";
import { userService } from "@/services/user";
import { SignUpFormData } from "./sign-up-form";

export const signUp = async ({
  email,
  password,
  confirmPassword,
}: SignUpFormData) => {
  if (password !== confirmPassword) {
    throw new Error(`passwords doesn't match`);
  }

  const [dbUser] = await userService.getByColumn("email", email);

  if (dbUser?.githubId) {
    throw new Error("This email is associated to a Github account");
  }

  if (dbUser?.googleId) {
    throw new Error("This email is associated to a Google account");
  }

  if (dbUser) {
    throw new Error("Email already in use");
  }

  const hashedPassword = await hashPassword(password);

  const { password: _, ...createdUser } = await userService.create({
    email,
    password: hashedPassword,
  });

  await setSession(createdUser.id);
  return createdUser;
};
