import React from "react";

import {
  BarChart,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  Bar,
  ResponsiveContainer
} from "recharts";

const rangeData = [
  {
    day: 1,
    load_day: 21,
    load_night: 34
  },
  {
    day: 2,
    load_day: 11,
    load_night: 24
  },
  {
    day: 3,
    load_day: 17,
    load_night: 10
  },
  {
    day: 4,
    load_day: 20,
    load_night: 22
  },
  {
    day: 5,
    load_day: 11,
    load_night: 20
  },
  {
    day: 6,
    load_day: 12,
    load_night: 30
  },
  {
    day: 7,
    load_day: 11,
    load_night: 23
  },
  {
    day: 8,
    load_day: 31,
    load_night: 20
  },
  {
    day: 9,
    load_day: 11,
    load_night: 21
  },
  {
    day: 10,
    load_day: 19,
    load_night: 18
  },
  {
    day: 11,
    load_day: 10,
    load_night: 20
  },
  {
    day: 12,
    load_day: 15,
    load_night: 16
  },
  {
    day: 13,
    load_day: 13,
    load_night: 14
  },
  {
    day: 14,
    load_day: 21,
    load_night: 12
  },
  {
    day: 15,
    load_day: 12,
    load_night: 20
  },
  {
    day: 16,
    load_day: 10,
    load_night: 19
  },
  {
    day: 17,
    load_day: 11,
    load_night: 31
  },
  {
    day: 18,
    load_day: 15,
    load_night: 11
  },
  {
    day: 19,
    load_day: 13,
    load_night: 24
  },
  {
    day: 20,
    load_day: 15,
    load_night: 36
  },
  {
    day: 21,
    load_day: 16,
    load_night: 15
  },
  {
    day: 22,
    load_day: 18,
    load_night: 23
  },
  {
    day: 23,
    load_day: 11,
    load_night: 32
  },
  {
    day: 24,
    load_day: 31,
    load_night: 24
  }
];

const VerticalBarChart = () => {
  return (
      <ResponsiveContainer width="100%" height={567}>
    <BarChart
      layout="vertical"
      width={730}
      height={550}
      data={rangeData}
      margin={{
        top: 20,
        right: 20,
        bottom: 20,
        left: 20
      }}
    >
      <XAxis type="number" />
      <YAxis
        dataKey="day"
        type="category"
        minTickGap={0}
        tick={{ strokeWidth: 2 }}
      />
      <CartesianGrid />
      <Bar stackId="a" dataKey="load_night" fill="#27669e" />
      <Bar
        radius={[0, 10, 10, 0]}
        stackId="a"
        dataKey="load_day"
        fill="#ff8600"
      />
      <Tooltip />
      <Legend layout="vertical" />
    </BarChart>
    </ResponsiveContainer>
  );
};

export default VerticalBarChart;
