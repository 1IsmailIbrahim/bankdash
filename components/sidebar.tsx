"use client";

import { useRouter, usePathname } from "next/navigation";
import {
  Home,
  CreditCard,
  TrendingUp,
  DollarSign,
  Users,
  Gift,
  MoreHorizontal,
  Settings,
  LogOut,
} from "lucide-react";

interface SidebarProps {
  onLogout?: () => void;
}

const navigationItems = [
  { icon: Home, label: "Dashboard", href: "/dashboard" },
  { icon: TrendingUp, label: "Transactions", href: "/transactions" },
  { icon: Users, label: "Accounts", href: "/accounts" },
  { icon: TrendingUp, label: "Investments", href: "/investments" },
  { icon: CreditCard, label: "Credit Cards", href: "/credit-cards" },
  { icon: DollarSign, label: "Loans", href: "/loans" },
  { icon: MoreHorizontal, label: "Services", href: "/services" },
  { icon: Gift, label: "My Privileges", href: "/privileges" },
  { icon: Settings, label: "Setting", href: "/settings" },
];

export function Sidebar({ onLogout }: SidebarProps) {
  const router = useRouter();
  const pathname = usePathname();

  return (
    <div className="w-64 bg-white border-r border-[#e6eff5] p-6 relative">
      <div className="flex items-center gap-2 mb-8">
        <div className="w-8 h-8 bg-[#1814f3] rounded-lg flex items-center justify-center">
          <CreditCard className="w-5 h-5 text-white" />
        </div>
        <span className="text-[#343c6a] font-bold text-xl">BankDash.</span>
      </div>

      <nav className="space-y-2">
        {navigationItems.map((item) => {
          const isActive = pathname === item.href;
          return (
            <div key={item.label} className="relative">
              {isActive && (
                <div className="absolute left-[-24px] top-0 bottom-0 w-1.5 bg-secondary rounded-r-full"></div>
              )}
              <div
                onClick={() => router.push(item.href)}
                className={`flex items-center gap-3 px-4 py-3 rounded-lg cursor-pointer ${
                  isActive
                    ? "text-[#1814f3]"
                    : "text-[#718ebf] hover:bg-[#f5f7fa]"
                }`}
              >
                <item.icon className="w-5 h-5" />
                <span className={isActive ? "font-medium" : ""}>
                  {item.label}
                </span>
              </div>
            </div>
          );
        })}

        {onLogout && (
          <div className="pt-4 mt-4 border-t border-[#e6eff5]">
            <button
              onClick={onLogout}
              className="flex items-center gap-3 px-4 py-3 text-[#ff4b4a] hover:bg-[#fff5f5] rounded-lg w-full text-left"
            >
              <LogOut className="w-5 h-5" />
              <span>Logout</span>
            </button>
          </div>
        )}
      </nav>
    </div>
  );
}
