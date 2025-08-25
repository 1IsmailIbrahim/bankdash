"use client";

import { useAuth } from "@/contexts/auth-context";
import { LoginPage } from "@/components/login-page";
import Loading from "@/components/ui/loading";

export default function Home() {
  const { user } = useAuth();

  if (user) {
    return <Loading />;
  }

  return <LoginPage />;
}
