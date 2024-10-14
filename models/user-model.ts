import { usersTable } from "@/db/schemas";
import type { InferInsertModel, InferSelectModel } from "drizzle-orm";

export type User = Omit<InferSelectModel<typeof usersTable>, "password">;

export type UsersInsert = InferInsertModel<typeof usersTable>;
