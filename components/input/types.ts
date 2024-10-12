import { OmitMerge } from "@/lib/types";
import { InputHTMLAttributes } from "react";
import { FieldValues } from "react-hook-form";
import { FormInputProps } from "../form/types";

export type InputProps<TForm extends FieldValues> = OmitMerge<
  InputHTMLAttributes<HTMLInputElement>,
  FormInputProps<TForm>
> & {
  label?: string;
};

export type InputRef = HTMLInputElement;
