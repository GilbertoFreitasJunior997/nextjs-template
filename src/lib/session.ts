"use server";
import "server-only";
import { sessionService } from "@/services/session";
import { userService } from "@/services/user";
import { cookies } from "next/headers";
import { cache } from "react";
import { sessionCookieKey } from "./consts";

const { createSession, generateToken, validateToken, invalidateSession } =
  sessionService;

export const setSessionTokenCookie = async (token: string, expiresAt: Date) => {
  const jar = await cookies();

  jar.set(sessionCookieKey, token, {
    httpOnly: true,
    sameSite: "lax",
    secure: process.env.NODE_ENV === "production",
    expires: expiresAt,
    path: "/",
  });
};

const getSessionToken = async () => {
  const jar = await cookies();

  return jar.get(sessionCookieKey)?.value;
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

export const isAuthenticated = async () => {
  const user = await getCurrentUser();

  return !!user;
};

export const setSession = async (userId: number) => {
  const token = generateToken();

  const session = await createSession(token, userId);

  await setSessionTokenCookie(token, session.expiresAt);
};

const deleteSessionTokenCookie = async () => {
  const jar = await cookies();

  jar.delete(sessionCookieKey);
};

export const deleteSession = async () => {
  const token = await getSessionToken();

  if (!token) {
    return;
  }

  await invalidateSession(token);
  await deleteSessionTokenCookie();
};
