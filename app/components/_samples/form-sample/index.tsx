"use client";

import { Button } from "@/components/button";
import { Form } from "@/components/form";
import { FormControl } from "@/components/form/components/form-control";
import { FormDescription } from "@/components/form/components/form-description";
import { FormField } from "@/components/form/components/form-field";
import { FormItem } from "@/components/form/components/form-item";
import { FormLabel } from "@/components/form/components/form-label";
import { FormMessage } from "@/components/form/components/form-message";
import { Input } from "@/components/input";
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
      className="w-2/3 space-y-6"
    >
      <FormField
        control={form.control}
        name="username"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Username</FormLabel>
            <FormControl>
              <Input
                form={form}
                {...field}
              />
            </FormControl>
            <FormDescription>This is your public display name.</FormDescription>
            <FormMessage />
          </FormItem>
        )}
      />
      <Button type="submit">Submit</Button>
    </Form>
  );
};
