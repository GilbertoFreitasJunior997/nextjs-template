import "dotenv/config";
import { defineConfig } from "drizzle-kit";

export default defineConfig({
	schema: "./db/schema.ts",
	out: "./db/drizzle",
	dialect: "postgresql",
	driver: "pglite",
	dbCredentials: { url: process.env.DATABASE_URL ?? "" },
});
