"use client";

import { useAuth } from "@/contexts/auth-context";
import { LoginPage } from "@/components/login-page";
import Loading from "@/components/ui/loading";

export default function Home() {
  const { user, isLoading } = useAuth();

  if (isLoading) {
    return <Loading />;
  }

  // If user is authenticated, middleware will redirect to dashboard
  // This is just a fallback
  if (user) {
    return <Loading />;
  }

  return <LoginPage />;
}
