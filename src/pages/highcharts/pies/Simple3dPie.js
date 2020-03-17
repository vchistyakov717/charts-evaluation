import React from "react";
import Highcharts from "highcharts/highstock";
import HighchartsReact from "highcharts-react-official";

// Load Highcharts modules
require("highcharts/highcharts-3d")(Highcharts);


const chartOptions = {
  chart: {
    options3d: {
      enabled: true,
      alpha: 45,
      beta: 0
    }
  },
  title: {
	  text: ''
  },
  credits: {
    enabled: false
  },
  series: [
    {
      depth: 45,
      data: [[1, "Highcharts"], [1, "React"], [3, "Highsoft"]],
      keys: ["y", "name"],
      type: "pie"
    }
  ]
};

export default function Simple3dPie() {
  return (
      <HighchartsReact
        options={chartOptions}
        highcharts={Highcharts}
      />
  );
}
