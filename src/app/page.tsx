"use client";

import { Button } from "@/components/button";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  const handleLogin = async () => {
    router.push("sign-in");
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
        <Button onClick={handleLogin}>Sign in</Button>
      </div>
    </div>
  );
}
