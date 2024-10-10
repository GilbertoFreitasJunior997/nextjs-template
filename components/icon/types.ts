import { VariantProps } from "class-variance-authority";
import { LucideIcon } from "lucide-react";
import { iconVariants } from "./consts";
import { IconProps as RadixIconProps } from "@radix-ui/react-icons/dist/types";

export type RadixIcon = React.ForwardRefExoticComponent<
	RadixIconProps & React.RefAttributes<SVGSVGElement>
>;

export type IconProps = {
	src: LucideIcon | RadixIcon;
	className?: string;
} & VariantProps<typeof iconVariants>;
