import { Route } from "./lib/types";

export const appConfig = {
  redirectSignInURL: "/",
  routes: [
    {
      name: "Landing",
      path: "/",
    },
    {
      name: "Dashboard",
      path: "/dashboard",
    },
  ] satisfies Route[],
};
