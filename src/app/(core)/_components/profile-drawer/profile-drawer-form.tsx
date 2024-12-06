"use client";

import { Button } from "@/components/button";
import { Form } from "@/components/form";
import { Icon } from "@/components/icon";
import { Input } from "@/components/input";
import { Sheet } from "@/components/sheet";
import { useZodForm } from "@/lib/hooks/use-zod-form";
import { UserAuth } from "@/models/user.model";
import { Github } from "lucide-react";
import { z } from "zod";
import { updateProfile } from "./actions";
import { PROFILE_DRAWER_FORM_ID } from "./consts";

const formSchema = z.object({
  name: z.string(),
  email: z.string().readonly(),
});
export type ProfileFormData = z.infer<typeof formSchema>;

export const ProfileDrawerForm = ({ user }: { user: UserAuth }) => {
  const form = useZodForm({
    schema: formSchema,
    defaultValues: {
      name: user.name,
      email: user.email,
    },
  });

  const handleFormSubmit = async ({ name }: ProfileFormData) => {
    await updateProfile({ ...user, name });
  };

  return (
    <>
      <Sheet.Body className="space-y-6">
        <Form
          form={form}
          onSubmit={handleFormSubmit}
          id={PROFILE_DRAWER_FORM_ID}
        >
          <Input
            form={form}
            name="name"
          />
          <Input
            form={form}
            name="email"
            disabled={true}
            readOnly={true}
          />
        </Form>
        <div className="mt-6">
          <h1>Linked Accounts</h1>

          <div>
            <Icon
              src={Github}
              size={"default"}
              className="border rounded-full size-10"
            />
          </div>
        </div>
      </Sheet.Body>

      <Sheet.Footer>
        <Sheet.Close asChild>
          <Button variant="outline">Cancel</Button>
        </Sheet.Close>

        <Button form={PROFILE_DRAWER_FORM_ID}>Save</Button>
      </Sheet.Footer>
    </>
  );
};
