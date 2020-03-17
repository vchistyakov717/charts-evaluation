import React, { PureComponent } from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";

import { correlations } from '../../../data/tmp/data';

// Load Highcharts modules
require("highcharts/modules/exporting")(Highcharts);
require("highcharts/modules/data")(Highcharts);
require("highcharts/modules/heatmap")(Highcharts);
require("highcharts/highcharts-more")(Highcharts);



export default class ViewEight extends PureComponent {
  render() {
    const options = {
      chart: {
        type: "heatmap",
        marginTop: 40,
        marginBottom: 80,
        plotBorderWidth: 1
      },
  
      title: {
        text: "Correlation Matrix"
      },
  
      xAxis: {
        categories: [
          "bikes",
          "day",
          "hour",
          "minute",
          "is_weekend",
          "temp",
          "humidity",
          "precip"
        ]
      },
  
      yAxis: {
        categories: [
          "bikes",
          "day",
          "hour",
          "minute",
          "is_weekend",
          "temp",
          "humidity",
          "precip"
        ],
        title: null,
        reversed: true
      },
  
      colorAxis: {
        min: 0,
        minColor: "#FFFFFF",
        maxColor: "#8B0000"
      },
  
      legend: {
        align: "right",
        layout: "vertical",
        verticalAlign: "top",
        y: 25,
        symbolHeight: 280
      },
  
      series: [
        {
          name: "Correlation",
          borderWidth: 1,
          data: correlations,
          dataLabels: {
            enabled: true,
            color: "#000000"
          }
        }
      ],
  
      responsive: {
        rules: [
          {
            condition: {
              maxWidth: 500
            },
            chartOptions: {
              yAxis: {
                labels: {
                  formatter: function() {
                    return this.value.charAt(0);
                  }
                }
              }
            }
          }
        ]
      }
    };

    return (
      <HighchartsReact
          highcharts={Highcharts}
          options={options}
        />
    );
  }
}
