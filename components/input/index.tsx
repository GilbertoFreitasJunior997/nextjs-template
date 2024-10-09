import * as React from "react";

import { cn } from "@/lib/utils";
import { InputProps, InputRef } from "./types";
import { Label } from "../label";

export const Input = React.forwardRef<InputRef, InputProps>(
	({ className, label, ...props }, ref) => {
		const Comp = (
			<input
				className={cn(
					"flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50",
					className,
				)}
				ref={ref}
				{...props}
			/>
		);

		if (label) {
			return (
				<div className="space-y-1">
					<Label>{label}</Label>
					{Comp}
				</div>
			);
		}
		return Comp;
	},
);

Input.displayName = "Input";
