import { uppercaseFirstLetter } from "@/lib/utils";
import { FieldValues } from "react-hook-form";
import { FormControl } from "../form-control";
import { FormDescription } from "../form-description";
import { FormField } from "../form-field";
import { FormItem } from "../form-item";
import { FormLabel } from "../form-label";
import { FormMessage } from "../form-message";
import { FormBaseInputProps } from "./types";

export const FormBaseInput = <TForm extends FieldValues>({
  form,
  name,
  description,
  label,
  children,
}: FormBaseInputProps<TForm>) => {
  if (!form) {
    return null;
  }

  return (
    <FormField
      name={name}
      control={form.control}
      render={(renderParams) => (
        <FormItem>
          <FormLabel>{label ?? uppercaseFirstLetter(name)}</FormLabel>
          <FormControl>{children(renderParams)}</FormControl>
          {!!description && <FormDescription>{description}</FormDescription>}
          <FormMessage />
        </FormItem>
      )}
    />
  );
};
