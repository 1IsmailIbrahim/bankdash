"use client";

import { AuthLayout } from "@/components/auth-layout";
import { AccountsTable } from "@/components/accounts-table";

export default function AccountsPage() {
  return (
    <AuthLayout>
      <div className="md:p-6">
        <AccountsTable />
      </div>
    </AuthLayout>
  );
}
