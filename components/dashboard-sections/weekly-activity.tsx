import { Card, CardContent } from "@/components/ui/card";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";

const weeklyData = [
  { day: "Sat", Deposit: 240, Withdraw: 380 },
  { day: "Sun", Deposit: 120, Withdraw: 260 },
  { day: "Mon", Deposit: 345, Withdraw: 255 },
  { day: "Tue", Deposit: 470, Withdraw: 125 },
  { day: "Wed", Deposit: 235, Withdraw: 230 },
  { day: "Thu", Deposit: 340, Withdraw: 375 },
  { day: "Fri", Deposit: 355, Withdraw: 465 },
];

export function WeeklyActivity() {
  return (
    <div>
      <h2 className="text-[#343C6A] text-lg md:text-xl font-semibold mb-4 md:mb-6">
        Weekly Activity
      </h2>
      <Card className="bg-white border border-[#e6eff5]">
        <CardContent className="p-4 md:p-6">
          <div className="flex justify-center md:justify-end mb-4">
            <div className="flex items-center gap-4 md:gap-6">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-[#16dbcc] rounded-full"></div>
                <span className="text-[#718ebf] text-xs md:text-sm">
                  Deposit
                </span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-[#1814f3] rounded-full"></div>
                <span className="text-[#718ebf] text-xs md:text-sm">
                  Withdraw
                </span>
              </div>
            </div>
          </div>
          <div className="h-48 md:h-64">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart
                data={weeklyData}
                margin={{ top: 20, right: 10, left: 10, bottom: 5 }}
              >
                <CartesianGrid
                  strokeDasharray="0"
                  stroke="#f0f0f0"
                  horizontal={true}
                  vertical={false}
                />
                <XAxis
                  dataKey="day"
                  axisLine={false}
                  tickLine={false}
                  tick={{ fontSize: 10, fill: "#718ebf" }}
                  interval={0}
                />
                <YAxis
                  domain={[0, 500]}
                  ticks={[0, 100, 200, 300, 400, 500]}
                  axisLine={false}
                  tickLine={false}
                  tick={{ fontSize: 10, fill: "#718ebf" }}
                />
                <Bar
                  dataKey="Deposit"
                  fill="#16dbcc"
                  radius={[999, 999, 999, 999]}
                  maxBarSize={12}
                />
                <Bar
                  dataKey="Withdraw"
                  fill="#1814f3"
                  radius={[999, 999, 999, 999]}
                  maxBarSize={12}
                />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
