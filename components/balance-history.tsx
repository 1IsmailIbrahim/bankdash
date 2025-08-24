import { Card, CardContent } from "@/components/ui/card";
import { XAxis, YAxis, ResponsiveContainer, Area, AreaChart } from "recharts";

const balanceData = [
  { month: "Jul", balance: 150 },
  { month: "Aug", balance: 120 },
  { month: "Sep", balance: 100 },
  { month: "Oct", balance: 80 },
  { month: "Nov", balance: 60 },
  { month: "Dec", balance: 90 },
  { month: "Jan", balance: 70 },
];

export function BalanceHistory() {
  return (
    <div>
      <h2 className="text-[#343c6a] text-xl font-semibold mb-6">
        Balance History
      </h2>
      <Card className="bg-white border border-[#e6eff5]">
        <CardContent className="p-6">
          <div className="h-64 relative">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart
                data={balanceData}
                margin={{ top: 20, right: 30, left: 20, bottom: 20 }}
              >
                <defs>
                  <linearGradient
                    id="balanceGradient"
                    x1="0"
                    y1="0"
                    x2="0"
                    y2="1"
                  >
                    <stop offset="0%" stopColor="#1814f3" stopOpacity={0.3} />
                    <stop offset="100%" stopColor="#1814f3" stopOpacity={0} />
                  </linearGradient>
                </defs>
                <XAxis
                  dataKey="month"
                  axisLine={false}
                  tickLine={false}
                  tick={{ fontSize: 12, fill: "#718ebf" }}
                />
                <YAxis hide />
                <Area
                  type="monotone"
                  dataKey="balance"
                  stroke="#1814f3"
                  strokeWidth={3}
                  fill="url(#balanceGradient)"
                  fillOpacity={1}
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
