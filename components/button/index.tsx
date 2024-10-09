import { Slot } from "@radix-ui/react-slot";
import { cn } from "@/lib/utils";
import { ButtonProps, ButtonRef } from "./types";
import { buttonVariants } from "./consts";
import { forwardRef } from "react";

export const Button = forwardRef<ButtonRef, ButtonProps>(
	({ className, variant, size, asChild = false, ...props }, ref) => {
		const Comp = asChild ? Slot : "button";

		return (
			<Comp
				className={cn(buttonVariants({ variant, size, className }))}
				ref={ref}
				{...props}
			/>
		);
	},
);
Button.displayName = "Button";
