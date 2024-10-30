import { Button } from "@/components/button";
import { Icon } from "@/components/icon";
import { Separator } from "@/components/separator";
import { Github, Mail } from "lucide-react";
import { SignUpForm } from "./sign-up-form";

export default function Page() {
  return (
    <div className="w-full max-w-md p-8 space-y-8">
      <h2 className="text-3xl font-extrabold text-center">
        Create an account for free
      </h2>

      <SignUpForm />

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
        >
          <Icon src={Github} />
          GitHub
        </Button>
        <Button
          variant="outline"
          className="gap-2"
        >
          <Icon src={Mail} />
          Google
        </Button>
      </div>
    </div>
  );
}
