import { AccordionSample } from "./_samples/accordion-sample";
import { BadgeSample } from "./_samples/badge-sample";
import { CheckboxSample } from "./_samples/checkbox-sample";
import { LabelSample } from "./_samples/label-sample";
import { ButtonSample } from "./_samples/button-sample";

export default function ComponentsPage() {
	return (
		<div>
			Components
			<div className="space-y-2">
				<AccordionSample />
				<BadgeSample />
				<LabelSample />
				<CheckboxSample />
				<ButtonSample />
			</div>
		</div>
	);
}
