import "server-only";
import { sessionService } from "@/services/session";
import { userService } from "@/services/user";
import { cookies } from "next/headers";
import { cache } from "react";
import { sessionCookieKey } from "./consts";

const { createSession, generateToken, validateToken, invalidateSession } =
  sessionService;

export const setSessionTokenCookie = async (token: string, expiresAt: Date) => {
  (await cookies()).set(sessionCookieKey, token, {
    httpOnly: true,
    sameSite: "lax",
    secure: process.env.NODE_ENV === "production",
    expires: expiresAt,
    path: "/",
  });
};

export const getCurrentUser = cache(async () => {
  const token = (await cookies()).get(sessionCookieKey);

  if (!token) {
    return;
  }

  const session = await validateToken(token.value);

  if (!session) {
    return;
  }

  const user = userService.getById(session.userId);
  return user;
});

export const assertAuthenticated = async () => {
  const user = await getCurrentUser();

  if (!user) {
    throw new Error();
  }

  return user;
};

export const setSession = async (userId: number) => {
  const token = generateToken();
  const session = await createSession(token, userId);

  await setSessionTokenCookie(token, session.expiresAt);
};

const deleteSessionTokenCookie = async () => {
  (await cookies()).delete(sessionCookieKey);
};

export const deleteSession = async () => {
  const token = (await cookies()).get(sessionCookieKey);

  if (!token) {
    return;
  }

  await invalidateSession(token.value);
  await deleteSessionTokenCookie();
};
