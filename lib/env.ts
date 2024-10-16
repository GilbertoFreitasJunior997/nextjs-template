import { z } from "zod";

const envSchema = z.object({
	DATABASE_URL: z.string(),
	BASE_URL: z.string(),
	GOOGLE_CLIENT_SECRET: z.string(),
	GOOGLE_CLIENT_ID: z.string(),
});

export let env = {} as Env;
export type Env = z.infer<typeof envSchema>;

try {
	env = envSchema.parse(process.env);
} catch {
	throw new Error("Please insert the correct env vars.");
}
