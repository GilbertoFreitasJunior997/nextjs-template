import "server-only";
import { cache } from "react";
import { cookies } from "next/headers";
import { sessionService } from "@/services/session";
import { userService } from "@/services/user";

const SESSION_COOKIE_NAME = "session";

const { createSession, generateToken, validateToken, invalidateSession } =
  sessionService;

export async function setSessionTokenCookie(
  token: string,
  expiresAt: Date,
): Promise<void> {
  (await cookies()).set(SESSION_COOKIE_NAME, token, {
    httpOnly: true,
    sameSite: "lax",
    secure: process.env.NODE_ENV === "production",
    expires: expiresAt,
    path: "/",
  });
}

export async function deleteSessionTokenCookie(): Promise<void> {
  (await cookies()).set(SESSION_COOKIE_NAME, "", {
    httpOnly: true,
    sameSite: "lax",
    secure: process.env.NODE_ENV === "production",
    maxAge: 0,
    path: "/",
  });
}

export async function getSessionToken(): Promise<string | undefined> {
  return (await cookies()).get(SESSION_COOKIE_NAME)?.value;
}

export const getCurrentUser = cache(async () => {
  const token = await getSessionToken();

  if (!token) {
    return;
  }

  const res = await validateToken(token);

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
  const token = generateToken();
  const session = await createSession(token, userId);
  await setSessionTokenCookie(token, session.expiresAt);
}

export async function deleteSession() {
  const token = await getSessionToken();

  if (!token) {
    return;
  }

  await invalidateSession(token);
  await deleteSessionTokenCookie();
}
