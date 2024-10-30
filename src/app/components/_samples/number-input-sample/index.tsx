"use client";

import { NumberInput } from "@/components/number-input";
import { useState } from "react";

export const NumberInputSample = () => {
  const [value, setValue] = useState<number>();

  return (
    <NumberInput
      name="number"
      value={value}
      onChange={setValue}
      label="Number input"
    />
  );
};
