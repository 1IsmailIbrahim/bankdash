import { Card, CardContent } from "@/components/ui/card";
import { CreditCardIcon, DollarSign, PaypalIcon } from "../icons";

const transactionsData = [
  {
    id: 1,
    icon: CreditCardIcon,
    iconBg: "bg-[#fff5d9]",
    title: "Deposit from my Card",
    date: "28 January 2021",
    amount: "-$850",
    amountColor: "text-[#ff4b4a]",
  },
  {
    id: 2,
    icon: PaypalIcon,
    iconBg: "bg-[#e7edff]",
    title: "Deposit Paypal",
    date: "25 January 2021",
    amount: "+$2,500",
    amountColor: "text-[#41d4a8]",
  },
  {
    id: 3,
    icon: DollarSign,
    iconBg: "bg-[#dcfaf8]",
    title: "Jemi Wilson",
    date: "21 January 2021",
    amount: "+$5,400",
    amountColor: "text-[#41d4a8]",
  },
];

export function RecentTransactions() {
  return (
    <div>
      <h2 className="text-[#343C6A] text-lg md:text-xl font-semibold mb-4 md:mb-6">
        Recent Transaction
      </h2>
      <Card className="bg-white border border-[#e6eff5]">
        <CardContent className="p-4 md:p-6">
          <div className="space-y-3 md:space-y-4">
            {transactionsData.map((transaction) => (
              <div
                key={transaction.id}
                className="flex items-center justify-between gap-2"
              >
                <div className="flex items-center gap-2 md:gap-3 flex-1 min-w-0">
                  <div
                    className={`w-8 h-8 md:w-10 md:h-10 rounded-full flex items-center justify-center ${transaction.iconBg} shrink-0`}
                  >
                    <transaction.icon />
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="font-medium text-[#232323] text-sm md:text-base truncate">
                      {transaction.title}
                    </p>
                    <p className="text-xs md:text-sm text-[#718ebf]">
                      {transaction.date}
                    </p>
                  </div>
                </div>
                <span
                  className={`${transaction.amountColor} font-medium text-sm md:text-base shrink-0`}
                >
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
