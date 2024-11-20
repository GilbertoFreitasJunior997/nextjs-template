import { isAuthenticated } from "@/lib/session";
import { redirect } from "next/navigation";
import { PropsWithChildren } from "react";

export default async function AppLayout({ children }: PropsWithChildren) {
  if (!(await isAuthenticated())) {
    redirect("sign-in");
  }

  return <div>{children}</div>;
}
