import { Button } from "@/components/button";
import { Icon } from "@/components/icon";
import { Input } from "@/components/input";
import { Github, Mail } from "lucide-react";
import { FormEvent } from "react";

export default function Page() {
  const handleEmailLogin = (e: FormEvent) => {
    e.preventDefault();
  };

  const handleGithubLogin = () => {
    // Implement GitHub login logic here
    console.log("GitHub login");
  };

  const handleGoogleLogin = () => {
    // Implement Google login logic here
    console.log("Google login");
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md p-8 space-y-8 bg-white rounded-xl shadow-md">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900">
            Sign in to your account
          </h2>
          <p className="mt-2 text-sm text-gray-600">
            Or{" "}
            <a
              href="/sign-up"
              className="font-medium text-primary hover:text-primary/90"
            >
              create a new account
            </a>
          </p>
        </div>
        <form
          onSubmit={handleEmailLogin}
          className="mt-8 space-y-6"
        >
          <div className="space-y-4">
            <Input />
            <Input />
          </div>

          <div>
            <Button
              type="submit"
              className="w-full"
            >
              Sign in
            </Button>
          </div>
        </form>

        <div className="mt-6">
          <div className="relative">
            <div className="absolute inset-0 flex items-center">-</div>
            <div className="relative flex justify-center text-sm">
              <span className="px-2 bg-white text-gray-500">
                Or continue with
              </span>
            </div>
          </div>

          <div className="mt-6 grid grid-cols-2 gap-3">
            <Button
              variant="outline"
              onClick={handleGithubLogin}
            >
              <Icon src={Github} />
              GitHub
            </Button>
            <Button
              variant="outline"
              onClick={handleGoogleLogin}
            >
              <Icon src={Mail} />
              Google
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
