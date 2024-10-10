"use client";

import { Command } from "@/components/command";
import { Icon } from "@/components/icon";
import {
	Calculator,
	Calendar,
	CreditCard,
	Settings,
	Smile,
	User,
} from "lucide-react";

export const CommandSample = () => {
	return (
		<div>
			Command
			<Command.Root className="rounded-lg border shadow-md w-[450px]">
				<Command.Input placeholder="Type a command. or search..." />
				<Command.List>
					<Command.Empty>No results found.</Command.Empty>
					<Command.Group heading="Suggestions">
						<Command.Item>
							<Icon
								src={Calendar}
								className="mr-2"
							/>
							<span>Calendar</span>
						</Command.Item>
						<Command.Item>
							<Icon
								src={Smile}
								className="mr-2"
							/>
							<span>Search Emoji</span>
						</Command.Item>
						<Command.Item disabled>
							<Icon
								src={Calculator}
								className="mr-2"
							/>
							<span>Calculator</span>
						</Command.Item>
					</Command.Group>
					<Command.Separator />
					<Command.Group heading="Settings">
						<Command.Item>
							<Icon
								src={User}
								className="mr-2"
							/>
							<span>Profile</span>
							<Command.Shortcut>⌘P</Command.Shortcut>
						</Command.Item>
						<Command.Item>
							<Icon
								src={CreditCard}
								className="mr-2"
							/>
							<span>Billing</span>
							<Command.Shortcut>⌘B</Command.Shortcut>
						</Command.Item>
						<Command.Item>
							<Icon
								src={Settings}
								className="mr-2"
							/>
							<span>Settings</span>
							<Command.Shortcut>⌘S</Command.Shortcut>
						</Command.Item>
					</Command.Group>
				</Command.List>
			</Command.Root>
		</div>
	);
};
