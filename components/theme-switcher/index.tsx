"use client";
import { useTheme } from "next-themes";
import { Button } from "../button";
import { DropdownMenu } from "../dropdown-menu";
import { Icon } from "../icon";
import { Moon, Sun } from "lucide-react";

export const ThemeSwitcher = () => {
	const { theme, setTheme } = useTheme();

	const Src = theme === "light" ? Sun : Moon;

	return (
		<DropdownMenu.Root>
			<DropdownMenu.Trigger asChild>
				<Button
					variant="outline"
					size="icon"
				>
					<Icon
						src={Src}
						className="rotate-0 scale-100 transition-all"
					/>
					<span className="sr-only">Toggle theme</span>
				</Button>
			</DropdownMenu.Trigger>
			<DropdownMenu.Content align="end">
				<DropdownMenu.Item onClick={() => setTheme("light")}>
					Light
				</DropdownMenu.Item>
				<DropdownMenu.Item onClick={() => setTheme("dark")}>
					Dark
				</DropdownMenu.Item>
				<DropdownMenu.Item onClick={() => setTheme("system")}>
					System
				</DropdownMenu.Item>
			</DropdownMenu.Content>
		</DropdownMenu.Root>
	);
};
