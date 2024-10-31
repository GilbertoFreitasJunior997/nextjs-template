import { NextRequest, NextResponse } from "next/server";
import { getCookie } from "./lib/utils";
import { defaultSessionKey } from "./lib/session";

export async function middleware(request: NextRequest): Promise<NextResponse> {
  const token = await getCookie(defaultSessionKey);

  const isAuthRoute =
    request.nextUrl.pathname.startsWith("/sign-in") ||
    request.nextUrl.pathname.startsWith("/sign-up");

  if (!token && !isAuthRoute) {
    return NextResponse.redirect(new URL("/sign-in", request.url));
  }

  if (token && isAuthRoute) {
    return NextResponse.redirect(new URL("/dashboard", request.url));
  }

  return NextResponse.next();
}
