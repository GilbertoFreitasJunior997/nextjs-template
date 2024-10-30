import "server-only";
import { sessionService } from "@/services/session";
import { userService } from "@/services/user";
import { cookies } from "next/headers";
import { cache } from "react";

const DEFAULT_SESSION_COOKIE_NAME = "session";

const { createSession, generateToken, validateToken, invalidateSession } =
  sessionService;

export const setSessionTokenCookie = async (token: string, expiresAt: Date) => {
  (await cookies()).set(DEFAULT_SESSION_COOKIE_NAME, token, {
    httpOnly: true,
    sameSite: "lax",
    secure: process.env.NODE_ENV === "production",
    expires: expiresAt,
    path: "/",
  });
};

const getSessionToken = async () => {
  return (await cookies()).get(DEFAULT_SESSION_COOKIE_NAME)?.value;
};

export const getCurrentUser = cache(async () => {
  const token = await getSessionToken();

  if (!token) {
    return;
  }

  const session = await validateToken(token);

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
  (await cookies()).delete(DEFAULT_SESSION_COOKIE_NAME);
};

export const deleteSession = async () => {
  const token = await getSessionToken();

  if (!token) {
    return;
  }

  await invalidateSession(token);
  await deleteSessionTokenCookie();
};
