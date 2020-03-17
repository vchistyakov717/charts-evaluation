import React from "react";
import Highcharts from "highcharts/highcharts";
import highchartsMore from "highcharts/highcharts-more";
import solidGauge from "highcharts/modules/solid-gauge";
import HighchartsReact from "highcharts-react-official";

highchartsMore(Highcharts);
solidGauge(Highcharts);

const options = {
  chart: {
    type: "solidgauge"
  },
  title: {
	text: ''
  },
  credits: {
    enabled: false
  },
  series: [
    {
      data: [80]
    }
  ]
};

export default function SolidGauge() {
    return (
        <HighchartsReact
          options={options}
        />
    );
}