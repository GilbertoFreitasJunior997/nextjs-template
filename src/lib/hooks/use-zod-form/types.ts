import { ZodSchema } from "zod";

export type UseZodFormOptions<TSchema extends ZodSchema> = {
  schema: TSchema;
};
