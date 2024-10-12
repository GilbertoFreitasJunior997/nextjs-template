import { HTMLAttributes } from "react";
import { FieldErrors, FieldValues, UseFormReturn } from "react-hook-form";

type FormCustomProps<TForm extends FieldValues> = {
  form: UseFormReturn<TForm>;
  onSubmit: (data: TForm) => void;
  onError?: (errors: FieldErrors<TForm>) => void;
};

export type FormInputProps<TForm extends FieldValues> = {
  form: UseFormReturn<TForm>;
};

export type FormProps<TForm extends FieldValues> = Omit<
  HTMLAttributes<HTMLFormElement>,
  keyof FormCustomProps<TForm>
> &
  FormCustomProps<TForm>;
