"use client";

import { Button } from "@/components/button";
import { logoff } from "./actions";

export const LogoffButton = () => {
  return <Button onClick={logoff}>LOGOFF</Button>;
};
