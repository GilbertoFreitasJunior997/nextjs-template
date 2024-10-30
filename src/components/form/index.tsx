import { cn } from "@/lib/utils";
import { FormProps } from "./types";
import { FieldValues, FormProvider } from "react-hook-form";

export const Form = <TForm extends FieldValues>({
  form,
  children,
  onSubmit,
  onError,
  className,
  ...props
}: FormProps<TForm>) => {
  return (
    <FormProvider {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit, onError)}
        className={cn("space-y-6", className)}
        {...props}
      >
        {children}
      </form>
    </FormProvider>
  );
};
