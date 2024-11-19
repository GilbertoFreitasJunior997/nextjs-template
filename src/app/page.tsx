import { appConfig } from "@/app-config";
import { sessionCookieKey } from "@/lib/consts";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export default async function Page() {
  const c = await cookies();
  const token = c.get(sessionCookieKey);

  if (token?.value) {
    redirect(appConfig.redirectSignInURL);
  }

  redirect("/sign-in");
}
