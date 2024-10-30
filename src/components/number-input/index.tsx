import { fixedForwardRef } from "@/lib/react";
import { cn } from "@/lib/utils";
import { ChangeEvent, ForwardedRef, useMemo } from "react";
import { FieldValues } from "react-hook-form";
import { Input } from "../input";
import { NumberInputProps, NumberInputRef } from "./types";

const NumberInputBase = <TForm extends FieldValues>(
  {
    form,
    onChange,
    className,
    value,
    fractionDigits,
    ...props
  }: NumberInputProps<TForm>,
  ref: ForwardedRef<NumberInputRef>,
) => {
  const { min, max } = fractionDigits ?? {};

  const formatter = useMemo(
    () =>
      new Intl.NumberFormat("en-US", {
        minimumFractionDigits: min,
        maximumFractionDigits: max,
      }),
    [min, max],
  );

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;

    let newValue: number | undefined = undefined;

    try {
      newValue = Number.parseFloat(value.replaceAll(",", ""));
      newValue = Number.isNaN(newValue) ? undefined : newValue;
    } finally {
      onChange(newValue);
    }
  };

  let inputValue = value ? formatter.format(value) : "";
  if (inputValue === "NaN") {
    inputValue = "";
  }

  return (
    <Input
      className={cn(
        "flex h-8 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50",
        className,
      )}
      ref={ref}
      value={inputValue}
      onChange={handleChange}
      {...props}
    />
  );
};

export const NumberInput = fixedForwardRef(NumberInputBase);
