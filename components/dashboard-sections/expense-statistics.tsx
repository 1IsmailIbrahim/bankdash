import React, { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { PieChart, Pie, Cell, ResponsiveContainer, Sector } from "recharts";

const expenseData = [
  { label: "Entertainment", percentage: 30, color: "#343C6A" },
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
      fontSize="12"
      fontWeight="bold"
    >
      <tspan x={x} dy="-6">{`${(percent * 100).toFixed(0)}%`}</tspan>
      <tspan x={x} dy="12" fontSize="10">
        {payload.label}
      </tspan>
    </text>
  );
};

export function ExpenseStatistics() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const renderActiveShape = (props: any) => {
    const RADIAN = Math.PI / 180;
    const {
      cx,
      cy,
      midAngle,
      innerRadius,
      outerRadius,
      startAngle,
      endAngle,
      fill,
      payload,
      percent,
    } = props;

    const expanded = outerRadius + 10;

    const sin = Math.sin(-RADIAN * midAngle);
    const cos = Math.cos(-RADIAN * midAngle);

    const sx = cx + (expanded + 10) * cos;
    const sy = cy + (expanded + 10) * sin;

    return (
      <g>
        <Sector
          cx={cx}
          cy={cy}
          innerRadius={innerRadius}
          outerRadius={expanded}
          startAngle={startAngle}
          endAngle={endAngle}
          fill={fill}
          stroke="#ffffff"
          strokeWidth={4}
        />
        <text
          x={sx}
          y={sy}
          fill="#343C6A"
          textAnchor={sx > cx ? "start" : "end"}
          dominantBaseline="central"
          fontSize={12}
        >
          {`${payload.label} ${(percent * 100).toFixed(0)}%`}
        </text>
      </g>
    );
  };

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const AnyPie = Pie as any;

  return (
    <div>
      <h2 className="text-[#343C6A] text-lg md:text-xl font-semibold mb-4 md:mb-6">
        Expense Statistics
      </h2>
      <Card className="bg-white border border-[#e6eff5]">
        <CardContent className="p-4 py-0">
          <div className="relative w-full h-64 md:h-80 mx-auto mb-4">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <AnyPie
                  data={expenseData}
                  cx="50%"
                  cy="50%"
                  outerRadius="80%"
                  paddingAngle={2}
                  dataKey="percentage"
                  startAngle={90}
                  endAngle={450}
                  label={renderCustomLabel}
                  labelLine={false}
                  activeIndex={activeIndex === null ? undefined : activeIndex}
                  activeShape={renderActiveShape}
                  // eslint-disable-next-line @typescript-eslint/no-explicit-any
                  onMouseEnter={(_: any, index: number) =>
                    setActiveIndex(index)
                  }
                  onMouseLeave={() => setActiveIndex(null)}
                >
                  {expenseData.map((entry, index) => (
                    <Cell
                      key={`cell-${index}`}
                      fill={entry.color}
                      stroke="#ffffff"
                      strokeWidth={1}
                    />
                  ))}
                </AnyPie>
              </PieChart>
            </ResponsiveContainer>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
