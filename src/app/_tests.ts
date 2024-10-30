"use server";

import { setSession } from "@/lib/session";
import { userService } from "@/services/user";

export const createUser = async () => {
  const user = await userService.create({
    name: "Laele da Silva",
    email: "laeledasilva@vinicao.com",
  });

  return user;
};

export const login = async () => {
  await setSession(3);
};
