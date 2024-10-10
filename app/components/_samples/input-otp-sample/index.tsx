"use client";
import { InputOtp } from "@/components/input-otp";

export const InputOtpSample = () => {
	return (
		<div>
			<p>Input OTP</p>
			<InputOtp.Root maxLength={6}>
				<InputOtp.Group>
					<InputOtp.Slot index={0} />
					<InputOtp.Slot index={1} />
					<InputOtp.Slot index={2} />
				</InputOtp.Group>
				<InputOtp.Separator />
				<InputOtp.Group>
					<InputOtp.Slot index={3} />
					<InputOtp.Slot index={4} />
					<InputOtp.Slot index={5} />
				</InputOtp.Group>
			</InputOtp.Root>
		</div>
	);
};
