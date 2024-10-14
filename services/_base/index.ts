import { db } from "@/db";
import { BaseService, BaseTable } from "./types";
import { eq } from "drizzle-orm";

export const createService = <TModel extends object, TInsert extends object>(
	table: BaseTable,
): BaseService<TModel, TInsert> => {
	return {
		create: async (data: TInsert) => {
			const [newRecord] = await db.insert(table).values(data).returning();

			return newRecord as TModel;
		},
		get: async () => {
			const data = await db.select().from(table).execute();

			return data as TModel[];
		},
		getById: async (id: unknown) => {
			const [data] = await db
				.select()
				.from(table)
				.where(eq(table.id, id))
				.limit(1);

			return data as TModel;
		},
		update: async (id: unknown, data: Partial<TInsert>) => {
			const [updatedData] = await db
				.update(table)
				.set(data)
				.where(eq(table.id, id))
				.returning();

			return updatedData as TModel;
		},
		delete: async (id: unknown) => {
			const data = await db.delete(table).where(eq(table.id, id)).returning();

			return data as TModel;
		},
	};
};
