"use client";
import { Button } from "@/components/button";
import { Label } from "@/components/label";
import { Popover } from "@/components/popover";

export const PopoverSample = () => {
  return (
    <div>
      <Label>Popover</Label>
      <Popover.Root>
        <Popover.Trigger asChild={true}>
          <Button>Open</Button>
        </Popover.Trigger>
        <Popover.Content>
          <Label>Text Popover</Label>
        </Popover.Content>
      </Popover.Root>
    </div>
  );
};
