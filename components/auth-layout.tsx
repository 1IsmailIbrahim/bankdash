"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { Sidebar } from "@/components/layout/sidebar";
import { Header } from "@/components/layout/header";
import Loading from "@/components/ui/loading";

interface AuthLayoutProps {
  children: React.ReactNode;
}

export function AuthLayout({ children }: AuthLayoutProps) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
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

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };

  // toggle sidebar in different screen
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsSidebarOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  if (isLoading) {
    return <Loading />;
  }

  if (!isAuthenticated) {
    return null;
  }

  return (
    <div className="min-h-screen bg-[#f5f7fa] flex">
      {/* Sidebar */}
      <Sidebar
        onLogout={handleLogout}
        isOpen={isSidebarOpen}
        onClose={closeSidebar}
      />

      {/* Main Content */}
      <div className="flex-1">
        {/* Header */}
        <Header onMenuToggle={toggleSidebar} />

        {/* Page Content */}
        {children}
      </div>
    </div>
  );
}
