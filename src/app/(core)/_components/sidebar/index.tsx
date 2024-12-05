"use client";

import { appConfig } from "@/app-config";
import { Icon } from "@/components/icon";
import { cn } from "@/lib/utils";
import { CaretLeftIcon } from "@radix-ui/react-icons";
import { useState } from "react";
import { SidebarItem } from "./sidebar-item";
import { SidebarProps } from "./types";

export const Sidebar = ({ UserNav }: SidebarProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebarOpen = () => {
    setIsOpen((isOpen) => !isOpen);
  };

  return (
    <div
      className={cn(
        "rounded-xl p-2 flex flex-col justify-between items-center border transition-[width]",
        isOpen ? "w-[258px]" : "w-[58px]",
      )}
    >
      <div className="space-y-6 w-full overflow-hidden">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-2">
            <button
              type="button"
              className="size-10 aspect-square rounded-full bg-emerald-500"
              onClick={toggleSidebarOpen}
            />
            {appConfig.appName}
          </div>

          <button
            type="button"
            className="hover:bg-muted size-6 grid place-content-center rounded-full"
            onClick={toggleSidebarOpen}
          >
            <Icon
              src={CaretLeftIcon}
              className="size-6"
            />
          </button>
        </div>

        <nav className="flex flex-col gap-2">
          {appConfig.routes.map((route) => (
            <SidebarItem
              key={route.path}
              route={route}
            />
          ))}
        </nav>
      </div>

      <div className="w-full">{UserNav}</div>
    </div>
  );
};