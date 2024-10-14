import { sessionsTable } from "@/db/schemas";
import { createService } from "../_base";
import {
	Session as sessionModel,
	SessionsInsert,
} from "@/models/session-model";
import {
	encodeBase32LowerCaseNoPadding,
	encodeHexLowerCase,
} from "@oslojs/encoding";
import { sha256 } from "@oslojs/crypto/sha2";
import { DEFAULT_EXPIRATION_DAYS_IN_MS } from "./consts";

const {
	create,
	getById,
	delete: deleteSession,
	update,
} = createService<sessionModel, SessionsInsert>(sessionsTable);

export const sessionService = {
	generateSessionToken: () => {
		const bytes = new Uint8Array(20);
		crypto.getRandomValues(bytes);
		const token = encodeBase32LowerCaseNoPadding(bytes);
		return token;
	},
	createSession: async (token: string, userId: number) => {
		const sessionId = encodeHexLowerCase(
			sha256(new TextEncoder().encode(token)),
		);
		const session: sessionModel = {
			id: sessionId,
			userId,
			expiresAt: new Date(Date.now() + DEFAULT_EXPIRATION_DAYS_IN_MS),
		};
		await create(session);

		return session;
	},
	validateSessionToken: async (token: string) => {
		const sessionId = encodeHexLowerCase(
			sha256(new TextEncoder().encode(token)),
		);

		const { id, expiresAt } = await getById(sessionId);
		const currentDate = Date.now();

		if (currentDate >= expiresAt.getTime()) {
			await deleteSession(id);
			return;
		}

		if (
			currentDate >=
			expiresAt.getTime() - DEFAULT_EXPIRATION_DAYS_IN_MS / 2
		) {
			//if there's less than 15 days (half of the default expiration), extend the active session for more 30 days
			const expiresAt = new Date(Date.now() + DEFAULT_EXPIRATION_DAYS_IN_MS);
			return await update(id, { expiresAt });
		}
	},
	invalidateSession: async (sessionId: string) => {
		await deleteSession(sessionId);
	},
};
