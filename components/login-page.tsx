"use client";

import type React from "react";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { useAuth } from "@/contexts/auth-context";
import Image from "next/image";
import { DoubleCreditIcon } from "./icons";
import { Info } from "lucide-react";

export function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const [error, setError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const { login } = useAuth();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError("");

    const result = await login(email, password);

    if (!result.success) {
      setError(result.error || "Login failed");
    }

    setIsSubmitting(false);
  };

  return (
    <div className="min-h-screen flex">
      <div className="flex-1 flex flex-col">
        <div className="flex items-center space-x-2 relative top-14 left-7 md:left-14">
          <DoubleCreditIcon />
          <span className="text-2xl font-bold text-gray-900">BankDash.</span>
        </div>
        <div className="flex-1 flex items-center justify-center bg-white p-8">
          <div className="w-full max-w-md space-y-8 flex flex-col justify-between">
            <div className="space-y-6">
              <div>
                <h1 className="text-3xl font-bold text-gray-900">Sign in</h1>
                <p className="mt-2 text-sm text-gray-600">
                  If you don&apos;t have an account register <br />
                  <span>
                    You can{" "}
                    <span className="text-secondary cursor-pointer hover:underline font-semibold">
                      Register here !
                    </span>
                  </span>
                </p>
              </div>

              <form onSubmit={handleLogin} className="space-y-6">
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Email
                  </label>
                  <div className="relative">
                    <Input
                      id="email"
                      type="email"
                      placeholder="Enter your email address"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="pl-10 h-12 bg-transparent border-0 border-b-2 border-gray-200 rounded-none focus:border-blue-600 focus:ring-0"
                      required
                    />
                    <div className="absolute left-3 top-1/2 transform -translate-y-1/2">
                      <svg
                        className="w-5 h-5 text-gray-400"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
                        />
                      </svg>
                    </div>
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="password"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Password
                  </label>
                  <div className="relative">
                    <Input
                      id="password"
                      type="password"
                      placeholder="Enter your Password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      className="pl-10 h-12 border-0 border-b-2 border-gray-200 rounded-none focus:border-blue-600 focus:ring-0"
                      required
                    />
                    <div className="absolute left-3 top-1/2 transform -translate-y-1/2">
                      <svg
                        className="w-5 h-5 text-gray-400"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                        />
                      </svg>
                    </div>
                    <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
                      <svg
                        className="w-5 h-5 text-gray-400 cursor-pointer"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                        />
                      </svg>
                    </div>
                  </div>
                </div>

                {error && <div className="text-red-500 text-sm">{error}</div>}

                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 sm:gap-0">
                  <div className="flex items-center space-x-3 md:space-x-2">
                    <div className="flex-shrink-0">
                      <Checkbox
                        id="remember"
                        checked={rememberMe}
                        onCheckedChange={(checked) =>
                          setRememberMe(checked as boolean)
                        }
                        className="w-4 h-4"
                      />
                    </div>
                    <label
                      htmlFor="remember"
                      className="text-sm text-gray-600 leading-relaxed"
                    >
                      Remember me
                    </label>
                  </div>
                  <span className="text-sm hover:text-secondary cursor-pointer hover:underline">
                    Forgot Password ?
                  </span>
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full h-12 bg-secondary hover:bg-primary text-white font-medium rounded-full disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? "Logging in..." : "Login"}
                </Button>
              </form>
            </div>
            {/* Test Credentials */}
            <div className="bg-blue-50 border border-blue-200 rounded-md p-2">
              <div className="flex items-start">
                <Info className="w-4 h-4 text-blue-400 mt-0.5" />
                <div className="ml-2">
                  <h3 className="text-xs font-medium text-blue-800">
                    Test Credentials
                  </h3>
                  <div className="mt-1 text-xs text-blue-700">
                    <p>
                      <strong>Email:</strong> test@test.com
                    </p>
                    <p>
                      <strong>Password:</strong> 123456788
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex-1 bg-primary hidden md:flex items-start justify-center p-8 md:m-8 rounded-lg">
        <Image
          src="/images/login-hero.png"
          alt="Welcome"
          className="mt-24"
          width={500}
          height={500}
        />
      </div>
    </div>
  );
}
