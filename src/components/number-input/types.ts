import { OmitMerge } from "@/lib/types";
import { InputHTMLAttributes } from "react";

export type NumberInputFractionDigitsProps = {
  min?: number;
  max?: number;
};

export type NumberInputValueProps = {
  value: number | undefined;
  onChange: (value: number | undefined) => void;
};

export type NumberInputProps = OmitMerge<
  InputHTMLAttributes<HTMLInputElement>,
  NumberInputValueProps
> & {
  label?: string;
  fractionDigits?: NumberInputFractionDigitsProps;
};

export type NumberInputRef = HTMLInputElement;
