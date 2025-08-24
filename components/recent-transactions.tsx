import { CreditCard, DollarSign } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const transactionsData = [
  {
    id: 1,
    icon: CreditCard,
    iconBg: "bg-[#fff5d9]",
    iconColor: "text-[#ffbb38]",
    title: "Deposit from my Card",
    date: "28 January 2021",
    amount: "-$850",
    amountColor: "text-[#ff4b4a]",
  },
  {
    id: 2,
    icon: DollarSign,
    iconBg: "bg-[#e7edff]",
    iconColor: "text-[#1814f3]",
    title: "Deposit Paypal",
    date: "25 January 2021",
    amount: "+$2,500",
    amountColor: "text-[#41d4a8]",
  },
  {
    id: 3,
    icon: DollarSign,
    iconBg: "bg-[#dcfaf8]",
    iconColor: "text-[#16dbcc]",
    title: "Jemi Wilson",
    date: "21 January 2021",
    amount: "+$5,400",
    amountColor: "text-[#41d4a8]",
  },
];

export function RecentTransactions() {
  return (
    <div>
      <h2 className="text-[#343c6a] text-xl font-semibold mb-6">
        Recent Transaction
      </h2>
      <Card className="bg-white border border-[#e6eff5]">
        <CardContent className="p-6">
          <div className="space-y-4">
            {transactionsData.map((transaction) => (
              <div
                key={transaction.id}
                className="flex items-center justify-between"
              >
                <div className="flex items-center gap-3">
                  <div
                    className={`w-10 h-10 ${transaction.iconBg} rounded-full flex items-center justify-center`}
                  >
                    <transaction.icon
                      className={`w-5 h-5 ${transaction.iconColor}`}
                    />
                  </div>
                  <div>
                    <p className="font-medium text-[#232323]">
                      {transaction.title}
                    </p>
                    <p className="text-sm text-[#718ebf]">{transaction.date}</p>
                  </div>
                </div>
                <span className={`${transaction.amountColor} font-medium`}>
                  {transaction.amount}
                </span>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
