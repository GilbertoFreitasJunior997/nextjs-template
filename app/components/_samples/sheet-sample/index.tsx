"use client";

import { Button } from "@/components/button";
import { Sheet } from "@/components/sheet";

export const SheetSample = () => {
	return (
		<div>
			Sheet
			<Sheet.Root>
				<Sheet.Trigger asChild>
					<Button variant="outline">Open</Button>
				</Sheet.Trigger>
				<Sheet.Content>
					<Sheet.Header>
						<Sheet.Title>Edit profile</Sheet.Title>
						<Sheet.Description>
							Make changes to your profile here. Click save when you're done.
						</Sheet.Description>
					</Sheet.Header>

					<Sheet.Body> Content </Sheet.Body>

					<Sheet.Footer>
						<Sheet.Close asChild>
							<Button type="submit">Save changes</Button>
						</Sheet.Close>
					</Sheet.Footer>
				</Sheet.Content>
			</Sheet.Root>
		</div>
	);
};
