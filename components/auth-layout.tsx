"use client";

import { useState, useEffect } from "react";
import { Sidebar } from "@/components/layout/sidebar";
import { Header } from "@/components/layout/header";
import { useAuth } from "@/contexts/auth-context";
import Loading from "@/components/ui/loading";

interface AuthLayoutProps {
  children: React.ReactNode;
}

export function AuthLayout({ children }: AuthLayoutProps) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const { user, isLoading, logout } = useAuth();

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

  // If not authenticated, middleware will redirect to login
  // This is just a fallback
  if (!user) {
    return <Loading />;
  }

  return (
    <div className="min-h-screen bg-[#f5f6fb] flex">
      {/* Sidebar */}
      <Sidebar
        onLogout={logout}
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
