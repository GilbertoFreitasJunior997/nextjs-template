import { defaultSessionKey } from "@/app-config";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { PropsWithChildren } from "react";

export default async function AppLayout({ children }: PropsWithChildren) {
  const token = (await cookies()).get(defaultSessionKey);

  if (!token?.value) {
    redirect("/sign-in");
  }

  return <div>{children}</div>;
}
