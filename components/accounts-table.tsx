"use client";

import React, { useEffect, useState } from "react";
import { Search, Plus, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Checkbox } from "@/components/ui/checkbox";
import { SortableTable } from "@/components/ui/table";
import { FilterIcon } from "./icons";

const accountsData = [
  {
    id: 1,
    name: "Ann Culhane",
    accountNumber: "5684236526",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla...",
    status: "Open",
    rate: "$70.00 CAD",
    balance: "-$270.00 CAD",
    deposit: "$500.00 CAD",
  },
  {
    id: 2,
    name: "Ahmad Rosser",
    accountNumber: "5684236527",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla...",
    status: "Paid",
    rate: "$70.00 CAD",
    balance: "$270.00 CAD",
    deposit: "$500.00 CAD",
  },
  {
    id: 3,
    name: "Zain Calzoni",
    accountNumber: "5684236528",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla...",
    status: "Open",
    rate: "$70.00 CAD",
    balance: "-$20.00 CAD",
    deposit: "$500.00 CAD",
  },
  {
    id: 4,
    name: "Leo Stanton",
    accountNumber: "5684236529",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla...",
    status: "Inactive",
    rate: "$70.00 CAD",
    balance: "$600.00 CAD",
    deposit: "$500.00 CAD",
  },
  {
    id: 5,
    name: "Kalya Vetrovs",
    accountNumber: "5684236530",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla...",
    status: "Open",
    rate: "$70.00 CAD",
    balance: "-$350.00 CAD",
    deposit: "$500.00 CAD",
  },
  {
    id: 6,
    name: "Ryan Westervelt",
    accountNumber: "5684236531",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla...",
    status: "Paid",
    rate: "$70.00 CAD",
    balance: "-$270.00 CAD",
    deposit: "$500.00 CAD",
  },
  {
    id: 7,
    name: "Corey Stanton",
    accountNumber: "5684236532",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla...",
    status: "Due",
    rate: "$70.00 CAD",
    balance: "$30.00 CAD",
    deposit: "$500.00 CAD",
  },
  {
    id: 8,
    name: "Adison Aminoff",
    accountNumber: "5684236533",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla...",
    status: "Open",
    rate: "$70.00 CAD",
    balance: "-$270.00 CAD",
    deposit: "$500.00 CAD",
  },
  {
    id: 9,
    name: "Alfredo Aminoff",
    accountNumber: "5684236534",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla...",
    status: "Inactive",
    rate: "$70.00 CAD",
    balance: "$460.00 CAD",
    deposit: "$500.00 CAD",
  },
];

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
  const [selectedIds, setSelectedIds] = useState<number[]>([]);
  const [sortedData, setSortedData] = useState(accountsData);
  const headerCheckboxId = "header-checkbox";

  useEffect(() => {
    // set the native input indeterminate state when some but not all are selected
    const wrapper = document.getElementById(headerCheckboxId);
    const input =
      (wrapper?.querySelector("input") as HTMLInputElement | null) || null;
    if (!input) return;
    input.indeterminate =
      selectedIds.length > 0 && selectedIds.length < sortedData.length;
  }, [selectedIds, sortedData.length]);

  const handleSelectAll = (checked: boolean) => {
    if (checked) setSelectedIds(sortedData.map((a) => a.id));
    else setSelectedIds([]);
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
          checked={selectedIds.length === sortedData.length}
          onCheckedChange={(checked: boolean) => handleSelectAll(!!checked)}
          className="shadow-md bg-white dark:bg-white"
        />
      ),
      render: (account: (typeof accountsData)[0]) => (
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
      render: (account: (typeof accountsData)[0]) => account.id,
      className: "text-[#343C6A] font-medium",
    },
    {
      key: "name",
      header: "ACCOUNT NAME",
      sortable: true,
      render: (account: (typeof accountsData)[0]) => (
        <div>
          <p className="text-[#343C6A] font-medium">{account.name}</p>
          <p className="text-[#718ebf] text-sm">{account.accountNumber}</p>
        </div>
      ),
    },
    {
      key: "description",
      header: "DESCRIPTION",
      render: (account: (typeof accountsData)[0]) => (
        <p className="truncate">{account.description}</p>
      ),
      className: "text-gray-700 text-sm max-w-xs",
    },
    {
      key: "status",
      header: "STATUS",
      render: (account: (typeof accountsData)[0]) => (
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
      render: (account: (typeof accountsData)[0]) => (
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
          {/* Header */}
          <div className="flex items-center justify-between p-6 border-b border-[#e6eff5] bg-[#F4F7FC]">
            <div className="flex items-center gap-4">
              <Button
                variant="ghost"
                size="icon"
                className="text-[#718ebf] bg-white dark:bg-white border-2 border-gray-300 shadow-md"
              >
                <FilterIcon />
              </Button>
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#718ebf] w-4 h-4" />
                <Input
                  placeholder="Search..."
                  className="pl-10 w-80 border-none text-[#718ebf] bg-white dark:bg-white border-2 border-gray-300 dark:border-2 dark:border-gray-300 shadow-md"
                />
              </div>
            </div>
            <Button className="bg-blue-500 hover:bg-blue-600 text-white">
              <Plus className="w-4 h-4 mr-1" />
              Add customer
            </Button>
          </div>

          {/* Table */}
          <div className="overflow-x-auto">
            <SortableTable
              data={accountsData}
              columns={columns}
              onDataChange={setSortedData}
            />
          </div>

          {/* Pagination */}
          <div className="flex items-center justify-between p-6 border-t border-[#e6eff5]">
            <div className="text-[#718ebf] text-sm">1-10 of 97</div>
            <div className="flex items-center gap-2">
              <span className="text-[#718ebf] text-sm mr-4">
                Rows per page: 10
              </span>
              <Button
                variant="ghost"
                size="icon"
                className="text-[#718ebf] border-2 border-gray-300 shadow-md size-6"
              >
                <ChevronLeft className="w-4 h-4" />
              </Button>
              <span className="text-[#343C6A] text-sm px-2">1/10</span>
              <Button
                variant="ghost"
                size="icon"
                className="text-[#718ebf] border-2 border-gray-300 shadow-md size-6"
              >
                <ChevronRight className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
