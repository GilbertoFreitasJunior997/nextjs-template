import { ActionDataResult } from "@/lib/types";

export type UseActionMutationOptions<TData, TVariables> = {
  action: (variables: TVariables) => Promise<ActionDataResult<TData>>;
};
