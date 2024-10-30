ALTER TABLE "users" RENAME COLUMN "googleId" TO "google_id";--> statement-breakpoint
ALTER TABLE "users" ADD COLUMN "password" text;--> statement-breakpoint
ALTER TABLE "users" ADD COLUMN "github_id" text;