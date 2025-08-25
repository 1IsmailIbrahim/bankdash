"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { LoginPage } from "@/components/login-page";

export default function Home() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [isClient, setIsClient] = useState(false);
  const router = useRouter();

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    if (!isClient) return;
    
    const authStatus = localStorage.getItem("bankdash-auth");
    if (authStatus === "true") {
      setIsAuthenticated(true);
      router.push("/dashboard");
    }
    setIsLoading(false);
  }, [router, isClient]);

  const handleLogin = () => {
    setIsAuthenticated(true);
    localStorage.setItem("bankdash-auth", "true");
    router.push("/dashboard");
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-[#f5f7fa] flex items-center justify-center">
        <div className="text-[#343C6A]">Loading...</div>
      </div>
    );
  }

  if (isAuthenticated) {
    return null; // Will redirect to dashboard
  }

  return <LoginPage onLogin={handleLogin} />;
}
