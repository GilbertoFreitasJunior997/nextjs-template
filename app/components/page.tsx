import { AccordionSample } from "./_samples/accordion-sample";
import { BadgeSample } from "./_samples/badge-sample";
import { CommandSample } from "./_samples/command-sample";
import { ButtonSample } from "./_samples/button-sample";
import { DialogSample } from "./_samples/dialog-sample";

export default function ComponentsPage() {
	return (
		<div>
			Components
			<div className="space-y-6">
				<AccordionSample />
				<BadgeSample />
				<ButtonSample />
				<DialogSample />
				<CommandSample />
			</div>
		</div>
	);
}
