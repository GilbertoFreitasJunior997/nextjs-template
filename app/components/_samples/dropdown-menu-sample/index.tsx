"use client";

import {
	Cloud,
	CreditCard,
	Github,
	Keyboard,
	LifeBuoy,
	LogOut,
	Mail,
	MessageSquare,
	Plus,
	PlusCircle,
	Settings,
	User,
	UserPlus,
	Users,
} from "lucide-react";
import { Button } from "@/components/button";
import { DropdownMenu } from "@/components/dropdown-menu";
import { Icon } from "@/components/icon";

export const DropdownMenuSample = () => {
	return (
		<div>
			DropdownMenu
			<DropdownMenu.Root>
				<DropdownMenu.Trigger asChild>
					<Button variant="outline">Open</Button>
				</DropdownMenu.Trigger>
				<DropdownMenu.Content className="w-56">
					<DropdownMenu.Label>My Account</DropdownMenu.Label>
					<DropdownMenu.Separator />
					<DropdownMenu.Group>
						<DropdownMenu.Item>
							<Icon
								src={User}
								className="mr-2"
							/>
							<span>Profile</span>
							<DropdownMenu.Shortcut>⇧⌘P</DropdownMenu.Shortcut>
						</DropdownMenu.Item>
						<DropdownMenu.Item>
							<Icon
								src={CreditCard}
								className="mr-2"
							/>
							<span>Billing</span>
							<DropdownMenu.Shortcut>⌘B</DropdownMenu.Shortcut>
						</DropdownMenu.Item>
						<DropdownMenu.Item>
							<Icon
								src={Settings}
								className="mr-2"
							/>
							<span>Settings</span>
							<DropdownMenu.Shortcut>⌘S</DropdownMenu.Shortcut>
						</DropdownMenu.Item>
						<DropdownMenu.Item>
							<Icon
								src={Keyboard}
								className="mr-2"
							/>
							<span>Keyboard shortcuts</span>
							<DropdownMenu.Shortcut>⌘K</DropdownMenu.Shortcut>
						</DropdownMenu.Item>
					</DropdownMenu.Group>
					<DropdownMenu.Separator />
					<DropdownMenu.Group>
						<DropdownMenu.Item>
							<Icon
								src={Users}
								className="mr-2"
							/>
							<span>Team</span>
						</DropdownMenu.Item>
						<DropdownMenu.Sub>
							<DropdownMenu.SubTrigger>
								<Icon
									src={UserPlus}
									className="mr-2"
								/>
								<span>Invite users</span>
							</DropdownMenu.SubTrigger>
							<DropdownMenu.Portal>
								<DropdownMenu.SubContent>
									<DropdownMenu.Item>
										<Icon
											src={Mail}
											className="mr-2"
										/>
										<span>Email</span>
									</DropdownMenu.Item>
									<DropdownMenu.Item>
										<Icon
											src={MessageSquare}
											className="mr-2"
										/>
										<span>Message</span>
									</DropdownMenu.Item>
									<DropdownMenu.Separator />
									<DropdownMenu.Item>
										<Icon
											src={PlusCircle}
											className="mr-2"
										/>
										<span>More...</span>
									</DropdownMenu.Item>
								</DropdownMenu.SubContent>
							</DropdownMenu.Portal>
						</DropdownMenu.Sub>
						<DropdownMenu.Item>
							<Icon
								src={Plus}
								className="mr-2"
							/>
							<span>New Team</span>
							<DropdownMenu.Shortcut>⌘+T</DropdownMenu.Shortcut>
						</DropdownMenu.Item>
					</DropdownMenu.Group>
					<DropdownMenu.Separator />
					<DropdownMenu.Item>
						<Icon
							src={Github}
							className="mr-2"
						/>
						<span>GitHub</span>
					</DropdownMenu.Item>
					<DropdownMenu.Item>
						<Icon
							src={LifeBuoy}
							className="mr-2"
						/>
						<span>Support</span>
					</DropdownMenu.Item>
					<DropdownMenu.Item disabled>
						<Icon
							src={Cloud}
							className="mr-2"
						/>
						<span>API</span>
					</DropdownMenu.Item>
					<DropdownMenu.Separator />
					<DropdownMenu.Item>
						<Icon
							src={LogOut}
							className="mr-2"
						/>
						<span>Log out</span>
						<DropdownMenu.Shortcut>⇧⌘Q</DropdownMenu.Shortcut>
					</DropdownMenu.Item>
				</DropdownMenu.Content>
			</DropdownMenu.Root>
		</div>
	);
};
