import React from "react";
import Highcharts from "highcharts/highstock";
import HighchartsReact from "highcharts-react-official";
import applyDrilldown from "highcharts/modules/drilldown";
import { combo } from "../../../data/tmp/data";

applyDrilldown(Highcharts);

export default class ComboFive extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      options: {
        chart: {
          spacingTop: 48,
          spacingLeft: 48,
          type: "column",
          marginLeft: 100,
          marginRight: 20
        },
        style: {
          fontFamily: "MuseoSans_light, sans-serif",
          color: "#999999",
          fontSize: "12px"
        },
        title: {
          text: ""
        },
        exporting: {
          enabled: false
        },
        xAxis: {
          visible: true,
          labels: {
            style: {
              color: "#999999"
            }
          },
          opposite: false,
          type: "category",
          tickInterval: 1,
          startPoint: 1,
          plotLines: [
            {
              label: {
                text: "Forecast",
                align: "right",
                verticalAlign: "top",
                y: 20,
                x: 60,
                rotation: "0",
                style: {
                  color: "#000000"
                }
              },
              color: "#000000",
              dashStyle: "Dash",
              width: 2,
              value: "08"
            }
          ]
        },
        yAxis: {
          lineWidth: 1,
          min: 0,
          visible: true,
          labels: {
            style: {
              color: "#999999"
            }
          },
          title: {
            text: "kbbl"
          },
          plotLines: [
            {
              zIndex: 5,
              label: {
                text: "Low Level  ",
                align: "right",
                verticalAlign: "bottom",
                y: 20,
                x: -8,
                rotation: "0",
                style: {
                  color: "#000000"
                }
              },
              width: 2,
              value: 400
            },
            {
              label: {
                text: "Unpumpable  ",
                align: "right",
                padding: 5,
                verticalAlign: "bottom",
                y: 20,
                x: -8,
                zIndex: 10,
                rotation: "0",
                style: {
                  color: "#000000",
                  zIndex: 10
                }
              },
              width: 2,
              zIndex: 10,
              value: 200
            },
            {
              label: {
                text: "Max  ",
                align: "right",
                verticalAlign: "bottom",
                y: 20,
                x: -8,
                rotation: "0",
                style: {
                  color: "#000000"
                }
              },
              width: 2,
              zIndex: 10,
              value: 2000
            },
            {
              label: {
                text: "Contingency Low    ",
                align: "right",
                verticalAlign: "bottom",
                y: 20,
                x: -8,
                rotation: "0",
                style: {
                  color: "#000000"
                }
              },
              width: 2,
              zIndex: 10,
              value: 680
            },
            {
              label: {
                text: "Tank Top   ",
                align: "right",
                verticalAlign: "bottom",
                y: 20,
                x: -8,
                rotation: "0",
                style: {
                  color: "#000000"
                }
              },
              width: 2,
              zIndex: 10,
              value: 1680
            }
          ]
        },
        legend: {
          enabled: false
        },
        credits: {
          enabled: false
        },
        tooltip: {
          crosshairs: true,
          shared: true,
          backgroundColor: null,
          borderWidth: 0,
          shadow: false,
          style: {
            padding: 0
          },
          xDateFormat: "%Y-%m-%d",
          useHTML: true
        },
        plotOptions: {
          series: {
            pointPadding: 0.005
          },
          column: {
            stacking: "normal",
            borderWidth: 0,
            dataLabels: {
              enabled: false
            }
          }
        },
        series: [
          {
            type: "area",
            name: "Low Level",
            data: combo.data1,
            marker: {
              enabled: false
            },
            color: "#E7F0FA",
            visible: true,
            tooltip: {
              enabled: false
            },
            hover: {
              enabled: false
            },
            enableMouseTracking: false,
            zones: [
              {
                dashStyle: "dash"
              }
            ],
            fillOpacity: 0.6,
            zIndex: 21
          },
          {
            type: "area",
            name: "Unpumpable",
            data: combo.data2,
            marker: {
              enabled: false
            },
            color: "#D8F9F4",
            visible: true,
            tooltip: {
              enabled: false
            },
            hover: {
              enabled: false
            },
            enableMouseTracking: false,
            fillOpacity: 0.6,
            zIndex: 22
          },
          {
            type: "area",
            name: "Contigency Low",
            data: combo.data3,
            marker: {
              enabled: false
            },
            color: "#B2D2A6",
            visible: true,
            tooltip: {
              enabled: false
            },
            hover: {
              enabled: false
            },
            enableMouseTracking: false,
            zones: [
              {
                dashStyle: "dash"
              }
            ],
            fillOpacity: 0.1,
            zIndex: 20
          },
          {
            type: "line",
            name: "Net Actual",
            data: combo.data4,
            marker: {
              enabled: false
            },
            color: "rgb(92, 180, 222)",
            visible: true
          },
          {
            type: "line",
            name: "Net Planned",
            data: combo.data5,
            marker: {
              enabled: false
            },
            color: "rgb(82, 79, 140)",
            visible: true,
            zones: [
              {
                dashStyle: "dash"
              }
            ]
          },
          {
            type: "line",
            name: "Gross Actual",
            data: combo.data6,
            marker: {
              enabled: false
            },
            color: "rgb(242, 184, 217)",
            visible: true
          },
          {
            type: "line",
            name: "Gross Planned",
            data: combo.data7,
            marker: {
              enabled: false
            },
            color: "rgb(173, 0, 0)",
            visible: true,
            zones: [
              {
                dashStyle: "dash"
              }
            ]
          },
          {
            type: "line",
            name: "Max",
            data: combo.data8,
            marker: {
              enabled: false
            },
            color: "red",
            visible: true,
            tooltip: {
              enabled: false
            },
            hover: {
              enabled: false
            },
            enableMouseTracking: false
          },
          {
            type: "line",
            name: "Tank Top",
            data: combo.data9,
            marker: {
              enabled: false
            },
            color: "rgb(0,0,0)",
            visible: true,
            tooltip: {
              enabled: false
            },
            hover: {
              enabled: false
            },
            enableMouseTracking: false,
            zones: [
              {
                dashStyle: "dash"
              }
            ]
          },
          {
            name: "Event",
            zIndex: 2,
            type: "scatter",
            lineWidth: 0,
            marker: {
              enabled: true,
              symbol: "circle",
              radius: 6
            },
            visible: true,
            color: "#E75552",
            data: combo.data10
          },
          {
            type: "column",
            name: "PETRONAS",
            data: combo.data11,
            marker: {
              enabled: true
            },
            color: "#009E8E",
            visible: true,
            zIndex: 250
          },
          {
            type: "column",
            name: "ENQUEST",
            data: combo.data12,
            marker: {
              enabled: true
            },
            color: "#96504C",
            visible: true,
            zIndex: 250
          },
          {
            type: "column",
            name: "EMEPMI",
            data: combo.data13,
            marker: {
              enabled: true
            },
            color: "#76DD9F",
            visible: true,
            zIndex: 250
          },
          {
            type: "scatter",
            name: "Event",
            data: combo.data14,
            marker: {
              enabled: true,
              symbol: "circle",
              radius: 6
            },
            color: "rgb(231,85,82)",
            visible: true,
            zIndex: 250
          }
        ],
        lang: {
          noData: "No data available"
        }
      }
    };
  }
  render() {
    return (
      <div>
        <HighchartsReact
          ref={"highcharts"}
          highcharts={Highcharts}
          options={this.state.options}
        />
      </div>
    );
  }
}
