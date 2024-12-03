"use client";

import { DataTable } from "@/components/data-table";
import { PropsWithChildren } from "react";
import { Sidebar } from "../sidebar";

const data = Array(1000)
  .fill(0)
  .map((_, i) => ({
    first: i,
    second: ["HEY", "AAAAA", "BELOOO"][i % 3],
    third: "THIRD",
  }));

export const CorePageLayout = ({ children }: PropsWithChildren) => {
  return (
    <div className="h-dvh flex p-4 pr-0 gap-9">
      <Sidebar />

      <div className="flex flex-col w-full overflow-auto pr-4">
        <h1 className="font-semibold text-xl pt-4 pb-[10px]"> Dashboard </h1>

        <DataTable
          columns={[
            {
              accessorKey: "first",
            },
            {
              accessorKey: "second",
            },
            {
              accessorKey: "third",
            },
          ]}
          data={data}
        />
      </div>
    </div>
  );
};
