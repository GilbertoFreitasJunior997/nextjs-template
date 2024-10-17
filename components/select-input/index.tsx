import { FieldValues } from "react-hook-form";
import { Select } from "../select";
import { SelectBaseItem, SelectInputProps } from "./types";

export const SelectInput = <
  TItem extends SelectBaseItem,
  TForm extends FieldValues,
>({
  items,
  value,
  onChange,
  placeholder,
  className,
  ...formProps
}: SelectInputProps<TItem, TForm>) => {
  const selectedValue = value ? String(value) : undefined;

  const handleChange = (newValue?: string) => {
    const value = items.find((item) => item.id === newValue);

    onChange(value);
  };

  return (
    <Select.Root
      value={selectedValue}
      onValueChange={handleChange}
    >
      <Select.Trigger className={className}>
        <Select.Value placeholder={placeholder} />
      </Select.Trigger>
      <Select.Content>
        {items.map((item) => (
          <Select.Item
            key={item.id}
            value={String(item.id)}
          >
            {item.label}
          </Select.Item>
        ))}
      </Select.Content>
    </Select.Root>
  );
};
