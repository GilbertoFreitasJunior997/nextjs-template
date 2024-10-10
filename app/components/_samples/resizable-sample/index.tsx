"use client";

import { Resizable } from "@/components/resizable";

export const ResizableSample = () => {
	return (
		<Resizable.PanelGroup
			direction="horizontal"
			className="min-h-[200px] max-w-md rounded-lg border md:min-w-[450px]"
		>
			<Resizable.Panel defaultSize={25}>
				<div className="flex h-full items-center justify-center p-6">
					<span className="font-semibold">Header</span>
				</div>
			</Resizable.Panel>
			<Resizable.Handle />
			<Resizable.Panel defaultSize={75}>
				<div className="flex h-full items-center justify-center p-6">
					<span className="font-semibold">Content</span>
				</div>
			</Resizable.Panel>
		</Resizable.PanelGroup>
	);
};
