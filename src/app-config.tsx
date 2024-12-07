import { DashboardIcon } from "@radix-ui/react-icons";
import { HomeIcon } from "lucide-react";
import Image from "next/image";
import { Route } from "./lib/types";
import logoImg from "./logo.png";

const brandName = "Money Map";

export const appConfig = {
  redirectSignInURL: "/",
  brandName,
  logo: (
    <Image
      className="rounded-full min-w-[40px] w-[40px]"
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
