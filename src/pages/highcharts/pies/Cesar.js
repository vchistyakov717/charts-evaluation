import React from "react";

import Highcharts from "highcharts/highcharts.js";
import highchartsMore from "highcharts/highcharts-more.js";
import solidGauge from "highcharts/modules/solid-gauge.js";
import HighchartsReact from "highcharts-react-official";

import { Button } from "reactstrap";

highchartsMore(Highcharts);
solidGauge(Highcharts);

export default class CesarGauge extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // To avoid unnecessary update keep all options in the state.
      chartOptions: {
        chart: {
          animation: true,
          type: "gauge",
          plotBackgroundColor: null,
          plotBackgroundImage: null,
          plotBorderWidth: 0,
          plotShadow: false
        },
        drilldown: {
          animation: {
            duration: 200,
            easing: "easeOutBounce"
          }
        },
        title: {
          text: ""
        },
        credits: {
            enabled: false
          },
        pane: {
          startAngle: -130,
          endAngle: 130,
          background: [
            {
              backgroundColor: {
                linearGradient: { x1: 0, y1: 0, x2: 0, y2: 1 },
                stops: [[0, "#FFF"], [1, "#333"]]
              },
              borderWidth: 0,
              outerRadius: "109%"
            },
            {
              backgroundColor: {
                linearGradient: { x1: 0, y1: 0, x2: 0, y2: 1 },
                stops: [[0, "#333"], [1, "#FFF"]]
              },
              borderWidth: 1,
              outerRadius: "107%"
            },
            {
              // default background
            },
            {
              backgroundColor: "#DDD",
              borderWidth: 0,
              outerRadius: "105%",
              innerRadius: "103%"
            }
          ]
        },

        yAxis: {
          min: 0,
          max: 200,

          minorTickInterval: "auto",
          minorTickWidth: 1,
          minorTickLength: 10,
          minorTickPosition: "inside",
          minorTickColor: "#666",

          tickPixelInterval: 30,
          tickWidth: 2,
          tickPosition: "inside",
          tickLength: 10,
          tickColor: "#666",
          labels: {
            step: 2,
            rotation: "auto"
          },
          title: null,
          plotBands: [
            {
              from: 0,
              to: 50,
              color: "#55BF3B" // green
            },
            {
              from: 50,
              to: 100,
              color: "#DDDF0D" // yellow
            },
            {
              from: 100,
              to: 150,
              color: "#DF5353" // red
            },
            {
              from: 150,
              to: 200,
              color: "#blue" // red
            }
          ]
        },
        series: [
          {
            name: "Speed",
            data: [10],
            tooltip: {
              valueSuffix: " km/h"
            },
            dataLabels: {
              format:
                '<div style="text-align:center">' +
                '<span style="font-size:12px" className="divclass">{y}</span><br/>' +
                '<span style="font-size:7px;opacity:0.4">km/h</span>' +
                "</div>",
              borderWidth: 0
            }
          }
        ],
        plotOptions: {
          series: {
            point: {
              events: {
                mouseOver: this.setHoverData.bind(this)
              }
            }
          }
        }
      },
      hoverData: null
    };
  }

  setHoverData = e => {
    // The chart is not updated because `chartOptions` has not changed.
    this.setState({ hoverData: e.target.category });
  };

  updateSeries = () => {
    // The chart is updated only with new options.
    this.setState({
      chartOptions: {
        series: [{ data: [Math.random() * 200] }]
      }
    });
  };

  render() {
    const { chartOptions, hoverData } = this.state;

    return (
      <div>
        <HighchartsReact highcharts={Highcharts} options={chartOptions} />
        <Button onClick={this.updateSeries.bind(this)}>Update Series</Button>
      </div>
    );
  }
}