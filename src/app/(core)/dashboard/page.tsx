import { ProfileDrawer } from "@/app/(core)/_components/profile-drawer";
import { LogoffButton } from "./_components/sign-out-button";

export default function Page() {
  return (
    <div>
      <h1>dashboard</h1>
      <ProfileDrawer />

      <LogoffButton />
    </div>
  );
}
