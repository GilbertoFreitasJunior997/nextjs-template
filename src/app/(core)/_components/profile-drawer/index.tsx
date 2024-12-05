import { User2 } from "lucide-react";
import { getCurrentUser } from "@/lib/session";
import { Sheet } from "@/components/sheet";
import { Button } from "@/components/button";
import { Icon } from "@/components/icon";
import { ProfileDrawerForm } from "./profile-drawer-form";

export const ProfileDrawer = async () => {
  const defaultValues = await getCurrentUser();

  return (
    <Sheet.Root>
      <Sheet.Trigger asChild>
        <Button
          size={"icon"}
          variant={"outline"}
        >
          <Icon src={User2} />
        </Button>
      </Sheet.Trigger>
      <Sheet.Content>
        <Sheet.Header>
          <Sheet.Title>Profile</Sheet.Title>
          <Sheet.Description>
            Manage your personal information here
          </Sheet.Description>
        </Sheet.Header>
        <ProfileDrawerForm defaultValues={defaultValues} />
      </Sheet.Content>
    </Sheet.Root>
  );
};
