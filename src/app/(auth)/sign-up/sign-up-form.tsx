"use client";

import { Button } from "@/components/button";
import { Form } from "@/components/form";
import { Input } from "@/components/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { signUp } from "./actions";

const formSchema = z
  .object({
    email: z.string().email(),
    name: z.string().min(2, {
      message: "Name must be at least 2 characters",
    }),
    password: z.string().min(6, {
      message: "Password must be at least 6 characters",
    }),
    confirmPassword: z.string(),
  })
  .superRefine(({ confirmPassword, password }, ctx) => {
    if (confirmPassword !== password) {
      ctx.addIssue({
        code: "custom",
        message: "Passwords don't match",
        path: ["confirmPassword"],
      });
    }
  });
export type SignUpFormData = z.infer<typeof formSchema>;

export const SignUpForm = () => {
  const form = useForm<SignUpFormData>({ resolver: zodResolver(formSchema) });

  const { mutate, isPending } = useMutation({
    mutationFn: (formData: SignUpFormData) => signUp(formData),
  });

  return (
    <Form
      form={form}
      onSubmit={mutate}
    >
      <div className="space-y-4">
        <Input
          form={form}
          name="name"
        />
        <Input
          form={form}
          name="email"
        />
        <Input
          form={form}
          name="password"
          type="password"
        />
        <Input
          form={form}
          name="confirmPassword"
          label="Confirm password"
          type="password"
        />
      </div>

      <div>
        <Button
          type="submit"
          className="w-full"
          disabled={isPending}
        >
          Sign up
        </Button>
      </div>
    </Form>
  );
};
