"use client";

import { Button } from "@/components/button";
import { Icon } from "@/components/icon";
import { Separator } from "@/components/separator";
import { Github, Mail } from "lucide-react";
import { useRouter } from "next/navigation";
import { signInConfig } from "./consts";
import { SignInForm } from "./sign-in-form";

export default function Page() {
  const router = useRouter();

  const handleRedirectSignUp = () => {
    router.push("sign-up");
  };
  const handleRedirectGithub = () => {
    router.push(signInConfig.githubRoute);
  };
  const handleRedirectGoogle = () => {
    router.push(signInConfig.googleRoute);
  };

  return (
    <div className="w-full max-w-md p-8 space-y-8">
      <h2 className="text-3xl font-extrabold text-center">
        Sign in to your account
      </h2>

      <SignInForm />

      <div className="relative">
        <div className="absolute inset-0 flex items-center">
          <Separator />
        </div>
        <div className="relative flex justify-center text-sm">
          <span className="px-2 bg-background">Or continue with</span>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-3">
        <Button
          variant="outline"
          className="gap-2"
          onClick={handleRedirectGithub}
        >
          <Icon src={Github} />
          GitHub
        </Button>
        <Button
          variant="outline"
          className="gap-2"
          onClick={handleRedirectGoogle}
        >
          <Icon src={Mail} />
          Google
        </Button>
      </div>
      <div className="flex justify-end items-center text-sm">
        <p>Doesn't have an account?</p>
        <Button
          variant={"link"}
          onClick={handleRedirectSignUp}
        >
          Sign up
        </Button>
      </div>
    </div>
  );
}
