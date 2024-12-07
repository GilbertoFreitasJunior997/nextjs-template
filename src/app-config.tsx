import { DashboardIcon } from "@radix-ui/react-icons";
import { HomeIcon } from "lucide-react";
import { Route } from "./lib/types";

export const appConfig = {
  redirectSignInURL: "/",
  logo: <div className="size-10 aspect-square rounded-full bg-emerald-500" />,
  appName: <div className="font-bold">Template</div>,
  routes: [
    {
      name: "Home",
      path: "/",
      icon: HomeIcon,
    },
    {
      name: "Dashboard",
      path: "/dashboard",
      icon: DashboardIcon,
    },
  ] satisfies Route[],
};
