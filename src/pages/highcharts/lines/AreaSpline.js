import React from "react";
import Highcharts from "highcharts/highstock";
import HighchartsReact from "highcharts-react-official";

function Areaspline(props) {
  const options = {
    chart: {
        type: "areaspline"
      },
      title: {
        text: ""
      },
    credits: {
      enabled: false,
    },
    legend: {
        // layout: 'vertical',
        verticalAlign: "top",
        align: "left",
        borderWidth: 0
      },
      xAxis: {
        categories: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
          "Sunday"
        ]
      },
      yAxis: {
        title: {
          text: ""
        }
      },
      tooltip: {
        shared: false,
        valueSuffix: ""
      },
      plotOptions: {
        areaspline: {
          fillOpacity: 0.1
        }
      },
      series: [
        {
          name: "Alumini",
          data: [10, 6, 8, 5, 4, 10, 12],
          color: "#69AAF8"
        },
        {
          name: "Students",
          data: [13, 12, 19, 15, 14, 13, 14],
          color: "#61C0A0"
        }
      ]
  }
  return(
    <HighchartsReact
      highcharts={Highcharts}
      constructorType={'chart'}
      options={options}
    />
  )
}

export default Areaspline;