"use client";
import { DataTable } from "@/components/data-table";
import { createDataTableColumns } from "@/components/utils/create-data-table-columns";

export type Payment = {
	id: string;
	amount: number;
	status: "pending" | "processing" | "success" | "failed";
	email: string;
};

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
	{
		id: "728e1252f",
		amount: 100,
		status: "failed",
		email: "m@example.com",
	},
	{
		id: "728ed5333332f",
		amount: 103,
		status: "failed",
		email: "m@example.com",
	},
	{
		id: "728ed52f",
		amount: 105,
		status: "pending",
		email: "m@example.com",
	},
	{
		id: "728e1252f",
		amount: 100,
		status: "success",
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
		status: "failed",
		email: "m@example.com",
	},
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

const columns = createDataTableColumns<Payment>([
	{ key: "status", title: "Status" },
	{ key: "email", title: "Email" },
	{ key: "amount", title: "Amount" },
]);

export const DataTableSample = () => {
	return (
		<DataTable
			columns={columns}
			data={data}
		/>
	);
};
