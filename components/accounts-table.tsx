"use client";

import React, { useEffect, useState } from "react";
import { Search, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Checkbox } from "@/components/ui/checkbox";
import { SortableTable } from "@/components/ui/table";
import { FilterIcon } from "./icons";

interface AccountData extends Record<string, unknown> {
  id: number;
  name: string;
  accountNumber: string;
  description: string;
  status: string;
  rate: string;
  balance: string;
  deposit: string;
}

const getStatusBadgeVariant = (status: string) => {
  switch (status) {
    case "Open":
      return "bg-[#e7edff] text-[#1814f3] hover:bg-[#e7edff]";
    case "Paid":
      return "bg-[#dcfaf8] text-[#16dbcc] hover:bg-[#dcfaf8]";
    case "Inactive":
      return "bg-[#f5f7fa] text-[#718ebf] hover:bg-[#f5f7fa]";
    case "Due":
      return "bg-[#ffe0e0] text-[#ff4b4a] hover:bg-[#ffe0e0]";
    default:
      return "bg-[#f5f7fa] text-[#718ebf] hover:bg-[#f5f7fa]";
  }
};

export function AccountsTable() {
  const [accountsData, setAccountsData] = useState<AccountData[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [selectedIds, setSelectedIds] = useState<number[]>([]);
  const [sortedData, setSortedData] = useState<AccountData[]>([]);
  const headerCheckboxId = "header-checkbox";

  useEffect(() => {
    const fetchAccountsData = async () => {
      try {
        setLoading(true);
        const response = await fetch(
          "https://dummyjson.com/c/2a87-7764-4427-99a0",
          {
            cache: "force-cache",
          }
        );

        if (!response.ok) {
          throw new Error("Failed to fetch accounts data");
        }

        const data: AccountData[] = await response.json();
        setAccountsData(data);
        setSortedData(data);
        setError(null);
      } catch (err) {
        console.error("Error fetching accounts data:", err);
        setError(err instanceof Error ? err.message : "An error occurred");
      } finally {
        setLoading(false);
      }
    };

    fetchAccountsData();
  }, []);

  useEffect(() => {
    // set the native input indeterminate state when some but not all are selected
    const wrapper = document.getElementById(headerCheckboxId);
    const input =
      (wrapper?.querySelector("input") as HTMLInputElement | null) || null;
    if (!input) return;

    const selectedOnCurrentPage = sortedData.filter((item) =>
      selectedIds.includes(item.id)
    );
    input.indeterminate =
      selectedOnCurrentPage.length > 0 &&
      selectedOnCurrentPage.length < sortedData.length;
  }, [selectedIds, sortedData]);

  const handleSelectAll = (checked: boolean) => {
    if (checked) {
      const allIds = sortedData.map((a: AccountData) => a.id);
      setSelectedIds(allIds);
    } else {
      setSelectedIds([]);
    }
  };

  const toggleRow = (id: number, checked: boolean) => {
    if (checked)
      setSelectedIds((prev) => (prev.includes(id) ? prev : [...prev, id]));
    else setSelectedIds((prev) => prev.filter((x) => x !== id));
  };

  const columns = [
    {
      key: "checkbox",
      header: (
        <Checkbox
          id={headerCheckboxId}
          checked={
            sortedData.length > 0 &&
            sortedData.every((item) => selectedIds.includes(item.id))
          }
          onCheckedChange={(checked: boolean) => handleSelectAll(!!checked)}
          className="shadow-md bg-white dark:bg-white"
        />
      ),
      render: (account: AccountData) => (
        <Checkbox
          checked={selectedIds.includes(account.id)}
          onCheckedChange={(checked: boolean) =>
            toggleRow(account.id, !!checked)
          }
          className="shadow-md bg-white dark:bg-white"
        />
      ),
      className: "w-12",
    },
    {
      key: "id",
      header: "#",
      sortable: true,
      render: (account: AccountData) => account.id,
      className: "text-[#343C6A] font-medium",
    },
    {
      key: "name",
      header: "ACCOUNT NAME",
      sortable: true,
      render: (account: AccountData) => (
        <div>
          <p className="text-[#343C6A] font-medium">{account.name}</p>
          <p className="text-[#718ebf] text-sm">{account.accountNumber}</p>
        </div>
      ),
    },
    {
      key: "description",
      header: "DESCRIPTION",
      render: (account: AccountData) => (
        <p className="truncate">{account.description}</p>
      ),
      className: "text-gray-700 text-sm max-w-xs",
    },
    {
      key: "status",
      header: "STATUS",
      render: (account: AccountData) => (
        <Badge
          className={`${getStatusBadgeVariant(account.status)} border-none`}
        >
          {account.status}
        </Badge>
      ),
    },
    {
      key: "rate",
      header: "RATE",
      render: () => (
        <div className="text-center">
          <p className="text-[#343C6A] font-medium text-right">$70.00</p>
          <p className="text-[#718ebf] text-sm text-right">CAD</p>
        </div>
      ),
      className: "text-right",
    },
    {
      key: "balance",
      header: "BALANCE",
      render: (account: AccountData) => (
        <div className="text-right">
          <p
            className={`font-medium ${
              account.balance.startsWith("-")
                ? "text-[#ff4b4a]"
                : "text-[#16dbcc]"
            }`}
          >
            {account.balance.replace(" CAD", "")}
          </p>
          <p className="text-[#718ebf] text-sm text-right">CAD</p>
        </div>
      ),
      className: "text-right",
    },
    {
      key: "deposit",
      header: "DEPOSIT",
      render: () => (
        <div className="text-center">
          <p className="text-[#343C6A] font-medium text-right">$500.00</p>
          <p className="text-[#718ebf] text-sm text-right">CAD</p>
        </div>
      ),
      className: "text-right",
    },
  ];

  return (
    <div className="p-8">
      <Card className="bg-white border border-[#dbe2e7] py-0">
        <CardContent className="p-0">
          {/* Loading State */}
          {loading && (
            <div className="flex items-center justify-center py-12">
              <div className="text-[#718ebf]">Loading accounts...</div>
            </div>
          )}

          {/* Error State */}
          {error && (
            <div className="flex items-center justify-center py-12">
              <div className="text-red-500">Error: {error}</div>
            </div>
          )}

          {/* Table */}
          {!loading && !error && (
            <div className="overflow-x-auto">
              <SortableTable<AccountData>
                data={accountsData}
                columns={columns}
                onDataChange={setSortedData}
                rowsPerPage={10}
                showPagination={true}
              />
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
