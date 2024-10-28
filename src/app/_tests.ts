"use server";

import { sessionService } from "@/services/session";
import { userService } from "@/services/user";
import { cookies } from "next/headers";
import { cache } from "react";
import "server-only";

export const createUser = async () => {
  const user = await userService.create({
    email: "laele@vinicao.com",
  });

  return user;
};

export async function setSessionTokenCookie(token: string, expiresAt: Date) {
  cookies().set("session", token, {
    httpOnly: true,
    sameSite: "lax",
    secure: process.env.NODE_ENV === "production",
    expires: expiresAt,
    path: "/",
  });
}

export async function deleteSessionTokenCookie() {
  cookies().set("session", "", {
    httpOnly: true,
    sameSite: "lax",
    secure: process.env.NODE_ENV === "production",
    maxAge: 0,
    path: "/",
  });
}

export const getCurrentSession = cache(async () => {
  const token = cookies().get("session")?.value ?? null;
  if (token === null) {
    return { session: null, user: null };
  }
  const result = await sessionService.validateSessionToken(token);
  return result;
});

export const login = async () => {
  const token = sessionService.generateSessionToken();

  const session = await sessionService.createSession(token, 1);

  return { token, session };
};
