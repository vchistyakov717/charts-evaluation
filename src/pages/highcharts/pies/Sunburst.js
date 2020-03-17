import React from "react";
import HighchartsReact from "highcharts-react-official";
import Highcharts from "highcharts";
import HighchartsSunburst from "highcharts/modules/sunburst";

import data from "../data";

HighchartsSunburst(Highcharts);

export default class Sunburst extends React.Component {
  state = {
    count: 0
  };

  componentDidMount() {
    setTimeout(() => {
      this.setState({ count: 1 });
    }, 500);
  }

  render() {
    const options = {
      chart: {
        height: "100%"
      },
      credits: {
        enabled: false
      },
      title: {
        text: "World population 2017"
      },
      subtitle: {
        text:
          'Source <href="https://en.wikipedia.org/wiki/List_of_countries_by_population_(United_Nations)">Wikipedia</a>'
      },
      series: [
        {
          type: "sunburst",
          data: data,
          allowDrillToNode: true,
          cursor: "pointer",
          dataLabels: {
            format: "{point.name}",
            filter: {
              property: "innerArcLength",
              operator: ">",
              value: 16
            }
          },
          levels: [
            {
              level: 1,
              levelIsConstant: false,
              dataLabels: {
                filter: {
                  property: "outerArcLength",
                  operator: ">",
                  value: 64
                }
              }
            },
            {
              level: 2,
              colorByPoint: true
            },
            {
              level: 3,
              colorVariation: {
                key: "brightness",
                to: -0.5
              }
            },
            {
              level: 4,
              colorVariation: {
                key: "brightness",
                to: 0.5
              }
            }
          ]
        }
      ],
      tooltip: {
        headerFormat: "",
        pointFormat: "The population of <b>{point.name}</b> is <b>{point.value}</b>"
      }
    };

    return (
      <HighchartsReact
        constructorType={"chart"}
        highcharts={Highcharts}
        options={options}
      />
    );
  }
}