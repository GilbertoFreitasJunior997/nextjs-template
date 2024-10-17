import { InputProps } from "@/components/input/types";
import { OmitMerge } from "@/lib/types";
import { FieldValues } from "react-hook-form";
import { FormInputProps } from "../../types";

export type TextFormInputProps<TForm extends FieldValues> = OmitMerge<
  InputProps,
  FormInputProps<TForm>
>;
