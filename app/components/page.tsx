import { AccordionSample } from "./_samples/accordion-sample";
import { BadgeSample } from "./_samples/badge-sample";
import { ButtonSample } from "./_samples/button-sample";
import { CalendarSample } from "./_samples/calendar-sample";
import { CheckboxSample } from "./_samples/checkbox-sample";
import { CommandSample } from "./_samples/command-sample";
import { DialogSample } from "./_samples/dialog-sample";
import { LabelSample } from "./_samples/label-sample";

export default function ComponentsPage() {
	return (
		<div className="p-4">
			Components
			<div className="space-y-4">
				<AccordionSample />
				<BadgeSample />
				<ButtonSample />
				<CheckboxSample />
				<CommandSample />
				<DialogSample />
				<LabelSample />
				<CalendarSample />
			</div>
		</div>
	);
}
