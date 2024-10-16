import { AccordionSample } from "./_samples/accordion-sample";
import { BadgeSample } from "./_samples/badge-sample";
import { ButtonSample } from "./_samples/button-sample";
import { CalendarSample } from "./_samples/calendar-sample";
import { CheckboxSample } from "./_samples/checkbox-sample";
import { CommandSample } from "./_samples/command-sample";
import { DataTableSample } from "./_samples/data-table-sample";
import { DatePickerSample } from "./_samples/date-picker-sample";
import { DialogSample } from "./_samples/dialog-sample";
import { DropdownMenuSample } from "./_samples/dropdown-menu-sample";
import { FormSample } from "./_samples/form-sample";
import { InputOtpSample } from "./_samples/input-otp-sample";
import { InputSample } from "./_samples/input-sample";
import { LabelSample } from "./_samples/label-sample";
import { NumberInputSample } from "./_samples/number-input-sample";
import { PopoverSample } from "./_samples/popover-sample";
import { ProgressSample } from "./_samples/progress-sample";
import { ResizableSample } from "./_samples/resizable-sample";
import { SelectSample } from "./_samples/select-sample";
import { SheetSample } from "./_samples/sheet-sample";
import { SkeletonSample } from "./_samples/skeleton-sample";
import { SonnerSample } from "./_samples/sonner-sample";
import { SwitchSample } from "./_samples/switch-sample";
import { TextareaSample } from "./_samples/textarea-sample";
import { ThemeSwitcherSample } from "./_samples/theme-switcher-sample";

export default function ComponentsPage() {
  return (
    <div className="p-4">
      Components
      <div className="space-y-4">
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
        <SwitchSample />
        <TextareaSample />
        <ResizableSample />
        <ThemeSwitcherSample />
        <NumberInputSample />
        <FormSample />
      </div>
    </div>
  );
}
