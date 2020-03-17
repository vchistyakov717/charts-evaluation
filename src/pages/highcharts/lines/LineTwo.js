import React from "react";
// Import Highcharts
import Highcharts from "highcharts/highstock";
//import HighchartsReact from "./HighchartsReact.js";
import HighchartsReact from "highcharts-react-official";

const options = {
  chart: {
    type: "spline",
    spacingLeft: 40,
    spacingRight: 40
  },
  title: {
    style: {
      display: "none"
    }
  },
  subtitle: {
    style: {
      display: "none"
    }
  },
  credits: {
    enabled: false
  },
  legend: {
    itemDistance: 20,
    itemStyle: {
      color: "#7990A1"
    }
  },
  plotOptions: {
    series: {
      marker: {
        symbol: "circle",
        lineWidth: 1
      },
      shadow: true
    }
  },
  series: [
    {
      name: "test1",
      type: "spline",
      color: "#576A7B",
      data: [23, 3, 33, 54, 29, 38]
    },
    {
      name: "test2",
      type: "spline",
      color: "#FE7B1A",
      data: [45, 21, 76, 43, 67, 59]
    },
    {
      name: "test3",
      type: "spline",
      color: "#00BAFF",
      data: [7, 19, 5, 9, 12, 11]
    },
    {
      name: "test4",
      type: "spline",
      color: "#000000",
      data: [40, 3, 71, 20, 28, 31]
    }
  ],
  yAxis: {
    title: {
      style: {
        display: "none"
      }
    },
    showFirstLabel: false
  },
  xAxis: {
    categories: [
      "2019-05-15",
      "2019-05-16",
      "2019-05-17",
      "2019-05-18",
      "2019-05-19",
      "2019-05-20"
    ]
  }
};

export default class App extends React.Component {
  render() {
    return (
      <div>
        <HighchartsReact highcharts={Highcharts} options={options} />
      </div>
    );
  }
}