import { Card, CardContent } from "@/components/ui/card";
import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer } from "recharts";

const weeklyData = [
  { day: "Sat", Deposit: 40, Withdraw: 80 },
  { day: "Sun", Deposit: 20, Withdraw: 60 },
  { day: "Mon", Deposit: 45, Withdraw: 55 },
  { day: "Tue", Deposit: 70, Withdraw: 25 },
  { day: "Wed", Deposit: 35, Withdraw: 30 },
  { day: "Thu", Deposit: 40, Withdraw: 75 },
  { day: "Fri", Deposit: 55, Withdraw: 65 },
];

export function WeeklyActivity() {
  return (
    <div>
      <h2 className="text-[#343c6a] text-xl font-semibold mb-6">
        Weekly Activity
      </h2>
      <Card className="bg-white border border-[#e6eff5]">
        <CardContent className="p-6">
          <div className="flex justify-end mb-4">
            <div className="flex items-center gap-6">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-[#16dbcc] rounded-full"></div>
                <span className="text-[#718ebf] text-sm">Deposit</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-[#1814f3] rounded-full"></div>
                <span className="text-[#718ebf] text-sm">Withdraw</span>
              </div>
            </div>
          </div>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart
                data={weeklyData}
                margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
              >
                <XAxis
                  dataKey="day"
                  axisLine={false}
                  tickLine={false}
                  tick={{ fontSize: 12, fill: "#718ebf" }}
                />
                <YAxis hide />
                <Bar
                  dataKey="Deposit"
                  fill="#16dbcc"
                  radius={[999, 999, 999, 999]}
                  maxBarSize={16}
                />
                <Bar
                  dataKey="Withdraw"
                  fill="#1814f3"
                  radius={[999, 999, 999, 999]}
                  maxBarSize={16}
                />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
