import { Column } from "@tanstack/react-table";
import { ReactNode } from "react";

export type DataTableColumnConfig<T> = {
	key: keyof T;
	title?: string;
	customHeader?: (column: Column<T>) => ReactNode;
};
