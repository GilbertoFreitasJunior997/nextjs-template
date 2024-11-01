import "server-only";
import { deleteCookie, getCookie, setCookie } from "@/app/_lib/cookies";
import { sessionService } from "@/services/session";
import { userService } from "@/services/user";
import { cache } from "react";

export const defaultSessionKey = "session";

const { createSession, generateToken, validateToken, invalidateSession } =
  sessionService;

export const setSessionTokenCookie = async (token: string, expiresAt: Date) => {
  await setCookie(defaultSessionKey, token, {
    httpOnly: true,
    sameSite: "lax",
    secure: process.env.NODE_ENV === "production",
    expires: expiresAt,
    path: "/",
  });
};

export const getCurrentUser = cache(async () => {
  const token = await getCookie(defaultSessionKey);

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
  await deleteCookie(defaultSessionKey);
};

export const deleteSession = async () => {
  const token = await getCookie(defaultSessionKey);

  if (!token) {
    return;
  }

  await invalidateSession(token);
  await deleteSessionTokenCookie();
};
