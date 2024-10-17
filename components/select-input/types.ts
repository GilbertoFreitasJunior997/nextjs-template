import { ReactNode } from "react";
import { FieldValues } from "react-hook-form";
import { InputDefaultProps } from "../form/types";

export type SelectBaseItem = {
  id: number | string;
  label: string;
};

export type SelectInputProps<
  TItem extends SelectBaseItem,
  TForm extends FieldValues,
> = InputDefaultProps<TForm> & {
  items: TItem[];
  value?: TItem;
  onChange: (value?: TItem) => void;
  className?: string;
  placeholder?: ReactNode;
};
