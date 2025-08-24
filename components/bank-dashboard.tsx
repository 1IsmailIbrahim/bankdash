"use client";

import { Sidebar } from "@/components/sidebar";
import { Header } from "@/components/header";
import { MyCardsSection } from "@/components/my-cards-section";
import { RecentTransactions } from "@/components/recent-transactions";
import { WeeklyActivity } from "@/components/weekly-activity";
import { ExpenseStatistics } from "@/components/expense-statistics";
import { QuickTransfers } from "@/components/quick-transfer";
import { BalanceHistory } from "@/components/balance-history";

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

        <div className="p-8">
          <div className="grid grid-cols-12 gap-6">
            <div className="col-span-8">
              <MyCardsSection />
            </div>

            <div className="col-span-4">
              <RecentTransactions />
            </div>

            <div className="col-span-8">
              <WeeklyActivity />
            </div>

            <div className="col-span-4">
              <ExpenseStatistics />
            </div>

            <div className="col-span-5">
              <QuickTransfers />
            </div>

            <div className="col-span-7">
              <BalanceHistory />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
