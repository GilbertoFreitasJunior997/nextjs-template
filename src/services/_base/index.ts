import { db } from "@/db";
import { eq } from "drizzle-orm";
import { BaseService, BaseTable } from "./types";

export const createService = <
  TModel extends object,
  TInsert extends object,
  TId extends number | string = number,
>(
  table: BaseTable,
): BaseService<TModel, TInsert, TId> => {
  return {
    create: async (data: TInsert) => {
      const [newRecord] = await db.insert(table).values(data).returning();

      return newRecord as TModel;
    },
    get: async () => {
      const data = await db.select().from(table).execute();

      return data as TModel[];
    },
    getById: async (id: TId) => {
      const [data] = await db
        .select()
        .from(table)
        .where(eq(table.id, id))
        .limit(1);

      return data as TModel;
    },
    update: async (id: TId, data: Partial<TInsert>) => {
      const [updatedData] = await db
        .update(table)
        .set(data)
        .where(eq(table.id, id))
        .returning();

      return updatedData as TModel;
    },
    delete: async (id: TId) => {
      const data = await db.delete(table).where(eq(table.id, id)).returning();

      return data as TModel;
    },
  };
};
