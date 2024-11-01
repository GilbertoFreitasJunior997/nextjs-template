import { defaultSessionKey } from "@/app-config";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { PropsWithChildren } from "react";

export default async function AuthLayout({ children }: PropsWithChildren) {
  const token = (await cookies()).get(defaultSessionKey);

  if (token?.value) {
    redirect("/dashboard");
  }

  return (
    <div className="flex items-center justify-center min-h-screen">
      {children}
    </div>
  );
}
