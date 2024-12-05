import { isAuthenticated } from "@/lib/session";
import { redirect } from "next/navigation";
import { PropsWithChildren } from "react";
import { CorePageLayout } from "./_components/core-page-layout";

export default async function AppLayout({ children }: PropsWithChildren) {
  if (!(await isAuthenticated())) {
    redirect("sign-in");
  }

  return <CorePageLayout> {children} </CorePageLayout>;
}
