"use client";

import * as CheckboxPrimitive from "@radix-ui/react-checkbox";
import { CheckIcon } from "@radix-ui/react-icons";

import { cn } from "@/lib/utils";
import { forwardRef } from "react";
import { CheckboxProps, CheckboxRef } from "./types";

export const Checkbox = forwardRef<CheckboxRef, CheckboxProps>(
	({ className, label, ...props }, ref) => (
		<CheckboxPrimitive.Root
			ref={ref}
			className={cn(
				"peer flex items-center gap-1 shrink-0 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50",
				className,
			)}
			{...props}
		>
			<CheckboxPrimitive.Indicator
				className={cn(
					" flex size-4 items-center border border-primary justify-center text-current data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground",
				)}
			>
				<CheckIcon className="size-4" />
			</CheckboxPrimitive.Indicator>

			<div className="text-sm select-none cursor-pointer">{label}</div>
		</CheckboxPrimitive.Root>
	),
);

Checkbox.displayName = CheckboxPrimitive.Root.displayName;
