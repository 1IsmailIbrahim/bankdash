"use client";

import React, { useEffect, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Checkbox } from "@/components/ui/checkbox";
import { SortableTable } from "@/components/ui/table";
import { IAccountData } from "@/interfaces";

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
  const [accountsData, setAccountsData] = useState<IAccountData[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [selectedIds, setSelectedIds] = useState<number[]>([]);
  const [sortedData, setSortedData] = useState<IAccountData[]>([]);
  const headerCheckboxId = "header-checkbox";

  useEffect(() => {
    const fetchAccountsData = async () => {
      try {
        setLoading(true);
        const response = await fetch(
          "https://dummyjson.com/c/2a87-7764-4427-99a0",
          {
            cache: "no-store",
          }
        );

        if (!response.ok) {
          throw new Error("Failed to fetch accounts data");
        }

        const data: IAccountData[] = await response.json();
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
      const allIds = sortedData.map((a: IAccountData) => a.id);
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
      render: (account: IAccountData) => (
        <Checkbox
          checked={selectedIds.includes(account.id)}
          onCheckedChange={(checked: boolean) =>
            toggleRow(account.id, !!checked)
          }
          className="shadow-md bg-white dark:bg-white"
        />
      ),
      className: "w-12 min-w-[48px]",
    },
    {
      key: "id",
      header: "#",
      sortable: true,
      render: (account: IAccountData) => account.id,
      className: "text-[#343C6A] font-medium w-16 min-w-[64px]",
    },
    {
      key: "name",
      header: "ACCOUNT NAME",
      sortable: true,
      render: (account: IAccountData) => (
        <div>
          <p className="text-[#343C6A] font-medium">{account.name}</p>
          <p className="text-[#718ebf] text-sm">{account.accountNumber}</p>
        </div>
      ),
      className: "min-w-[180px]",
    },
    {
      key: "description",
      header: "DESCRIPTION",
      render: (account: IAccountData) => (
        <p className="min-w-[250px] max-w-[300px]">{account.description}</p>
      ),
      className: "text-gray-700 text-sm min-w-[250px]",
    },
    {
      key: "status",
      header: "STATUS",
      render: (account: IAccountData) => (
        <Badge
          className={`${getStatusBadgeVariant(account.status)} border-none`}
        >
          {account.status}
        </Badge>
      ),
      className: "min-w-[100px]",
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
      className: "text-right min-w-[100px]",
    },
    {
      key: "balance",
      header: "BALANCE",
      render: (account: IAccountData) => (
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
      className: "text-right min-w-[120px]",
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
      className: "text-right min-w-[120px]",
    },
  ];

  return (
    <div className="pt-2 md:p-8">
      <Card className="bg-white border border-[#dbe2e7] py-0 overflow-hidden">
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
            <SortableTable<IAccountData>
              data={accountsData}
              columns={columns}
              onDataChange={setSortedData}
              rowsPerPage={10}
              showPagination={true}
            />
          )}
        </CardContent>
      </Card>
    </div>
  );
}
