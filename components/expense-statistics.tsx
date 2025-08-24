import { Card, CardContent } from "@/components/ui/card";
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";

const expenseData = [
  { label: "Entertainment", percentage: 30, color: "#343c6a" },
  { label: "Bill Expense", percentage: 15, color: "#fc7900" },
  { label: "Investment", percentage: 20, color: "#fa00ff" },
  { label: "Others", percentage: 35, color: "#1814f3" },
];

// Custom label component for pie chart
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const renderCustomLabel = (props: any) => {
  const { cx, cy, midAngle, innerRadius, outerRadius, percent, payload } =
    props;
  const RADIAN = Math.PI / 180;
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text
      x={x}
      y={y}
      fill="white"
      textAnchor={x > cx ? "start" : "end"}
      dominantBaseline="central"
      fontSize="14"
      fontWeight="bold"
    >
      <tspan x={x} dy="-8">{`${(percent * 100).toFixed(0)}%`}</tspan>
      <tspan x={x} dy="16">
        {payload.label}
      </tspan>
    </text>
  );
};

export function ExpenseStatistics() {
  return (
    <div>
      <h2 className="text-[#343c6a] text-xl font-semibold mb-6">
        Expense Statistics
      </h2>
      <Card className="bg-white border border-[#e6eff5]">
        <CardContent>
          <div className="relative w-80 h-80 mx-auto mb-4">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={expenseData}
                  cx="50%"
                  cy="50%"
                  outerRadius={120}
                  paddingAngle={2}
                  dataKey="percentage"
                  startAngle={90}
                  endAngle={450}
                  label={renderCustomLabel}
                  labelLine={false}
                >
                  {expenseData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
              </PieChart>
            </ResponsiveContainer>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
