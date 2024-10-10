"use client";
import { Select } from "@/components/select";

export const SelectSample = () => {
	return (
		<div>
			<p>Select</p>
			<Select.Root>
				<Select.Trigger className="w-[180px]">
					<Select.Value placeholder="Select a fruit" />
				</Select.Trigger>
				<Select.Content>
					<Select.Group>
						<Select.Label>Fruits</Select.Label>
						<Select.Item value="apple">Apple</Select.Item>
						<Select.Item value="banana">Banana</Select.Item>
						<Select.Item value="blueberry">Blueberry</Select.Item>
						<Select.Item value="grapes">Grapes</Select.Item>
						<Select.Item value="pineapple">Pineapple</Select.Item>
					</Select.Group>
				</Select.Content>
			</Select.Root>
		</div>
	);
};
