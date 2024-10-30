"use client";
import { Button } from "@/components/button";
import { Form } from "@/components/form";
import { Input } from "@/components/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

const formSchema = z.object({
  email: z.string().email(),
  password: z.string(),
  confirmPassword: z.string(),
});
type FormData = z.infer<typeof formSchema>;

export const SignUpForm = () => {
  const form = useForm<FormData>({ resolver: zodResolver(formSchema) });

  const handleFormSubmit = () => {};
  return (
    <Form
      form={form}
      onSubmit={handleFormSubmit}
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
        >
          Sign up
        </Button>
      </div>
    </Form>
  );
};
