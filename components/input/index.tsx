import { cn } from "@/lib/utils";
import { FC, ForwardedRef, forwardRef } from "react";
import { FieldValues } from "react-hook-form";
import { Label } from "../label";
import { InputProps, InputRef } from "./types";

export const Input = forwardRef(
  <TForm extends FieldValues>(
    { className, label, form, ...props }: InputProps<TForm>,
    ref: ForwardedRef<InputRef>,
  ) => {
    const Comp = (
      <input
        className={cn(
          "flex h-8 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50",
          className,
        )}
        ref={ref}
        {...props}
      />
    );

    if (!label) {
      return Comp;
    }

    return (
      <div className="space-y-1">
        <Label>{label}</Label>
        {Comp}
      </div>
    );
  },
);
(Input as FC).displayName = "Input";
