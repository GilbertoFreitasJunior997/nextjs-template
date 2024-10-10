"use client";
import { Button } from "@/components/button";
import { toast } from "sonner";

export const SonnerSample = () => {
	const handleClick = () => {
		toast("I am an example");
	};

	return (
		<div>
			<Button onClick={handleClick}>Sonner Example</Button>
		</div>
	);
};
