import { HTMLAttributes } from "react";
import { FieldErrors, FieldValues, Path, UseFormReturn } from "react-hook-form";

type FormCustomProps<TForm extends FieldValues> = {
  form: UseFormReturn<TForm>;
  onSubmit: (data: TForm) => void;
  onError?: (errors: FieldErrors<TForm>) => void;
};

export type FormInputProps<TForm extends FieldValues> = {
  name: Path<TForm>;
  form: UseFormReturn<TForm>;
  description?: string;
};

export type FormProps<TForm extends FieldValues> = Omit<
  HTMLAttributes<HTMLFormElement>,
  keyof FormCustomProps<TForm>
> &
  FormCustomProps<TForm>;
