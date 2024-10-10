"use client";
import { DataTable } from "@/components/data-table";
import { DataTableColumnHeader } from "@/components/data-table/components/data-table-column-header";
import { ColumnDef } from "@tanstack/react-table";

export type Payment = {
	id: string;
	amount: number;
	status: "pending" | "processing" | "success" | "failed";
	email: string;
};

export const columns: ColumnDef<Payment>[] = [
	{
		accessorKey: "status",
		header: ({ column }) => (
			<DataTableColumnHeader
				column={column}
				title="Status"
			/>
		),
	},
	{
		accessorKey: "email",
		header: ({ column }) => (
			<DataTableColumnHeader
				column={column}
				title="Email"
			/>
		),
	},
	{
		accessorKey: "amount",
		header: ({ column }) => (
			<DataTableColumnHeader
				column={column}
				title="Amount"
			/>
		),
	},
];

const data: Payment[] = [
	{
		id: "728e1252f",
		amount: 100,
		status: "pending",
		email: "m@example.com",
	},
	{
		id: "728ed5333332f",
		amount: 103,
		status: "pending",
		email: "m@example.com",
	},
	{
		id: "728ed52f",
		amount: 105,
		status: "pending",
		email: "m@example.com",
	},
];

export const DataTableSample = () => {
	return (
		<DataTable
			columns={columns}
			data={data}
		/>
	);
};
