import { Card, CardContent } from "@/components/ui/card";
import {
  XAxis,
  YAxis,
  ResponsiveContainer,
  Area,
  AreaChart,
  CartesianGrid,
} from "recharts";

const balanceData = [
  { month: "Jul", balance: 200 },
  { month: "Aug", balance: 300 },
  { month: "Sep", balance: 400 },
  { month: "Oct", balance: 800 },
  { month: "Nov", balance: 200 },
  { month: "Dec", balance: 500 },
  { month: "Jan", balance: 600 },
];

export function BalanceHistory() {
  return (
    <div>
      <h2 className="text-[#343C6A] text-lg md:text-xl font-semibold mb-4 md:mb-6">
        Balance History
      </h2>
      <Card className="bg-white border border-[#e6eff5] rounded-3xl">
        <CardContent className="p-4 md:p-6">
          <div className="h-48 md:h-64 relative">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart
                data={balanceData}
                margin={{ top: 20, right: 10, left: 10, bottom: 20 }}
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
                <CartesianGrid
                  strokeDasharray="5 5"
                  stroke="#e0e0e0"
                  horizontal={true}
                  vertical={true}
                />
                <XAxis
                  dataKey="month"
                  axisLine={false}
                  tickLine={false}
                  tick={{ fontSize: 10, fill: "#718ebf" }}
                  interval={0}
                />
                <YAxis
                  domain={[0, 800]}
                  ticks={[0, 200, 400, 600, 800]}
                  axisLine={false}
                  tickLine={false}
                  tick={{ fontSize: 10, fill: "#718ebf" }}
                />
                <Area
                  type="monotone"
                  dataKey="balance"
                  stroke="#1814f3"
                  strokeWidth={2}
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
