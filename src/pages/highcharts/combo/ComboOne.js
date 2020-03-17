import React from "react";
import Highcharts from "highcharts/highstock";
import HighchartsReact from "highcharts-react-official";

import { aapl } from '../../../data/tmp/data';

var ohlc = [],
  volume = [],
  dataLength = aapl.length,
  groupingUnits = [
    [
      "week", // unit name
      [1] // allowed multiples
    ],
    ["month", [1, 2, 3, 4, 6]]
  ],
  i = 0;

for (i; i < dataLength; i += 1) {
  ohlc.push([
    aapl[i][0], // the date
    aapl[i][1], // open
    aapl[i][2], // high
    aapl[i][3], // low
    aapl[i][4] // close
  ]);

  volume.push([
    aapl[i][0], // the date
    aapl[i][5] // the volume
  ]);
}
const options = {
  rangeSelector: {
    selected: 1
  },

  title: {
    text: "AAPL Historical"
  },

  yAxis: [
    {
      labels: {
        align: "right",
        x: -3
      },
      title: {
        text: "OHLC"
      },
      height: "60%",
      lineWidth: 2,
      resize: {
        enabled: true
      }
    },
    {
      labels: {
        align: "right",
        x: -3
      },
      title: {
        text: "Volume"
      },
      top: "65%",
      height: "35%",
      offset: 0,
      lineWidth: 2
    }
  ],

  tooltip: {
    split: true
  },

  series: [
    {
      type: "candlestick",
      name: "AAPL",
      data: ohlc,
      dataGrouping: {
        units: groupingUnits
      }
    },
    {
      type: "column",
      name: "Volume",
      data: volume,
      yAxis: 1,
      dataGrouping: {
        units: groupingUnits
      }
    }
  ]
};

const ComboOne = () => (
  <div>
    <HighchartsReact
      highcharts={Highcharts}
      constructorType={"stockChart"}
      options={options}
    />
  </div>
);

export default ComboOne;