"use server";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";

// user data for demonstration
const DEMO_USER = {
  id: "1",
  email: "test@test.com",
  password: "123456788", 
  name: "Ismail Ibrahim",
  avatar: "",
};

export interface User {
  id: string;
  email: string;
  name: string;
  avatar?: string;
}

export interface AuthResult {
  success: boolean;
  error?: string;
  user?: User;
}

// Cookie configuration
const AUTH_COOKIE_NAME = "bankdash-auth";
const AUTH_COOKIE_OPTIONS = {
  httpOnly: true,
  secure: process.env.NODE_ENV === "production",
  sameSite: "lax" as const,
  maxAge: 60 * 60 * 24 * 7, // 7 days
  path: "/",
};

export async function login(
  email: string,
  password: string
): Promise<AuthResult> {
  //  async authentication 
  await new Promise((resolve) => setTimeout(resolve, 500));

  if (email === DEMO_USER.email && password === DEMO_USER.password) {
    const user: User = {
      id: DEMO_USER.id,
      email: DEMO_USER.email,
      name: DEMO_USER.name,
      avatar: DEMO_USER.avatar,
    };

    // Set auth cookie with user data
    const cookieStore = await cookies();
    cookieStore.set(
      AUTH_COOKIE_NAME,
      JSON.stringify(user),
      AUTH_COOKIE_OPTIONS
    );

    return { success: true, user };
  }

  return { success: false, error: "Invalid email or password" };
}

export async function logout(): Promise<void> {
  const cookieStore = await cookies();
  cookieStore.delete(AUTH_COOKIE_NAME);
}

export async function getUser(): Promise<User | null> {
  try {
    const cookieStore = await cookies();
    const authCookie = cookieStore.get(AUTH_COOKIE_NAME);

    if (!authCookie?.value) {
      return null;
    }

    const user = JSON.parse(authCookie.value) as User;
    return user;
  } catch (error) {
    console.error("Error getting user from cookie:", error);
    return null;
  }
}

export async function requireAuth(): Promise<User> {
  const user = await getUser();
  if (!user) {
    redirect("/");
  }
  return user;
}

export async function isAuthenticated(): Promise<boolean> {
  const user = await getUser();
  return !!user;
}
