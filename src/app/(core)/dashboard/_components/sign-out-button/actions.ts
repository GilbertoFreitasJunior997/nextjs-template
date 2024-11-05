"use server";

import { sessionCookieKey } from "@/lib/consts";
import { googleCodeCookie, googleStateCookie } from "@/services/google/consts";
import { sessionService } from "@/services/session";
import { cookies } from "next/headers";

export const logoff = async () => {
  const c = await cookies();

  const session = c.get(sessionCookieKey);
  if (session) {
    c.delete(sessionCookieKey);
    c.delete(googleCodeCookie);
    c.delete(googleStateCookie);
    sessionService.invalidateSession(session?.value);
  }
};
