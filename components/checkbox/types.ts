import { Root } from "@radix-ui/react-checkbox";
import { ComponentPropsWithoutRef, ElementRef } from "react";

export type CheckboxRef = ElementRef<typeof Root>;
export type CheckboxProps = ComponentPropsWithoutRef<typeof Root> & {
	label?: string;
};
