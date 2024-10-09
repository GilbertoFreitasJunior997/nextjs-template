import { AccordionSample } from "./_samples/accordion-sample";
import { BadgeSample } from "./_samples/badge-sample";
import { ButtonSample } from "./_samples/button-sample";

export default function ComponentsPage() {
	return (
		<div>
			Components
			<div className="space-y-6">
				<AccordionSample />
				<BadgeSample />
				<ButtonSample />
			</div>
		</div>
	);
}
