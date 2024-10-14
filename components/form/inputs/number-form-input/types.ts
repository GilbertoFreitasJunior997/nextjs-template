import { NumberInputProps } from "@/components/number-input/types";
import { OmitMerge } from "@/lib/types";
import { FieldValues } from "react-hook-form";
import { FormInputProps } from "../../types";

export type NumberFormInputProps<TForm extends FieldValues> = OmitMerge<
  Partial<NumberInputProps>,
  FormInputProps<TForm>
>;
