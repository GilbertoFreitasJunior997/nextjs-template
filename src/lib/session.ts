import "server-only";
import { sessionService } from "@/services/session";
import { userService } from "@/services/user";
import { cache } from "react";
import { cookies } from "next/headers";
import { defaultSessionKey } from "@/app-config";

const {
  createSession,
  generateSessionToken,
  validateSessionToken,
  invalidateSession,
} = sessionService;

export const setSessionTokenCookie = async (token: string, expiresAt: Date) => {
  (await cookies()).set(defaultSessionKey, token, {
    httpOnly: true,
    sameSite: "lax",
    secure: process.env.NODE_ENV === "production",
    expires: expiresAt,
    path: "/",
  });
};

export const getCurrentUser = cache(async () => {
  const token = (await cookies()).get(defaultSessionKey);

  if (!token) {
    return;
  }

  const session = await validateSessionToken(token.value);

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
  const token = generateSessionToken();
  const session = await createSession(token, userId);

  await setSessionTokenCookie(token, session.expiresAt);
};

const deleteSessionTokenCookie = async () => {
  (await cookies()).delete(defaultSessionKey);
};

export const deleteSession = async () => {
  const token = (await cookies()).get(defaultSessionKey);

  if (!token) {
    return;
  }

  await invalidateSession(token.value);
  await deleteSessionTokenCookie();
};
