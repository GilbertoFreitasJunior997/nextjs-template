import { HTMLAttributes } from "react";
import { FieldErrors, FieldValues, Path, UseFormReturn } from "react-hook-form";

type FormCustomProps<TForm extends FieldValues> = {
  form: UseFormReturn<TForm>;
  onSubmit: (data: TForm) => void;
  onError?: (errors: FieldErrors<TForm>) => void;
};

export type InputCustomDefaultProps = {
  form?: never;
  description?: never;
};
export type InputFormDefaultProps<TForm extends FieldValues> = {
  form: UseFormReturn<TForm>;
  description?: string;
};

export type InputBaseDefaultProps<TForm extends FieldValues> = (
  | InputCustomDefaultProps
  | InputFormDefaultProps<TForm>
) & {
  label?: string;
};

export type InputDefaultPropsName<TForm extends FieldValues> =
  InputBaseDefaultProps<TForm>["form"] extends never
    ? string
    : NoInfer<Path<TForm>>;

export type InputDefaultProps<TForm extends FieldValues> =
  InputBaseDefaultProps<TForm> & {
    name: InputDefaultPropsName<TForm>;
  };

export type FormProps<TForm extends FieldValues> = Omit<
  HTMLAttributes<HTMLFormElement>,
  keyof FormCustomProps<TForm>
> &
  FormCustomProps<TForm>;
