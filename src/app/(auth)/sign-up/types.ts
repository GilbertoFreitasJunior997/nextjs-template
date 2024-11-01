import { z } from "zod";

export const formSchema = z.object({
  email: z.string().email(),
  password: z.string(),
  confirmPassword: z.string(),
});
export type FormData = z.infer<typeof formSchema>;
