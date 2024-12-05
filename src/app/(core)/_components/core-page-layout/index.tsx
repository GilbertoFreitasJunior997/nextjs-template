import { PropsWithChildren } from "react";
import { Sidebar } from "../sidebar";
import { UserNav } from "../sidebar/user-nav";

export const CorePageLayout = ({ children }: PropsWithChildren) => {
  return (
    <div className="h-dvh flex p-4 pr-0 gap-9">
      <Sidebar UserNav={<UserNav />} />

      <div className="flex flex-col w-full overflow-auto pr-4">
        <h1 className="font-semibold text-xl pt-4 pb-[10px]"> Dashboard </h1>

        {children}
      </div>
    </div>
  );
};
