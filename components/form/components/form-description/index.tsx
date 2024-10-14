import { forwardRef } from "react";
import { FormDescriptionProps, FormDescriptionRef } from "./types";
import { cn } from "@/lib/utils";
import { useFormField } from "../../context/form-field-context/hooks/use-form-field";

export const FormDescription = forwardRef<
  FormDescriptionRef,
  FormDescriptionProps
>(({ className, ...props }, ref) => {
  const { formDescriptionId } = useFormField();

  return (
    <p
      ref={ref}
      id={formDescriptionId}
      className={cn("text-[0.8rem] text-muted-foreground", className)}
      {...props}
    />
  );
});
FormDescription.displayName = "FormDescription";