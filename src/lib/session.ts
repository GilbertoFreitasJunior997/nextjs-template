import "server-only";
import { cache } from "react";
import { cookies } from "next/headers";
import { sessionService } from "@/services/session";
import { userService } from "@/services/user";

const SESSION_COOKIE_NAME = "session";

const { createSession, generateSessionToken, validateSessionToken } =
  sessionService;

export function setSessionTokenCookie(token: string, expiresAt: Date): void {
  cookies().set(SESSION_COOKIE_NAME, token, {
    httpOnly: true,
    sameSite: "lax",
    secure: process.env.NODE_ENV === "production",
    expires: expiresAt,
    path: "/",
  });
}

export function deleteSessionTokenCookie(): void {
  //invalidateSession();

  cookies().set(SESSION_COOKIE_NAME, "", {
    httpOnly: true,
    sameSite: "lax",
    secure: process.env.NODE_ENV === "production",
    maxAge: 0,
    path: "/",
  });
}

export function getSessionToken(): string | undefined {
  return cookies().get(SESSION_COOKIE_NAME)?.value;
}

export const getCurrentUser = cache(async () => {
  const token = getSessionToken();

  if (!token) {
    return;
  }

  const res = await validateSessionToken(token);

  if (!res) {
    return;
  }

  return userService.getById(res.userId);
});

export const assertAuthenticated = async () => {
  const user = await getCurrentUser();
  if (!user) {
    throw new Error();
  }
  return user;
};

export async function setSession(userId: number) {
  const token = generateSessionToken();
  const session = await createSession(token, userId);
  setSessionTokenCookie(token, session.expiresAt);
}
