"use client";

import { Button } from "@/components/button";
import { createUser, login } from "./_tests";

export default function Home() {
  const handleCreateUser = async () => {
    const aaa = await createUser();

    // biome-ignore lint/suspicious/noConsoleLog: <explanation>
    console.log(aaa);
  };

  const handleClick = async () => {
    const aaa = await login();

    // biome-ignore lint/suspicious/noConsoleLog: <explanation>
    console.log(aaa);
  };

  return (
    <div>
      <Button onClick={handleCreateUser}> USER </Button>
      <Button onClick={handleClick}> SESSION </Button>
    </div>
  );
}
