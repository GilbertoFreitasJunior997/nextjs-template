import { ReactNode } from "react";
import {
  ControllerFieldState,
  ControllerRenderProps,
  FieldValues,
  UseFormStateReturn,
} from "react-hook-form";
import { InputDefaultProps } from "../../types";

export type FormBaseInputChildrenProps<TForm extends FieldValues> = {
  field: ControllerRenderProps<TForm>;
  fieldState: ControllerFieldState;
  formState: UseFormStateReturn<TForm>;
};

export type FormBaseInputProps<TForm extends FieldValues> =
  InputDefaultProps<TForm> & {
    children: (props: FormBaseInputChildrenProps<TForm>) => ReactNode;
  };
