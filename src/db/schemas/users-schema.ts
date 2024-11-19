import { relations } from "drizzle-orm";
import { pgTable, serial, text } from "drizzle-orm/pg-core";
import { sessionsTable } from "./sessions-schema";

export const usersTable = pgTable("users", {
  id: serial("id").primaryKey(),
  email: text().notNull().unique(),
  googleId: text(),
  name: text(),
});

export const usersRelations = relations(usersTable, ({ many }) => ({
  sessions: many(sessionsTable),
}));
