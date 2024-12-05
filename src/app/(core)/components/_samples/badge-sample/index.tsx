import { Badge } from "@/components/badge";

export const BadgeSample = () => {
  return (
    <div>
      Badge
      <div className="space-x-1">
        <Badge>default</Badge>
        <Badge variant={"secondary"}>secondary</Badge>
        <Badge variant={"destructive"}>destructive</Badge>
        <Badge variant={"outline"}>outline</Badge>
      </div>
    </div>
  );
};
