import { DashboardIcon } from "@radix-ui/react-icons";
import { HomeIcon } from "lucide-react";
import { Route } from "./lib/types";

export const appConfig = {
  redirectSignInURL: "/",
  appName: "Template",
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
