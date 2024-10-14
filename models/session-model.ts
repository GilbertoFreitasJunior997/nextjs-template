import { sessionsTable } from "@/db/schemas";
import type { InferInsertModel, InferSelectModel } from "drizzle-orm";

export type Session = InferSelectModel<typeof sessionsTable>;

export type SessionsInsert = InferInsertModel<typeof sessionsTable>;