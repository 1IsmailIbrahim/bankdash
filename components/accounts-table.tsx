"use client";

import { Search, Filter, Plus, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Checkbox } from "@/components/ui/checkbox";

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
  return (
    <div className="p-8">
      <Card className="bg-white border border-[#e6eff5]">
        <CardContent className="p-0">
          {/* Header */}
          <div className="flex items-center justify-between p-6 border-b border-[#e6eff5]">
            <div className="flex items-center gap-4">
              <Button variant="ghost" size="icon" className="text-[#718ebf]">
                <Filter className="w-5 h-5" />
              </Button>
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#718ebf] w-4 h-4" />
                <Input
                  placeholder="Search..."
                  className="pl-10 w-80 bg-[#f5f7fa] border-none text-[#718ebf]"
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
            <table className="w-full">
              <thead>
                <tr className="border-b border-[#e6eff5]">
                  <th className="text-left p-4 text-[#718ebf] text-sm font-medium w-12">
                    <Checkbox />
                  </th>
                  <th className="text-left p-4 text-[#718ebf] text-sm font-medium">
                    #
                  </th>
                  <th className="text-left p-4 text-[#718ebf] text-sm font-medium">
                    ACCOUNT NAME
                  </th>
                  <th className="text-left p-4 text-[#718ebf] text-sm font-medium">
                    DESCRIPTION
                  </th>
                  <th className="text-left p-4 text-[#718ebf] text-sm font-medium">
                    STATUS
                  </th>
                  <th className="text-left p-4 text-[#718ebf] text-sm font-medium">
                    RATE
                  </th>
                  <th className="text-left p-4 text-[#718ebf] text-sm font-medium">
                    BALANCE
                  </th>
                  <th className="text-left p-4 text-[#718ebf] text-sm font-medium">
                    DEPOSIT
                  </th>
                </tr>
              </thead>
              <tbody>
                {accountsData.map((account) => (
                  <tr
                    key={account.id}
                    className="border-b border-[#e6eff5] hover:bg-[#f5f7fa]/50"
                  >
                    <td className="p-4">
                      <Checkbox />
                    </td>
                    <td className="p-4 text-[#343c6a] font-medium">
                      {account.id}
                    </td>
                    <td className="p-4">
                      <div>
                        <p className="text-[#343c6a] font-medium">
                          {account.name}
                        </p>
                        <p className="text-[#718ebf] text-sm">
                          {account.accountNumber}
                        </p>
                      </div>
                    </td>
                    <td className="p-4 text-[#718ebf] text-sm max-w-xs">
                      <p className="truncate">{account.description}</p>
                    </td>
                    <td className="p-4">
                      <Badge
                        className={`${getStatusBadgeVariant(
                          account.status
                        )} border-none`}
                      >
                        {account.status}
                      </Badge>
                    </td>
                    <td className="p-4">
                      <div className="text-center">
                        <p className="text-[#343c6a] font-medium">$70.00</p>
                        <p className="text-[#718ebf] text-sm">CAD</p>
                      </div>
                    </td>
                    <td className="p-4">
                      <div className="text-center">
                        <p
                          className={`font-medium ${
                            account.balance.startsWith("-")
                              ? "text-[#ff4b4a]"
                              : "text-[#16dbcc]"
                          }`}
                        >
                          {account.balance.replace(" CAD", "")}
                        </p>
                        <p className="text-[#718ebf] text-sm">CAD</p>
                      </div>
                    </td>
                    <td className="p-4">
                      <div className="text-center">
                        <p className="text-[#343c6a] font-medium">$500.00</p>
                        <p className="text-[#718ebf] text-sm">CAD</p>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Pagination */}
          <div className="flex items-center justify-between p-6 border-t border-[#e6eff5]">
            <div className="text-[#718ebf] text-sm">1-10 of 97</div>
            <div className="flex items-center gap-2">
              <span className="text-[#718ebf] text-sm mr-4">
                Rows per page: 10
              </span>
              <Button variant="ghost" size="icon" className="text-[#718ebf]">
                <ChevronLeft className="w-4 h-4" />
              </Button>
              <span className="text-[#343c6a] text-sm px-2">1/10</span>
              <Button variant="ghost" size="icon" className="text-[#718ebf]">
                <ChevronRight className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
