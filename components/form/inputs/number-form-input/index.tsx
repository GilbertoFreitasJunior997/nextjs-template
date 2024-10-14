import { NumberInput } from "@/components/number-input";
import { uppercaseFirstLetter } from "@/lib/utils";
import { FieldValues } from "react-hook-form";
import { FormControl } from "../../components/form-control";
import { FormDescription } from "../../components/form-description";
import { FormField } from "../../components/form-field";
import { FormItem } from "../../components/form-item";
import { FormLabel } from "../../components/form-label";
import { FormMessage } from "../../components/form-message";
import { NumberFormInputProps } from "./types";

export const NumberFormInput = <TForm extends FieldValues>({
  name,
  form,
  label,
  description,
  ...props
}: NumberFormInputProps<TForm>) => {
  return (
    <FormField
      name={name}
      control={form.control}
      render={({ field }) => (
        <FormItem>
          <FormLabel>{label ?? uppercaseFirstLetter(name)}</FormLabel>
          <FormControl>
            <NumberInput
              {...props}
              {...field}
            />
          </FormControl>
          {!!description && <FormDescription>{description}</FormDescription>}
          <FormMessage />
        </FormItem>
      )}
    />
  );
};
