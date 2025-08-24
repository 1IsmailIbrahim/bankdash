"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { Sidebar } from "@/components/sidebar";
import { Header } from "@/components/header";

interface AuthLayoutProps {
  children: React.ReactNode;
}

export function AuthLayout({ children }: AuthLayoutProps) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const authStatus = localStorage.getItem("bankdash-auth");
    if (authStatus === "true") {
      setIsAuthenticated(true);
    } else {
      router.push("/");
    }
    setIsLoading(false);
  }, [router]);

  const handleLogout = () => {
    setIsAuthenticated(false);
    localStorage.removeItem("bankdash-auth");
    router.push("/");
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-[#f5f7fa] flex items-center justify-center">
        <div className="text-[#343c6a]">Loading...</div>
      </div>
    );
  }

  if (!isAuthenticated) {
    return null;
  }

  return (
    <div className="min-h-screen bg-[#f5f7fa] flex">
      {/* Sidebar */}
      <Sidebar onLogout={handleLogout} />

      {/* Main Content */}
      <div className="flex-1">
        {/* Header */}
        <Header />

        {/* Page Content */}
        {children}
      </div>
    </div>
  );
}
