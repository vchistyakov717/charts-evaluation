import { LineChart, Line, Tooltip, ResponsiveContainer } from "recharts";
import React from "react";

const data = [
  { name: "Page A", uv: 4000, pv: 2400, amt: 2400 },
  { name: "Page B", uv: 3000, pv: 1398, amt: 2210 },
  { name: "Page C", uv: 2000, pv: 9800, amt: 2290 },
  { name: "Page D", uv: 2780, pv: 3908, amt: 2000 },
  { name: "Page E", uv: 1890, pv: 4800, amt: 2181 },
  { name: "Page F", uv: 2390, pv: 3800, amt: 2500 },
  { name: "Page G", uv: 3490, pv: 4300, amt: 2100 }
];

export default function App() {
  return (
    <ResponsiveContainer>
    <LineChart width={500} height={500} data={data}>
      <defs>
        <linearGradient id="colorUv" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="red" />
          <stop offset="100%" stopColor="green" />
        </linearGradient>
      </defs>
      <Line
        type="monotone"
        dataKey="pv"
        stroke="url(#colorUv)"
        strokeWidth={5}
        dot={false}
        activeDot={false}
      />
      <Tooltip />
    </LineChart>
    </ResponsiveContainer>
  );
};