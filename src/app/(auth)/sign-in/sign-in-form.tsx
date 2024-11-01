"use client";
import { Button } from "@/components/button";
import { Form } from "@/components/form";
import { Input } from "@/components/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { FormData, formSchema } from "./types";

export const SignInForm = () => {
  const form = useForm<FormData>({ resolver: zodResolver(formSchema) });

  const handleFormSubmit = (data: FormData) => {
    toast(JSON.stringify(data));
  };

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
      </div>

      <div>
        <Button
          type="submit"
          className="w-full"
        >
          Sign in
        </Button>
      </div>
    </Form>
  );
};
