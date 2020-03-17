import React from "react";
import HighchartsReact from "highcharts-react-official";

import Highcharts from "highcharts/highcharts.js";
import HCmore from "highcharts/highcharts-more.js";
import solidGauge from "highcharts/modules/solid-gauge.js";

HCmore(Highcharts);
solidGauge(Highcharts);

export default class Solidgauge extends React.PureComponent {
  constructor(props) {
    super(props);

    const { value } = props;

    this.state = {
      firstRender: true,
      chartOptions: {
        chart: {
          type: "solidgauge"
        },
        yAxis: {
          max: 3,
          min: 0
        },
        series: [
          {
            name: "series 1",
            data: [value]
          }
        ],
        pane: {
          center: ["50%", "85%"],
          size: "160%",
          startAngle: -90,
          endAngle: 90,
          background: [
            {
              backgroundColor: {
                stops: [[1, "#ececec"]]
              },
              innerRadius: "60%",
              outerRadius: "100%",
              shape: "arc",
              borderWidth: 0
            }
          ]
        }
      }
    };
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    const { value } = nextProps;

    if (prevState.firstRender) {
      return Object.assign({}, prevState, { firstRender: false });
    }

    return {
      firstRender: false,
      chartOptions: {
        title: {
            text: ''
          },
          credits: {
            enabled: false
          },
        series: [
          {
            data: [value]
          }
        ]
      }
    };
  }

  render() {
    const { chartOptions } = this.state;

    return (
      <HighchartsReact
        highcharts={Highcharts}
        containerProps={{
          style: {
            height: 362
          }
        }}
        options={chartOptions}
      />
    );
  }
}