"use server";

import { sessionService } from "@/services/session";
import { userService } from "@/services/user";
import "server-only";

export const createUser = async () => {
	const user = await userService.create({
		email: "laele@vinicao.com",
	});

	return user;
};

export const login = async () => {
	const token = sessionService.generateSessionToken();
	const session = await sessionService.createSession(token, 1);

	return { token, session };
};
