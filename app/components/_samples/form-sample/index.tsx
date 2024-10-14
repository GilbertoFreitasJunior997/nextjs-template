"use client";

import { Button } from "@/components/button";
import { Form } from "@/components/form";
import { TextFormInput } from "@/components/form/inputs/text-form-input";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { z } from "zod";

const formSchema = z.object({
  username: z.string().min(2),
});
type FormData = z.infer<typeof formSchema>;

export const FormSample = () => {
  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
    },
  });

  const onSubmit = (data: FormData) => {
    toast(JSON.stringify(data));
  };

  return (
    <Form
      form={form}
      onSubmit={onSubmit}
    >
      <TextFormInput
        form={form}
        name="username"
      />

      <Button type="submit">Submit</Button>
    </Form>
  );
};
