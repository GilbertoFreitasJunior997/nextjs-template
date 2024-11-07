"use client";

import { Button } from "@/components/button";
import { Form } from "@/components/form";
import { Input } from "@/components/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { signIn } from "./actions";

const formSchema = z.object({
  email: z.string().email(),
  password: z.string(),
});
export type SignInFormData = z.infer<typeof formSchema>;

export const SignInForm = () => {
  const form = useForm<SignInFormData>({ resolver: zodResolver(formSchema) });

  const { mutate, isPending } = useMutation({
    mutationFn: (formData: SignInFormData) => signIn(formData),
  });

  return (
    <Form
      form={form}
      onSubmit={mutate}
    >
      <div className="space-y-4">
        <Input
          form={form}
          name="email"
        />
        <Input
          form={form}
          name="password"
          type="password"
        />
      </div>

      <div>
        <Button
          type="submit"
          className="w-full"
          disabled={isPending}
        >
          Sign in
        </Button>
      </div>
    </Form>
  );
};
