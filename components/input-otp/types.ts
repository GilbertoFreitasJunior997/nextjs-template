import { OTPInput } from "input-otp";
import { ComponentPropsWithoutRef, ElementRef } from "react";

export type InputOtpProps = ComponentPropsWithoutRef<typeof OTPInput>;

export type InputOtpRef = ElementRef<typeof OTPInput>;

export type InputOtpGroupProps = ComponentPropsWithoutRef<"div">;

export type InputOtpGroupRef = ElementRef<"div">;

export type InputOtpSlotProps = ComponentPropsWithoutRef<"div"> & {
	index: number;
};

export type InputOtpSlotRef = ElementRef<"div">;

export type InputOtpSeparatorProps = ComponentPropsWithoutRef<"hr">;

export type InputOtpSeparatorRef = ElementRef<"hr">;
