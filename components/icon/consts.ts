import { cva } from "class-variance-authority";

export const iconVariants = cva("", {
	variants: {
		size: {
			default: "w-4 h-4",
			text: "font-[1em]",
			none: "",
		},
	},
	defaultVariants: {
		size: "default",
	},
});
