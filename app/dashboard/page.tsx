"use client";

import { AuthLayout } from "@/components/auth-layout";
import { MyCardsSection } from "@/components/dashboard-sections/my-cards-section";
import { RecentTransactions } from "@/components/dashboard-sections/recent-transactions";
import { WeeklyActivity } from "@/components/dashboard-sections/weekly-activity";
import { ExpenseStatistics } from "@/components/dashboard-sections/expense-statistics";
import { QuickTransfers } from "@/components/dashboard-sections/quick-transfer";
import { BalanceHistory } from "@/components/dashboard-sections/balance-history";

export default function DashboardPage() {
  return (
    <AuthLayout>
      <div className="p-4 md:p-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 md:gap-6">
          {/* My Cards */}
          <div className="lg:col-span-8">
            <MyCardsSection />
          </div>

          {/* Recent Transactions */}
          <div className="lg:col-span-4">
            <RecentTransactions />
          </div>

          {/* Weekly Activity */}
          <div className="lg:col-span-8">
            <WeeklyActivity />
          </div>

          {/* Expense Statistics */}
          <div className="lg:col-span-4">
            <ExpenseStatistics />
          </div>

          {/* Quick Transfer */}
          <div className="lg:col-span-5">
            <QuickTransfers />
          </div>

          {/* Balance History */}
          <div className="lg:col-span-7">
            <BalanceHistory />
          </div>
        </div>
      </div>
    </AuthLayout>
  );
}
