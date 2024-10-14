import { ColumnDef } from "@tanstack/react-table";
import { DataTableColumnConfig } from "./types";
import { DataTableColumnHeader } from "@/components/data-table/components/data-table-column-header";

export const createDataTableColumns = <T,>(
	configs: DataTableColumnConfig<T>[],
): ColumnDef<T>[] => {
	return configs.map((config) => ({
		accessorKey: config.key,
		header: ({ column }) =>
			config.customHeader ? (
				config.customHeader(column)
			) : (
				<DataTableColumnHeader
					column={column}
					title={config.title ?? String(config.key)}
				/>
			),
	}));
};
