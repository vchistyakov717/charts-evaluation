import React, { useState } from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";

import { emotions } from '../../../data/tmp/data';

require("highcharts/modules/streamgraph")(Highcharts);
require("highcharts/modules/series-label")(Highcharts);

export default function Stream() {
  const tmpAggregation = [30, 5, 20, 10, 5, 10, 15, 5];

  const [chartOptions, setChartOptions] = useState({
    colors: [
      "#0073C0",
      "#9174AE",
      "#D4263C",
      "#ABC23A",
      "#00ACF2",
      "#F99500",
      "#FFF400",
      "#B41753"
    ],
    chart: {
      type: "streamgraph",
      marginBottom: 100,
      zoomType: "x",
      backgroundColor: "transparent"
    },
    title: {
      text: "Timeline of Emotion Distributions",
      style: {
        color: "#FFFFFF"
      }
    },
    credits: {
      enabled: false
    },
    xAxis: {
      maxPadding: 0,
      type: "category",
      crosshair: true,
      categories: [
        "Feb, 18",
        "Apr, 18",
        "Jun, 18",
        "Aug, 18",
        "Oct, 18",
        "Dec, 18"
      ],
      labels: {
        alignColumns: false,
        reserveSpace: false,
        rotation: 0
      },
      margin: 20,
      lineWidth: 0.5,
      tickWidth: 0
    },
    yAxis: {
      visible: false,
      startOnTick: false,
      endOnTick: false
    },
    plotOptions: {
      series: {
        label: {
          minFontSize: 10,
          maxFontSize: 15,
          style: {
            color: "rgba(255,255,255,0.75)"
          }
        },
        states: {
          hover: {
            enabled: false
          }
        },
        events: {
          legendItemClick: function() {
            return false;
          },
          mouseOver: function() {
            const customizedText =
              this.name + " " + tmpAggregation[this.index] + "%";
            if (!!this.labelBySeries) {
              this.labelBySeries.text.element.innerHTML = customizedText;
            }
          },
          mouseOut: function() {
            if (!!this.labelBySeries) {
              this.labelBySeries.text.element.innerHTML = this.name;
            }
          }
        }
      }
    },
    legend: {
      enabled: true,
      symbolHeight: 12,
      symbolWidth: 12,
      symbolRadius: 3,
      itemStyle: {
        color: "#FFFFFF",
        fontWeight: "bold"
      }
    },
    series: emotions,
    tooltip: {
      pointFormat: "{series.name}: <b>{point.y}%</b><br/>"
    }
  });

  return (
      <HighchartsReact options={chartOptions} highcharts={Highcharts} />
  );
}