import { AnyPgColumn, AnyPgTable } from "drizzle-orm/pg-core";

export type BaseService<
  TModel,
  TInsert,
  TId extends number | string = number,
> = {
  create: (data: TInsert) => Promise<TModel>;
  get: () => Promise<TModel[]>;
  getById: (id: TId) => Promise<TModel>;
  update: (id: TId, data: Partial<TInsert>) => Promise<TModel>;
  delete: (id: TId) => Promise<TModel>;
};

export type BaseTable = AnyPgTable & { id: AnyPgColumn };
