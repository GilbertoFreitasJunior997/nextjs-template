import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs));
}

// export function setSessionTokenCookie(token: string, expiresAt: Date): void {
// 	cookies().set("session", token, {
// 		httpOnly: true,
// 		sameSite: "lax",
// 		secure: process.env.NODE_ENV === "production",
// 		expires: expiresAt,
// 		path: "/",
// 	});
// }

// export function deleteSessionTokenCookie(): void {
// 	cookies().set("session", "", {
// 		httpOnly: true,
// 		sameSite: "lax",
// 		secure: process.env.NODE_ENV === "production",
// 		maxAge: 0,
// 		path: "/",
// 	});
// }

// export const getCurrentSession = cache(async () => {
// 	const token = cookies().get("session")?.value ?? null;
// 	if (token === null) {
// 		return { session: null, user: null };
// 	}
// 	const result = await sessionService.validateSessionToken(token);
// 	return result;
// });
