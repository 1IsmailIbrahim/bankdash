"use client";

import { AuthLayout } from "@/components/auth-layout";
import { MyCardsSection } from "@/components/my-cards-section";
import { RecentTransactions } from "@/components/recent-transactions";
import { WeeklyActivity } from "@/components/weekly-activity";
import { ExpenseStatistics } from "@/components/expense-statistics";
import { QuickTransfers } from "@/components/quick-transfer";
import { BalanceHistory } from "@/components/balance-history";

export default function DashboardPage() {
  return (
    <AuthLayout>
      <div className="p-8">
        <div className="grid grid-cols-12 gap-6">
          {/* My Cards */}
          <div className="col-span-8">
            <MyCardsSection />
          </div>

          {/* Recent Transactions */}
          <div className="col-span-4">
            <RecentTransactions />
          </div>

          {/* Weekly Activity */}
          <div className="col-span-8">
            <WeeklyActivity />
          </div>

          {/* Expense Statistics */}
          <div className="col-span-4">
            <ExpenseStatistics />
          </div>

          {/* Quick Transfer */}
          <div className="col-span-5">
            <QuickTransfers />
          </div>

          {/* Balance History */}
          <div className="col-span-7">
            <BalanceHistory />
          </div>
        </div>
      </div>
    </AuthLayout>
  );
}
