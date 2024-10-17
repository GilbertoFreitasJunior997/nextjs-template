import { Button } from "@/components/button";
import { Icon } from "@/components/icon";
import { CheckIcon } from "lucide-react";

export const ButtonSample = () => {
  return (
    <div>
      Button
      <div className="flex gap-2 items-center">
        <Button variant="default"> Default </Button>
        <Button variant="destructive"> Destructive </Button>
        <Button variant="ghost"> Ghost </Button>
        <Button variant="link"> Link </Button>
        <Button variant="outline"> Outline </Button>
        <Button variant="secondary"> Secondary </Button>

        <Button
          size="icon"
          variant="default"
        >
          <Icon
            src={CheckIcon}
            size="text"
          />
        </Button>
        <Button
          size="icon"
          variant="destructive"
        >
          <Icon
            src={CheckIcon}
            size="text"
          />
        </Button>
        <Button
          size="icon"
          variant="ghost"
        >
          <Icon
            src={CheckIcon}
            size="text"
          />
        </Button>
        <Button
          size="icon"
          variant="link"
        >
          <Icon
            src={CheckIcon}
            size="text"
          />
        </Button>
        <Button
          size="icon"
          variant="outline"
        >
          <Icon
            src={CheckIcon}
            size="text"
          />
        </Button>
        <Button
          size="icon"
          variant="secondary"
        >
          <Icon
            src={CheckIcon}
            size="text"
          />
        </Button>
      </div>
    </div>
  );
};
