import { cn } from "@/lib/utils";
import { ForwardedRef, forwardRef } from "react";
import { Label } from "../label";
import { NumberInputProps, NumberInputRef } from "./types";

export const NumberInput = forwardRef(
  (
    { className, label, ...props }: NumberInputProps,
    ref: ForwardedRef<NumberInputRef>,
  ) => {
    const Comp = (
      <input
        className={cn(
          "flex h-8 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50",
          className,
        )}
        ref={ref}
        type="number"
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
NumberInput.displayName = "NumberInput";
