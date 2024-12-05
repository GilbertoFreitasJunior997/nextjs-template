import { Sheet } from "@/components/sheet";
import { ProfileDrawerForm } from "./profile-drawer-form";

export const ProfileDrawer = async () => {
  return (
    <Sheet.Root>
      <Sheet.Trigger asChild>
        <div>Profile</div>
      </Sheet.Trigger>
      <Sheet.Content>
        <Sheet.Header>
          <Sheet.Title>Profile</Sheet.Title>
          <Sheet.Description>
            Manage your personal information here
          </Sheet.Description>
        </Sheet.Header>
        <ProfileDrawerForm />
      </Sheet.Content>
    </Sheet.Root>
  );
};
