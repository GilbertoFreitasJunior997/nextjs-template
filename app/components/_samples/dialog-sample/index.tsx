import { Dialog } from "@/components/dialog";

export const DialogSample = () => {
	return (
		<Dialog.Root>
			<Dialog.Trigger asChild>
				{/* <Button variant="outline">Dialog</Button> */}
			</Dialog.Trigger>
			<Dialog.Content className="sm:max-w-[425px]">
				<Dialog.Header>
					<Dialog.Title>Edit profile</Dialog.Title>
					<Dialog.Description>
						Make changes to your profile here. Click save when you're done.
					</Dialog.Description>
				</Dialog.Header>
				<div> Dialog. content</div>
				<Dialog.Footer>
					{/* <Button type="submit">Save changes</Button> */}
				</Dialog.Footer>
			</Dialog.Content>
		</Dialog.Root>
	);
};
