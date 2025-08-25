"use client";

import { useRouter, usePathname } from "next/navigation";
import { LogOut, X } from "lucide-react";
import {
  CardIcon,
  DoubleCreditIcon,
  HomeIcon,
  InvestmentsIcon,
  LoansIcon,
  PrivilegesIcon,
  ServicesIcon,
  SettingsIcon,
  TransactionsIcon,
  UserIcon,
} from "../icons";

interface SidebarProps {
  onLogout?: () => void;
  isOpen?: boolean;
  onClose?: () => void;
}

const navigationItems = [
  { icon: HomeIcon, label: "Dashboard", href: "/dashboard" },
  { icon: TransactionsIcon, label: "Transactions", href: "/transactions" },
  { icon: UserIcon, label: "Accounts", href: "/accounts" },
  { icon: InvestmentsIcon, label: "Investments", href: "/investments" },
  { icon: CardIcon, label: "Credit Cards", href: "/credit-cards" },
  { icon: LoansIcon, label: "Loans", href: "/loans" },
  { icon: ServicesIcon, label: "Services", href: "/services" },
  { icon: PrivilegesIcon, label: "My Privileges", href: "/privileges" },
  { icon: SettingsIcon, label: "Setting", href: "/settings" },
];

export function Sidebar({ onLogout, isOpen = false, onClose }: SidebarProps) {
  const router = useRouter();
  const pathname = usePathname();

  return (
    <>
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden transition-opacity duration-300 ease-in-out"
          onClick={onClose}
        />
      )}

      <div
        className={`
        fixed top-0 left-0 md:static z-50 md:z-0 h-screen md:h-auto
        bg-white border-r border-[#e6eff5] p-6
        transition-transform duration-300 ease-in-out md:transition-none
        ${isOpen ? "translate-x-0" : "-translate-x-full"} md:translate-x-0
        w-64
      `}
      >
        {/* Mobile close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 md:hidden text-[#718ebf] hover:text-[#343C6A] transition-colors"
        >
          <X className="w-5 h-5" />
        </button>
        <div className="flex items-center gap-2 mb-8">
          <div>
            <DoubleCreditIcon />
          </div>
          <span className="text-[#353c6b] font-bold text-2xl">BankDash.</span>
        </div>

        <nav className="space-y-2">
          {navigationItems.map((item) => {
            const isActive = pathname === item.href;
            const Icon = item.icon;
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
                  <span
                    className={`w-5 h-5 inline-flex items-center justify-center ${
                      isActive ? "text-[#1814f3]" : ""
                    }`}
                  >
                    <Icon isActive={isActive} />
                  </span>
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
    </>
  );
}
