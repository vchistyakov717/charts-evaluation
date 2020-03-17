import React from "react";
// Import Highcharts
import Highcharts from "highcharts";
//import HighchartsReact from "./HighchartsReact.min.js";
import HighchartsReact from "highcharts-react-official";
import axios from "axios";
import HC_more from "highcharts/highcharts-more"; //module
HC_more(Highcharts); //init module

export default class App extends React.Component {
  state = {
    webdata: []
  };

  async getData() {
    const response = await axios.get(
      "https://www.alphavantage.co/query?function=VWAP&symbol=MSFT&interval=15min&apikey=demo"
    );
    console.log(response.data);

    const rawSeries = response.data["Technical Analysis: VWAP"];
    const seriesData = Object.keys(rawSeries)
      .reverse()
      .map(timestamp => {
        return {
          x: new Date(timestamp).getTime(),
          y: rawSeries[timestamp]["VWAP"]
        };
      });
    return this.setState({ webdata: seriesData });
  }
  componentDidMount() {
    this.getData();
  }
  render() {
 
    const options = {
      chart: {
        zoomType: 'x'
      },
      title: {
        text: ''
      },
      credits: {
        enabled: false,
      },
      series: [
        {
          data: this.state.webdata.map(el => ({
            x: new Date(el.x).getTime(),
            y: Number(el.y)
          }))
        }
      ],
      xAxis: {
        type: "datetime"
      }
    };

    return (
      <HighchartsReact
        constructorType={"chart"}
        ref={this.chartComponent}
        highcharts={Highcharts}
        options={options}
      />
    );
  }
}
