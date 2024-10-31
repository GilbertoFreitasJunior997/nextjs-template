import { type ClassValue, clsx } from "clsx";
import { ResponseCookie } from "next/dist/compiled/@edge-runtime/cookies";
import { cookies } from "next/headers";
import { twMerge } from "tailwind-merge";

export const cn = (...inputs: ClassValue[]) => {
  return twMerge(clsx(inputs));
};

export const uppercaseFirstLetter = (str: string) =>
  `${str.substring(0, 1).toUpperCase()}${str.substring(1)}`;

export const noop = () => {};

export const getCookie = async (key: string) => {
  const cookie = (await cookies()).get(key)?.value ?? null;

  return cookie;
};

const defaultCookieOptions = {
  secure: true,
  path: "/",
  httpOnly: true,
  maxAge: 60 * 10,
};

export const setCookie = async (
  key: string,
  value: string,
  options: Partial<ResponseCookie> | undefined = defaultCookieOptions,
) => {
  (await cookies()).set(key, value, options);
};

export const deleteCookie = async (key: string) => {
  (await cookies()).delete(key);
};
