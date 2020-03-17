import React, { useState } from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer
} from "recharts";
import dayjs from "dayjs";
import data from "./data.js";

const toPercent = (decimal, fixed = 0) => `${(decimal * 100).toFixed(fixed)}%`;
const shortDate = date => dayjs(date).format("MMM YY");
const longDate = date => dayjs(date).format("D MMM YYYY");

const accountStates = [
  {
    label: "Ordered",
    key: "ordered",
    color: "blue"
  },
  {
    label: "Activated",
    key: "active",
    color: "orange"
  },
  {
    label: "Confirmed email",
    key: "confirmed",
    color: "green"
  },
  {
    label: "Registered",
    key: "created",
    color: "red"
  }
];

export default function App() {
  const [stacked, setStacked] = useState(true);
  return (
    <div className="App">
      <label>
        <input
          type="checkbox"
          checked={stacked}
          onChange={event => setStacked(event.target.checked)}
        />
        Stacked
      </label>
      <ResponsiveContainer width="100%" height={567}>
        <AreaChart data={data} stackOffset="expand">
          <XAxis dataKey="endDate" tickFormatter={shortDate} />
          <YAxis tickFormatter={toPercent} />
          {accountStates.map(state => (
            <Area
              name={state.label}
              dataKey={`${state.key}Perc`}
              stroke={state.color}
              fill={state.color}
              type="monotone"
              stackId={stacked ? "cohort" : null}
              key={state.key}
            />
          ))}
          <Legend iconType="circle" />
          <Tooltip labelFormatter={longDate} />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}
