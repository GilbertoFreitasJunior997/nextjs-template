import { forwardRef } from "react";
import { FormMessageProps, FormMessageRef } from "./types";
import { useFormField } from "../../context/form-field-context/hooks/use-form-field";
import { cn } from "@/lib/utils";

export const FormMessage = forwardRef<FormMessageRef, FormMessageProps>(
  ({ className, children, ...props }, ref) => {
    const { error, formMessageId } = useFormField();
    const body = error ? String(error?.message) : children;

    if (!body) {
      return null;
    }

    return (
      <p
        ref={ref}
        id={formMessageId}
        className={cn("text-[0.8rem] font-medium text-destructive", className)}
        {...props}
      >
        {body}
      </p>
    );
  },
);
FormMessage.displayName = "FormMessage";
