"use client";

import { appConfig } from "@/app-config";
import { ThemeSwitcher } from "@/components/theme-switcher";
import { cn } from "@/lib/utils";
import { useState } from "react";
import { SidebarItem } from "./sidebar-item";

export const Sidebar = () => {
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
        <button
          type="button"
          className="size-10 aspect-square rounded-full bg-emerald-500"
          onClick={toggleSidebarOpen}
        />

        <nav className="flex flex-col gap-2">
          {appConfig.routes.map((route) => (
            <SidebarItem
              key={route.path}
              route={route}
            />
          ))}
        </nav>
      </div>

      <div>
        <ThemeSwitcher />
      </div>
    </div>
  );
};
