"use client";

import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
} from "recharts";

interface AnalyticsChartProps {
  emailsSent: number;
  emailsOpened: number;
  linksClicked: number;
}

export default function AnalyticsChart({
  emailsSent,
  emailsOpened,
  linksClicked,
}: AnalyticsChartProps) {
  const data = [
    {
      name: "Sent",
      value: emailsSent,
    },
    {
      name: "Opened",
      value: emailsOpened,
    },
    {
      name: "Clicked",
      value: linksClicked,
    },
  ];

  return (
    <div className="bg-white p-6 rounded-xl shadow">
      <h2 className="text-xl font-semibold mb-4">
        Email Analytics
      </h2>

      <ResponsiveContainer
        width="100%"
        height={350}
      >
        <BarChart data={data}>
          <XAxis dataKey="name" />

          <YAxis />

          <Tooltip />

          <Bar dataKey="value" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}