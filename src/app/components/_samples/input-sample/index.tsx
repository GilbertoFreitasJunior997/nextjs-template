import { Input } from "@/components/input";

export const InputSample = () => {
  return (
    <div>
      <p>Inputs</p>
      <div className="w-[50%]">
        <Input
          label="Text"
          name="textt"
        />
      </div>
    </div>
  );
};
