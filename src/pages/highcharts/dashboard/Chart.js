import React from "react";
import Highcharts from "highcharts";
import HC_data from "highcharts/modules/data";
import HighchartsReact from "highcharts-react-official";
import { T0 } from "./charts/PieChart";
import { T1 } from "./charts/SimpleStockChart";
import { T2 } from "./charts/AjaxChartClickable";
import { T3 } from "./charts/Spline";
import { T4 } from "./charts/SugarChart";
import { T5 } from "./charts/RainChart";
import { T6 } from "./charts/AreaChart";

HC_data(Highcharts);

const options = { T0, T1, T2, T3, T4, T5, T6 };

class Chart extends React.Component {
  constructor(props) {
    super(props);
    this.setChartInstance = this.setChartInstance.bind(this);
    this.setSize = this.setSize.bind(this);
  }
  componentDidUpdate() {
    if (this.props.resize) {
      this.setSize();
      this.props.resizeDone();
    }
  }

  setChartInstance(chart) {
    console.log(chart);
    this.chart = chart;
  }
  setSize() {
    this.chart.setSize(null, null);
  }
  render() {
    return (
      <HighchartsReact
        highcharts={Highcharts}
        constructorType={"chart"}
        options={options[this.props.chartType]}
        callback={this.setChartInstance}
      />
    );
  }
}
export default Chart;
