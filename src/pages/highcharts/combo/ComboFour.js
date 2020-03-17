import React from "react";
import Highcharts from "highcharts/highstock";
import HighchartsReact from "highcharts-react-official";
import applyDrilldown from "highcharts/modules/drilldown";

applyDrilldown(Highcharts);

export default class ComboFour extends React.Component {
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
          categories: [
            "1",
            "5",
            "10",
            "15",
            "20",
            "25",
            "1",
            "5",
            "10",
            "15",
            "20",
            "25",
            "30",
            "1",
            "5",
            "10",
            "15",
            "20",
            "25",
            "30",
            "1",
            "5",
            "10",
            "15",
            "20",
            "25",
            "30",
            "1",
            "5",
            "10",
            "15",
            "20",
            "25",
            "30",
            "1",
            "5",
            "10",
            "15",
            "20",
            "25",
            "30"
          ],
          plotLines: [
            {
              label: {
                text: "Feb",
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
              value: 0
            },
            {
              label: {
                text: "Mar",
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
              value: 7
            },
            {
              label: {
                text: "Apr",
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
              value: 14
            },
            {
              label: {
                text: "May",
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
              value: 21
            },
            {
              label: {
                text: "Jun",
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
              value: 28
            },
            {
              label: {
                text: "Jul",
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
              value: 35
            },
            {
              label: {
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
              value: 42
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
            data: [
              400,
              400,
              400,
              400,
              400,
              400,
              400,
              400,
              400,
              400,
              400,
              400,
              400,
              400,
              400,
              400,
              400,
              400,
              400,
              400,
              400,
              400,
              400,
              400,
              400,
              400,
              400,
              400,
              400,
              400,
              400,
              400,
              400,
              400,
              400,
              400,
              400,
              400,
              400,
              400,
              400
            ],
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
            data: [
              200,
              200,
              200,
              200,
              200,
              200,
              200,
              200,
              200,
              200,
              200,
              200,
              200,
              200,
              200,
              200,
              200,
              200,
              200,
              200,
              200,
              200,
              200,
              200,
              200,
              200,
              200,
              200,
              200,
              200,
              200,
              200,
              200,
              200,
              200,
              200,
              200,
              200,
              200,
              200,
              200
            ],
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
            data: [
              680,
              680,
              680,
              680,
              680,
              680,
              680,
              680,
              680,
              680,
              680,
              680,
              680,
              680,
              680,
              680,
              680,
              680,
              680,
              680,
              680,
              680,
              680,
              680,
              680,
              680,
              680,
              680,
              680,
              680,
              680,
              680,
              680,
              680,
              680,
              680,
              680,
              680,
              680,
              680,
              680
            ],
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
            data: [
              906.566784,
              758.21697,
              866.3298699999999,
              974.0766699999999,
              1081.23037,
              1190.41387,
              0,
              2136.4073399999997,
              2239.7485399999996,
              2347.0863399999994,
              2454.424139999999,
              2562.789239999999,
              2670.1366399999993,
              0,
              3644.883609999999,
              3749.348609999999,
              3857.613609999999,
              3966.378609999999,
              4075.2436099999986,
              4183.173309999998,
              0,
              5015.99848,
              5123.3025800000005,
              5230.606680000001,
              5337.910780000001,
              5445.214880000001,
              5552.518980000002,
              0,
              2340.73595,
              2340.73595,
              2340.73595,
              2340.73595,
              2340.73595,
              2340.73595,
              0,
              7068.952920000002,
              7068.952920000002,
              7068.952920000002,
              7068.952920000002,
              7068.952920000002,
              0
            ],
            marker: {
              enabled: false
            },
            color: "rgb(92, 180, 222)",
            visible: true
          },
          {
            type: "line",
            name: "Net Planned",
            data: [
              [1, 0],
              [5, 90],
              [10, 140],
              [15, 0],
              [20, 250],
              [25, 0],
              [1, 0],
              [5, 0],
              [10, 0],
              [15, 0],
              [20, 0],
              [25, 0],
              [30, 0],
              [1, 0],
              [5, 0],
              [10, 0],
              [15, 0],
              [20, 0],
              [25, 0],
              [30, 0],
              [1, 0],
              [5, 0],
              [10, 0],
              [15, 0],
              [20, 0],
              [25, 0],
              [30, 0],
              [1, 0],
              [5, 0],
              [10, 0],
              [15, 0],
              [20, 0],
              [25, 0],
              [30, 0],
              [1, 0],
              [5, 0],
              [10, 0],
              [15, 0],
              [20, 0],
              [25, 0],
              [30, 0]
            ],
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
            data: [
              1055.536925,
              911.299668,
              1019.412568,
              1127.1593679999999,
              1234.313068,
              1343.496568,
              0,
              2442.572736,
              2545.913936,
              2653.2517359999997,
              2760.5895359999995,
              2868.9546359999995,
              2976.3020359999996,
              0,
              4104.131703999999,
              4208.596704,
              4316.861704,
              4425.626704,
              4534.491704,
              4642.421404,
              0,
              5628.329272000001,
              5735.633372000001,
              5842.937472000001,
              5950.241572000002,
              6057.545672000002,
              6164.849772000002,
              0,
              6356.149440000003,
              6356.149440000003,
              6356.149440000003,
              6356.149440000003,
              6356.149440000003,
              6356.149440000003,
              0,
              7987.4491080000025,
              7987.4491080000025,
              7987.4491080000025,
              7987.4491080000025,
              7987.4491080000025,
              0
            ],
            marker: {
              enabled: false
            },
            color: "rgb(242, 184, 217)",
            visible: true
          },
          {
            type: "line",
            name: "Gross Planned",
            data: [
              -1762.356043,
              -1326.293243,
              -781.214743,
              -236.13624299999998,
              308.942257,
              854.020757,
              1399.099257,
              1832.8636569999999,
              2376.319157,
              2919.774657,
              3463.230157,
              4006.685657,
              4550.141157,
              4767.523357,
              4767.523357,
              4767.523357,
              4767.523357,
              4767.523357,
              4767.523357,
              4767.523357,
              4767.523357,
              4767.523357,
              4767.523357,
              4767.523357,
              4767.523357,
              4767.523357,
              4767.523357,
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              0
            ],
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
            data: [
              2000,
              2000,
              2000,
              2000,
              2000,
              2000,
              2000,
              2000,
              2000,
              2000,
              2000,
              2000,
              2000,
              2000,
              2000,
              2000,
              2000,
              2000,
              2000,
              2000,
              2000,
              2000,
              2000,
              2000,
              2000,
              2000,
              2000,
              2000,
              2000,
              2000,
              2000,
              2000,
              2000,
              2000,
              2000,
              2000,
              2000,
              2000,
              2000,
              2000,
              2000
            ],
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
            data: [
              1680,
              1680,
              1680,
              1680,
              1680,
              1680,
              1680,
              1680,
              1680,
              1680,
              1680,
              1680,
              1680,
              1680,
              1680,
              1680,
              1680,
              1680,
              1680,
              1680,
              1680,
              1680,
              1680,
              1680,
              1680,
              1680,
              1680,
              1680,
              1680,
              1680,
              1680,
              1680,
              1680,
              1680,
              1680,
              1680,
              1680,
              1680,
              1680,
              1680,
              1680
            ],
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
            type: "column",
            name: "PETRONAS",
            data: [
              [1, 0],
              [5, 90],
              [10, 140],
              [15, 0],
              [20, 250],
              [25, 0],
              [1, 0],
              [5, 0],
              [10, 0],
              [15, 0],
              [20, 0],
              [25, 0],
              [30, 0],
              [1, 0],
              [5, 0],
              [10, 0],
              [15, 0],
              [20, 0],
              [25, 0],
              [30, 0],
              [1, 0],
              [5, 0],
              [10, 0],
              [15, 0],
              [20, 0],
              [25, 0],
              [30, 0],
              [1, 0],
              [5, 0],
              [10, 0],
              [15, 0],
              [20, 0],
              [25, 0],
              [30, 0],
              [1, 0],
              [5, 0],
              [10, 0],
              [15, 0],
              [20, 0],
              [25, 0],
              [30, 0]
            ],
            marker: {
              enabled: true
            },
            color: "#009E8E",
            visible: true,
            zIndex: 250
          },
          {
            type: "column",
            name: "EMEPMI",
            data: [
              [1, 0],
              [5, 0],
              [10, 0],
              [15, 0],
              [20, 0],
              [25, 320],
              [1, 0],
              [5, 0],
              [10, 0],
              [15, 0],
              [20, 0],
              [25, 0],
              [30, 0],
              [1, 0],
              [5, 0],
              [10, 0],
              [15, 0],
              [20, 0],
              [25, 0],
              [30, 0],
              [1, 0],
              [5, 0],
              [10, 0],
              [15, 0],
              [20, 0],
              [25, 0],
              [30, 0],
              [1, 0],
              [5, 0],
              [10, 0],
              [15, 0],
              [20, 0],
              [25, 0],
              [30, 0],
              [1, 0],
              [5, 0],
              [10, 0],
              [15, 0],
              [20, 0],
              [25, 0],
              [30, 0]
            ],
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
            data: [
              {
                x: 1,
                y: -1429.830184,
                line: "netPlanned",
                level: "bottom",
                summary: {
                  DateLiftingImpact: "01 February 20",
                  liftIDLiftingImpact: "PT8020",
                  volumeLiftingImpact: "-1829.830184 kbd"
                }
              },
              {
                x: 1,
                y: -1762.356043,
                line: "grossPlanned",
                level: "bottom",
                summary: {
                  DateLiftingImpact: "01 February 20",
                  liftIDLiftingImpact: "PT8020",
                  volumeLiftingImpact: "-2162.3560429999998 kbd"
                }
              },
              {
                x: 1,
                y: 7068.952920000002,
                line: "netActual",
                level: "top",
                summary: {
                  DateLiftingImpact: "01 February 20",
                  liftIDLiftingImpact: "PT8020",
                  volumeLiftingImpact: "5388.952920000002 kbd"
                }
              },
              {
                x: 1,
                y: 7987.4491080000025,
                line: "grossActual",
                level: "top",
                summary: {
                  DateLiftingImpact: "01 February 20",
                  liftIDLiftingImpact: "PT8020",
                  volumeLiftingImpact: "6307.4491080000025 kbd"
                }
              },
              {
                x: 5,
                y: 308.942257,
                line: "grossPlanned",
                level: "bottom",
                summary: {
                  DateLiftingImpact: "05 February 20",
                  liftIDLiftingImpact: "PT8023",
                  volumeLiftingImpact: "-91.05774300000002 kbd"
                }
              },
              {
                x: 5,
                y: 7068.952920000002,
                line: "netActual",
                level: "top",
                summary: {
                  DateLiftingImpact: "05 February 20",
                  liftIDLiftingImpact: "PT8023",
                  volumeLiftingImpact: "5388.952920000002 kbd"
                }
              },
              {
                x: 5,
                y: 7987.4491080000025,
                line: "grossActual",
                level: "top",
                summary: {
                  DateLiftingImpact: "05 February 20",
                  liftIDLiftingImpact: "PT8023",
                  volumeLiftingImpact: "6307.4491080000025 kbd"
                }
              },
              {
                x: 10,
                y: 3903.148716,
                line: "netPlanned",
                level: "top",
                summary: {
                  DateLiftingImpact: "10 February 20",
                  liftIDLiftingImpact: "PT8026",
                  volumeLiftingImpact: "2223.148716 kbd"
                }
              },
              {
                x: 10,
                y: 2919.774657,
                line: "grossPlanned",
                level: "top",
                summary: {
                  DateLiftingImpact: "10 February 20",
                  liftIDLiftingImpact: "PT8026",
                  volumeLiftingImpact: "1239.774657 kbd"
                }
              },
              {
                x: 15,
                y: 4663.986416000001,
                line: "netPlanned",
                level: "top",
                summary: {
                  DateLiftingImpact: "15 February 20",
                  liftIDLiftingImpact: "",
                  volumeLiftingImpact: "2983.9864160000006 kbd"
                }
              },
              {
                x: 15,
                y: 4767.523357,
                line: "grossPlanned",
                level: "top",
                summary: {
                  DateLiftingImpact: "15 February 20",
                  liftIDLiftingImpact: "",
                  volumeLiftingImpact: "3087.523357 kbd"
                }
              },
              {
                x: 20,
                y: 4663.986416000001,
                line: "netPlanned",
                level: "top",
                summary: {
                  DateLiftingImpact: "20 February 20",
                  liftIDLiftingImpact: "PT8031",
                  volumeLiftingImpact: "2983.9864160000006 kbd"
                }
              },
              {
                x: 20,
                y: 4767.523357,
                line: "grossPlanned",
                level: "top",
                summary: {
                  DateLiftingImpact: "20 February 20",
                  liftIDLiftingImpact: "PT8031",
                  volumeLiftingImpact: "3087.523357 kbd"
                }
              },
              {
                x: 25,
                y: 4767.523357,
                line: "grossPlanned",
                level: "top",
                summary: {
                  DateLiftingImpact: "25 February 20",
                  liftIDLiftingImpact: "ET2697",
                  volumeLiftingImpact: "3087.523357 kbd"
                }
              }
            ],
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