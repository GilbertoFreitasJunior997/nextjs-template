import { AccordionSample } from "./_samples/accordion-sample";
import { BadgeSample } from "./_samples/badge-sample";
import { ButtonSample } from "./_samples/button-sample";
import { CalendarSample } from "./_samples/calendar-sample";
import { CheckboxSample } from "./_samples/checkbox-sample";
import { CommandSample } from "./_samples/command-sample";
import { DialogSample } from "./_samples/dialog-sample";
import { LabelSample } from "./_samples/label-sample";
import { SheetSample } from "./_samples/sheet-sample";
import { PopoverSample } from "./_samples/popover-sample";
import { InputSample } from "./_samples/input-sample";
import { DropdownMenuSample } from "./_samples/dropdown-menu-sample";
import { DatePickerSample } from "./_samples/date-picker-sample";
import { SkeletonSample } from "./_samples/skeleton-sample";
import { SelectSample } from "./_samples/select-sample";
import { ProgressSample } from "./_samples/progress-sample";
import { InputOtpSample } from "./_samples/input-otp-sample";
import { SonnerSample } from "./_samples/sonner-sample";
import { TextareaSample } from "./_samples/textarea-sample";
import { ThemeSwitcherSample } from "./_samples/theme-switcher-sample";
import { DataTableSample } from "./_samples/data-table-sample";

export default function ComponentsPage() {
	return (
		<div className="p-4">
			Components
			<div className="space-y-4 mt-20">
				<DataTableSample />
				<AccordionSample />
				<BadgeSample />
				<ButtonSample />
				<CheckboxSample />
				<LabelSample />
				<CommandSample />
				<DialogSample />
				<PopoverSample />
				<SheetSample />
				<CalendarSample />
				<InputSample />
				<DropdownMenuSample />
				<DatePickerSample />
				<SkeletonSample />
				<SelectSample />
				<ProgressSample />
				<InputOtpSample />
				<SonnerSample />
				<TextareaSample />
				<ThemeSwitcherSample />
			</div>
		</div>
	);
}
