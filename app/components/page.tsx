import { AccordionSample } from "./_samples/accordion-sample";
import { BadgeSample } from "./_samples/badge-sample";
import { ButtonSample } from "./_samples/button-sample";
import { CheckboxSample } from "./_samples/checkbox-sample";
import { CommandSample } from "./_samples/command-sample";
import { DialogSample } from "./_samples/dialog-sample";
import { LabelSample } from "./_samples/label-sample";
import { SheetSample } from "./_samples/sheet-sample";

export default function ComponentsPage() {
	return (
		<div>
			Components
			<div className="space-y-4">
				<AccordionSample />
				<BadgeSample />
				<ButtonSample />
				<CheckboxSample />
				<CommandSample />
				<DialogSample />
				<LabelSample />
				<SheetSample />
			</div>
		</div>
	);
}
