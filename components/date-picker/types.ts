import { Dispatch, SetStateAction } from "react";

export type DatePickerProps = {
	date: Date | undefined;
	setDate: Dispatch<SetStateAction<Date | undefined>>;
};
