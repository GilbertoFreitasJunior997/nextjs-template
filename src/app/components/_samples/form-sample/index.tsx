"use client";

import { Button } from "@/components/button";
import { Form } from "@/components/form";
import { Input } from "@/components/input";
import { NumberInput } from "@/components/number-input";
import { SelectInput } from "@/components/select-input";
import { selectBaseItemSchema } from "@/components/select-input/consts";
import { SelectBaseItem } from "@/components/select-input/types";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { z } from "zod";

const formSchema = z.object({
  username: z.string().min(2),
  age: z.number(),
  item: selectBaseItemSchema,
});
type FormData = z.infer<typeof formSchema>;

const items: SelectBaseItem[] = [
  {
    id: 1,
    label: "Item 1",
  },
  {
    id: 2,
    label: "Item 2",
  },
  {
    id: 3,
    label: "Item 3",
  },
  {
    id: 4,
    label: "Item 4",
  },
  {
    id: 5,
    label: "Item 5",
  },
  {
    id: 6,
    label: "Item 6",
  },
  {
    id: 7,
    label: "Item 7",
  },
];

export const FormSample = () => {
  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = (data: FormData) => {
    toast(JSON.stringify(data));
  };

  return (
    <div>
      <SelectInput
        name="username"
        items={items}
      />

      <Form
        form={form}
        onSubmit={onSubmit}
      >
        <Input
          name="username"
          form={form}
          type="email"
        />
        <NumberInput
          name="age"
          form={form}
          description="LA EEELE"
        />
        <SelectInput
          name="item"
          items={items}
          form={form}
        />

        <Button type="submit">Submit</Button>
      </Form>
    </div>
  );
};
