import React, { useState, useEffect, useRef } from "react";
import Highcharts from "highcharts/highstock";
import HighchartsReact from "highcharts-react-official";
import { head, last, isEmpty } from "lodash";

Highcharts.seriesType(
  "shadedlinenegative",
  "line",
  {},
  {
    drawGraph() {
      Highcharts.seriesTypes.line.prototype.drawGraph.apply(this);
      const series = this;
      const { graphPath } = series;
      if (isEmpty(graphPath)) return;
      // this.drawWarningArea.call(series);
      this.drawNegativeArea.call(series);
    },
    drawNegativeArea() {
      const series = this;
      const { chart, graphPath: negativeLine } = series;
      if (isEmpty(negativeLine) || isEmpty(series.points)) return;

      const { renderer } = chart;
      const firstPoint = head(series.points);
      const lastPoint = last(series.points);
      const negativeArea = [
        ...negativeLine,
        "L",
        lastPoint.plotX,
        chart.plotSizeY,
        "L",
        firstPoint.plotX,
        chart.plotSizeY
      ];
      if (!series.shadePathNegative) {
        const shadePath = renderer
          .path(negativeArea)
          .addClass("shade-negative")
          .add(series.group);

        series.shadePathNegative = shadePath;
      } else {
        series.shadePathNegative.animate({
          d: negativeArea
        });
      }
    }
  }
);

const options = {
  chart: {
    zoomType: "x"
  },
  series: [
    {
      type: "shadedlinenegative",
      data: [3, 1, 3, 3, 5, 1, 4, 6, 4, 5, 5]
    },
    {
      data: [1, 2, 1, 4, 3, 6, 7, 3, 8, 6, 9]
    }
  ],
  stockTools: false,
  rangeSelector: false,
  navigator: false,
  scrollbar: false,
  title: false,
  credits: false
};

const StockChartsSpline = () => {
  const chartRef = useRef(null);
  const [chartData, setData] = useState([]);
  // useEffect(() => {
  //   fetch(
  //     "https://cdn.jsdelivr.net/gh/highcharts/highcharts@v7.0.0/samples/data/large-dataset.json"
  //   ).then(function(response) {
  //     response.json().then(function(data) {
  //       chartRef.current.chart.series[0].setData(data.data);
  //     });
  //   });
  // }, []);
  return (
    <>
      <p>{`Data Length = ${chartData.length}`}</p>
      <HighchartsReact
        ref={chartRef}
        highcharts={Highcharts}
        constructorType={"stockChart"}
        options={options}
      />
    </>
  );
};

export default StockChartsSpline;