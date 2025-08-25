"use client";

import { Sidebar } from "@/components/layout/sidebar";
import { Header } from "@/components/layout/header";
import { MyCardsSection } from "@/components/dashboard-sections/my-cards-section";
import { RecentTransactions } from "@/components/dashboard-sections/recent-transactions";
import { WeeklyActivity } from "@/components/dashboard-sections/weekly-activity";
import { ExpenseStatistics } from "@/components/dashboard-sections/expense-statistics";
import { QuickTransfers } from "@/components/dashboard-sections/quick-transfer";
import { BalanceHistory } from "@/components/dashboard-sections/balance-history";

interface BankDashboardProps {
  onLogout?: () => void;
}

export function BankDashboard({ onLogout }: BankDashboardProps) {
  return (
    <div className="min-h-screen bg-[#f5f7fa] flex">
      <Sidebar onLogout={onLogout} />

      {/* Main Content */}
      <div className="flex-1">
        <Header />

        <div className="p-4 md:p-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 md:gap-6">
            <div className="lg:col-span-8">
              <MyCardsSection />
            </div>

            <div className="lg:col-span-4">
              <RecentTransactions />
            </div>

            <div className="lg:col-span-8">
              <WeeklyActivity />
            </div>

            <div className="lg:col-span-4">
              <ExpenseStatistics />
            </div>

            <div className="lg:col-span-5">
              <QuickTransfers />
            </div>

            <div className="lg:col-span-7">
              <BalanceHistory />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
