import { AnyPgColumn, AnyPgTable } from "drizzle-orm/pg-core";

export type BaseService<TModel, TInsert> = {
	create: (data: TInsert) => Promise<TModel>;
	get: () => Promise<TModel[]>;
	getById: (id: unknown) => Promise<TModel>;
	update: (id: unknown, data: Partial<TInsert>) => Promise<TModel>;
	delete: (id: unknown) => Promise<TModel>;
};

export type BaseTable = AnyPgTable & { id: AnyPgColumn };
