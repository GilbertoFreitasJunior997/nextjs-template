import { Component1Icon, DashboardIcon } from "@radix-ui/react-icons";
import { HomeIcon } from "lucide-react";
import { Route } from "./lib/types";

export const appConfig = {
  redirectSignInURL: "/",
  routes: [
    {
      name: "Landing",
      path: "/",
      icon: HomeIcon,
    },
    {
      name: "Dashboard",
      path: "/dashboard",
      icon: DashboardIcon,
    },
    {
      name: "Components",
      path: "/components",
      icon: Component1Icon,
    },
  ] satisfies Route[],
};
