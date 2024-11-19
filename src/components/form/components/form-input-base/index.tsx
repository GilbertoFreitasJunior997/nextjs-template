<<<<<<< HEAD
=======
import { uppercaseFirstLetter } from "@/lib/utils";
>>>>>>> 6db77b543c96c1c14ea0d8bd27809aa6e30d17ba
import { FieldValues, Path } from "react-hook-form";
import { FormControl } from "../form-control";
import { FormDescription } from "../form-description";
import { FormField } from "../form-field";
import { FormItem } from "../form-item";
<<<<<<< HEAD
=======
import { FormLabel } from "../form-label";
>>>>>>> 6db77b543c96c1c14ea0d8bd27809aa6e30d17ba
import { FormMessage } from "../form-message";
import { FormInputBaseProps } from "./types";

export const FormInputBase = <TForm extends FieldValues>({
  form,
  name,
  description,
<<<<<<< HEAD
=======
  label,
>>>>>>> 6db77b543c96c1c14ea0d8bd27809aa6e30d17ba
  children,
}: FormInputBaseProps<TForm>) => {
  if (!form) {
    return children({});
  }

  return (
    <FormField
      name={name as Path<TForm>}
      control={form.control}
      render={(renderParams) => (
        <FormItem>
<<<<<<< HEAD
=======
          <FormLabel>{label ?? uppercaseFirstLetter(name as string)}</FormLabel>
>>>>>>> 6db77b543c96c1c14ea0d8bd27809aa6e30d17ba
          <FormControl>{children(renderParams)}</FormControl>
          {!!description && <FormDescription>{description}</FormDescription>}
          <FormMessage />
        </FormItem>
      )}
    />
  );
};
