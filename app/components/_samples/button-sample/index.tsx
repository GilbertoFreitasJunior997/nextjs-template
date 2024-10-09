import { Button } from "@/components/button";
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
					<CheckIcon size="1em" />
				</Button>
				<Button
					size="icon"
					variant="destructive"
				>
					<CheckIcon size="1em" />
				</Button>
				<Button
					size="icon"
					variant="ghost"
				>
					<CheckIcon size="1em" />
				</Button>
				<Button
					size="icon"
					variant="link"
				>
					<CheckIcon size="1em" />
				</Button>
				<Button
					size="icon"
					variant="outline"
				>
					<CheckIcon size="1em" />
				</Button>
				<Button
					size="icon"
					variant="secondary"
				>
					<CheckIcon size="1em" />
				</Button>
			</div>
		</div>
	);
};
