import React from "react";
import Highcharts from "highcharts/highstock";
import HighchartsReact from "highcharts-react-official";

import { aaplStockPriceData } from '../../../data/tmp/data';

function Areaspline(props) {
  const options = {
    rangeSelector: {
      selected: 1
    },
    title: {
      text: 'Fincite chart',
    },
    credits: {
      enabled: false,
    },
    series: [{
      name: 'AAPL Stock Price',
      data: aaplStockPriceData,
      type: 'areaspline',
      threshold: null,
      tooltip: {
        valueDecimals: 2
      },
      lineColor: Highcharts.getOptions().colors[9],
      fillColor: {
        linearGradient: {
          x1: 0,
          y1: 0,
          x2: 0,
          y2: 1
        },
        stops: [
          [0, Highcharts.getOptions().colors[8]],
          [1, Highcharts.Color(Highcharts.getOptions().colors[9]).setOpacity(0).get('rgba')]
        ]
      }
    }],
  }
  return(
    <HighchartsReact
      highcharts={Highcharts}
      constructorType={'stockChart'}
      options={options}
    />
  )
}

export default Areaspline;