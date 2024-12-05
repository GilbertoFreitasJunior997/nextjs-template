import { DropdownMenu } from "@/components/dropdown-menu";
import { Icon } from "@/components/icon";
import { db } from "@/db";
import { usersTable } from "@/db/schemas";
import { UserCircle2 } from "lucide-react";

export const UserNav = async () => {
  const [user] = await db.select().from(usersTable).limit(1);

  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger asChild>
        <button
          className="h-10 w-full rounded-xl flex items-center transition-colors hover:bg-muted overflow-hidden"
          type="button"
          title="Profile"
        >
          <div className="min-w-10 h-10 grid place-content-center">
            <Icon
              src={UserCircle2}
              className="size-4"
            />
          </div>

          <span>Account</span>
        </button>
      </DropdownMenu.Trigger>
      <DropdownMenu.Content
        className="w-56"
        forceMount
      >
        <DropdownMenu.Label className="font-normal">
          <div className="flex flex-col space-y-1">
            <p className="text-sm font-medium leading-none">{user?.name}</p>
            <p className="text-xs leading-none text-muted-foreground">
              {user?.email}
            </p>
          </div>
        </DropdownMenu.Label>
        <DropdownMenu.Separator />
        <DropdownMenu.Group>
          <DropdownMenu.Item>Profile</DropdownMenu.Item>

          <DropdownMenu.Item>Settings</DropdownMenu.Item>
        </DropdownMenu.Group>
        <DropdownMenu.Separator />
        <DropdownMenu.Item>Log out</DropdownMenu.Item>
      </DropdownMenu.Content>
    </DropdownMenu.Root>
  );
};
