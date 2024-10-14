import { InputHTMLAttributes } from "react";

export type NumberInputProps = InputHTMLAttributes<HTMLInputElement> & {
  label?: string;
};

export type NumberInputRef = HTMLInputElement;
