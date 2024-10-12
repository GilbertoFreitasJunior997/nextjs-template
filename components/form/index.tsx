import { FieldValues, FormProvider } from "react-hook-form";
import { FormProps } from "./types";

export const Form = <TForm extends FieldValues>({
  form,
  children,
  onSubmit,
  onError,
  ...props
}: FormProps<TForm>) => {
  return (
    <FormProvider {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit, onError)}
        {...props}
      >
        {children}
      </form>
    </FormProvider>
  );
};
