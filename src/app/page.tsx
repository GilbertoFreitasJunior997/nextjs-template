"use client";

import { Button } from "@/components/button";
import { useRouter } from "next/navigation";
import { createUser, login } from "./_tests";

export default function Home() {
  const router = useRouter();

  const handleCreateUser = async () => {
    const aaa = await createUser();

    console.log(aaa);
  };

  const handleClick = async () => {
    const aaa = await login();

    console.log(aaa);
  };

  const handleRedirect = () => {
    router.push("components");
  };

  return (
    <div className="space-y-4 p-4">
      <div>
        <Button onClick={handleRedirect}>Components</Button>
      </div>

      <div className="space-x-2">
        <Button onClick={handleCreateUser}> USER </Button>
        <Button onClick={handleClick}> SESSION </Button>
      </div>
    </div>
  );
}
