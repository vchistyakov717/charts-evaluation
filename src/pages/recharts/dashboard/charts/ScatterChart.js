import React, { Component } from "react";
import {
  ScatterChart,
  Scatter,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer
} from "recharts";

const TABLE_LIST_1 = [
  { x: 10, y: 180 },
  { x: 20, y: 200 },
  { x: 50, y: 380 },
  { x: 70, y: 50 },
  { x: 90, y: 200 },
  { x: 210, y: 50 }
];
const TABLE_LIST_2 = [
  { x: 10, y: 600 },
  { x: 50, y: 1000 },
  { x: 60, y: 800 },
  { x: 65, y: 450 },
  { x: 80, y: 350 },
  { x: 90, y: 450 },
  { x: 110, y: 615 },
  { x: 140, y: 300 },
  { x: 240, y: 400 },
  { x: 320, y: 200 }
];

export default class Chart extends Component {
  state = {
    list1: [...TABLE_LIST_1],
    list2: [...TABLE_LIST_2]
  };

  render() {
    const { list1, list2 } = this.state;
    return (
    <ResponsiveContainer 
        maxWidth="auto"
        width="100%"
        minHeight={600}
        maxHeight={600}
    >
      <ScatterChart
        width={600}
        height={400}
        margin={{ top: 20, right: 20, bottom: 20, left: 20 }}
      >
        <CartesianGrid />
        <XAxis type="number" dataKey={"x"} name="stature" unit="cm" />
        <YAxis type="number" dataKey={"y"} name="weight" unit="kg" />
        <Tooltip cursor={{ strokeDasharray: "3 3" }} />
        <Legend />
        <Scatter
          name="Median"
          data={list1}
          fill="#8884d8"
          line
          shape="circle"
        />
        <Scatter name="Hypo" data={list2} fill="red" line shape="circle" />
      </ScatterChart>
    </ResponsiveContainer>
    );
  }
}