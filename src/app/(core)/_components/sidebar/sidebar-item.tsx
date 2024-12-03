"use client";

import { cn } from "@/lib/utils";
import { ListIcon } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { SidebarItemProps } from "./types";
import { getIsSidebarItemCurrentPath } from "./utils";

export const SidebarItem = ({ route }: SidebarItemProps) => {
  const { name, path } = route;

  const pathname = usePathname();
  const isSelected = getIsSidebarItemCurrentPath(pathname, path);

  return (
    <Link
      className={cn(
        "h-10 rounded-xl flex items-center",
        isSelected ? "bg-accent-foreground text-accent" : "",
      )}
      href={path}
    >
      <div className="min-w-10 h-10 grid place-content-center">
        <ListIcon className="size-4" />
      </div>

      <span className="">{name}</span>
    </Link>
  );
};
