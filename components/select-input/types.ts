import { ReactNode } from "react";
import { FieldValues } from "react-hook-form";
import { InputDefaultProps } from "../form/types";

export type SelectBaseItem = {
  id: number | string;
  label: string;
};

export type SelectInputChangeProps<TItem extends SelectBaseItem> = {
  onChange: (value?: NoInfer<TItem>) => void;
};

export type SelectInputProps<
  TItem extends SelectBaseItem,
  TForm extends FieldValues,
> = InputDefaultProps<TForm> & {
  items: TItem[];
  value?: TItem;
  className?: string;
  placeholder?: ReactNode;
} & SelectInputChangeProps<TItem>;
