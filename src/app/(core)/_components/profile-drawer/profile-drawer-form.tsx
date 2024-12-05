"use client";

import { Form } from "@/components/form";
import { Input } from "@/components/input";
import { Sheet } from "@/components/sheet";
import { useZodForm } from "@/lib/hooks/use-zod-form";
import { z } from "zod";

const formSchema = z.object({
  id: z.number(),
  name: z.string(),
  email: z.string(),
  googleId: z.string(),
  githubId: z.string(),
  password: z.string(),
});

export type ProfileFormData = z.infer<typeof formSchema>;

export const ProfileDrawerForm = ({
  defaultValues,
}: { defaultValues?: ProfileFormData }) => {
  const form = useZodForm({ schema: formSchema, defaultValues });

  const handleFormSubmit = async (data: ProfileFormData) => {
    //console.log(data);
  };

  return (
    <Form
      form={form}
      onSubmit={handleFormSubmit}
    >
      <Sheet.Body>
        <Input
          form={form}
          name="name"
        />
      </Sheet.Body>
    </Form>
  );
};
