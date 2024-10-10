"use client";

import { MixerHorizontalIcon } from "@radix-ui/react-icons";
import { DataTableViewOptionsProps } from "./types";
import { DropdownMenu } from "@/components/dropdown-menu";
import { Button } from "@/components/button";

export function DataTableViewOptions<TData>({
	table,
}: DataTableViewOptionsProps<TData>) {
	return (
		<DropdownMenu.Root>
			<DropdownMenu.Trigger asChild>
				<Button
					variant="outline"
					size="sm"
					className="ml-auto hidden h-8 lg:flex"
				>
					<MixerHorizontalIcon className="mr-2 h-4 w-4" />
					View
				</Button>
			</DropdownMenu.Trigger>
			<DropdownMenu.Content
				align="end"
				className="w-[150px]"
			>
				<DropdownMenu.Label>Toggle columns</DropdownMenu.Label>
				<DropdownMenu.Separator />
				{table
					.getAllColumns()
					.filter(
						(column) =>
							typeof column.accessorFn !== "undefined" && column.getCanHide(),
					)
					.map((column) => {
						return (
							<DropdownMenu.CheckboxItem
								key={column.id}
								className="capitalize"
								checked={column.getIsVisible()}
								onCheckedChange={(value) => column.toggleVisibility(!!value)}
							>
								{column.id}
							</DropdownMenu.CheckboxItem>
						);
					})}
			</DropdownMenu.Content>
		</DropdownMenu.Root>
	);
}
