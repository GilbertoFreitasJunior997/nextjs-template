import React from "react";

declare module "react" {
  function forwardRef<T, P = {}>(
    render: (props: P, ref: ForwardedRef<T>) => (ReactElement & {displayName: string}) | null,
  ): (props: P & RefAttributes<T>) => (ReactElement & {displayName: string}) | null;
}
