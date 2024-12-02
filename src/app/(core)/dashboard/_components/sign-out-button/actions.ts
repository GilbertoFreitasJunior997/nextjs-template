"use server";

import { sessionCookieKey } from "@/lib/consts";
import { sessionService } from "@/services/session";
import { cookies } from "next/headers";

export const logoff = async () => {
  const c = await cookies();

  const session = c.get(sessionCookieKey);

  if (session) {
    c.delete(sessionCookieKey);
    sessionService.invalidateSession(session?.value);
  }
};
