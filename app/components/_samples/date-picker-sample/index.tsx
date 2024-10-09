"use client";
import { DatePicker } from "@/components/date-picker";
import { useState } from "react";

export const DatePickerSample = () => {
	const [date, setDate] = useState<Date>();
	return (
		<div>
			Date Picker
			<DatePicker
				date={date}
				setDate={setDate}
			/>
		</div>
	);
};
