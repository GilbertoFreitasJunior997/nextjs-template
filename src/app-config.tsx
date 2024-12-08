import { DashboardIcon } from "@radix-ui/react-icons";
import { HomeIcon } from "lucide-react";
import Image from "next/image";
import { Route } from "./lib/types";
import logoImg from "./logo.png";

const brandName = "Template";

export const appConfig = {
  redirectSignInURL: "/",
  brandName,
  logo: (
    <Image
      className="w-10 h-10 rounded-full"
      src={logoImg}
      alt="Logo"
    />
  ),
  appName: (
    <div
      className="font-bold overflow-hidden text-ellipsis whitespace-nowrap pr-4"
      title={brandName}
    >
      {brandName}
    </div>
  ),
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
