import React from "react";
import { render } from "react-dom";
// Import Highcharts
import Highcharts from "highcharts/highstock";
import exporting from "highcharts/modules/exporting";
import data from "highcharts/modules/data";
import exportData from "highcharts/modules/export-data";
//import HighchartsReact from "./HighchartsReact.js";
import HighchartsReact from "highcharts-react-official";

import { csv } from '../../../data/tmp/data';

exporting(Highcharts);
data(Highcharts);
exportData(Highcharts);

(function(H) {
  H.Legend.prototype.setItemEvents = function(item, legendItem, useHTML) {
    var legend = this,
      boxWrapper = legend.chart.renderer.boxWrapper,
      activeClass =
        "highcharts-legend-" + (item.series ? "point" : "series") + "-active",
      hasLinkedSeries = function(item) {
        return item.linkedSeries && item.linkedSeries.length ? true : false;
      },
      setLinkedSeriesState = function(item, state) {
        item.linkedSeries.forEach(function(elem) {
          elem.setState(state);
        });
      };

    // Set the events on the item group, or in case of useHTML, the item itself (#1249)
    (useHTML ? legendItem : item.legendGroup)
      .on("mouseover", function() {
        if (!item.visible) {
          var legendToggle = item.options.legendToggle;
          if (legendToggle) {
            item.setVisible(true);
            item.legendHovered = true;
            item.setVisible(true);
          }
        }
        if (item.visible) {
          item.setState("hover");
          if (hasLinkedSeries(item)) {
            setLinkedSeriesState(item, "hover");
          }
          boxWrapper.addClass(activeClass);
          /*= if (build.classic) { =*/
          legendItem.css(legend.options.itemHoverStyle);
          /*= } =*/
        }
      })
      .on("mouseout", function() {
        if (item.visible) {
          var legendToggle = item.options.legendToggle;
          if (legendToggle && !item.stayVisible) {
            item.setVisible(true);
            item.legendHovered = false;
            item.setVisible(false);
          }
        }
        /*= if (build.classic) { =*/
        legendItem.css(
          H.merge(item.visible ? legend.itemStyle : legend.itemHiddenStyle)
        );
        /*= } =*/
        boxWrapper.removeClass(activeClass);
        if (hasLinkedSeries(item)) {
          setLinkedSeriesState(item);
        }
        item.setState();
      })
      .on("click", function(event) {
        item.stayVisible = H.defined(item.stayVisible)
          ? !item.stayVisible
          : true;
        var strLegendItemClick = "legendItemClick",
          fnLegendItemClick = function() {
            if (item.setVisible) {
              item.setVisible();
            }
            if (item.legendHovered) {
              item.setVisible(true);
            }
          };

        // Pass over the click/touch event. #4.
        event = {
          browserEvent: event
        };

        // click the name or symbol
        if (item.firePointEvent) {
          // point
          item.firePointEvent(strLegendItemClick, event, fnLegendItemClick);
        } else {
          H.fireEvent(item, strLegendItemClick, event, fnLegendItemClick);
        }
      });
  };
})(Highcharts);

const options = {
  title: {
    text: "Velocity & Gap Risk"
  },
  subtitle: {
    text: ""
  },
  exporting: {
    buttons: {
      contextButton: {
        menuItems: ["printChart", "separator", "downloadPNG", "downloadJPEG"]
      }
    }
  },
  chart: {
    polar: false,
    zoomType: "x"
  },
  series: [
    {
      showInNavigator: true,
      color: "#212121",
      legendName: "H Price"
    },
    {
      showInNavigator: true,
      color: "#7f00ff",
      legendName: "H Trigger"
    },
    {
      color: "#0000FF",
      borderWidth: "1",
      groupPadding: 0.2,
      legendName: "D Trigger"
    },
    {
      color: "#00FF00",
      borderWidth: "1",
      legendName: "W Trigger"
    },
    {
      color: "#FF0000",
      borderWidth: "1",
      legendName: "M Trigger"
    },
    {
      legendToggle: true,
      visible: false,
      type: "column",
      yAxis: 1,
      color: "#7f00ff",
      borderWidth: "1",
      legendName: "H Velocity"
    },
    {
      visible: false,
      legendToggle: true,
      type: "column",
      yAxis: 1,
      color: "#0000FF",
      borderWidth: "1",
      legendName: "D Velocity"
    },
    {
      visible: false,
      legendToggle: true,
      type: "column",
      yAxis: 1,
      color: "#00FF00",
      borderWidth: "1",
      legendName: "W Velocity"
    },
    {
      visible: false,
      legendToggle: true,
      type: "column",
      yAxis: 1,
      color: "#FF0000",
      legendName: "M Velocity"
    }
  ],
  time: {
    useUTC: false
  },
  plotOptions: {
    column: {
      grouping: false,
      turboThreshold: 0,
      opacity: 0.6
    },

    line: {
      tooltip: {
        changeDecimals: 2,
        valueDecimals: 2,
        valuePrefix: ""
      }
    },

    series: {
      animation: false
    }
  },
  xAxis: {
    minPadding: 0,
    maxPadding: 0,
    overscroll: 0,
    ordinal: true,
    title: {
      text: null
    },
    labels: {
      overflow: "justify"
    },
    showLastLabel: true,
    type: "datetime",
    categories: null,
    startOnTick: false,
    endOnTick: false
  },
  navigator: {
    series: {
      type: "line"
    }
  },
  yAxis: [
    {
      labels: {
        y: -2,
        format: "{value} USD"
      },
      opposite: false,
      showLastLabel: true,
      title: {
        text: "Trigger and Gap Risk Levels"
      },
      showFirstLabel: false,
      showEmpty: true,
      maxRange: 3000,
      maxPadding: 0
    },
    {
      labels: {
        y: -2
      },
      showLastLabel: false,
      title: {
        text: "Velocity"
      },
      visible: true,
      resize: {
        enabled: false
      },
      opposite: true,
      offset: 0
    }
  ],
  tooltip: {
    changeDecimals: 2,
    shared: true,
    split: true
  },
  lang: {
    thousandsSep: " ,"
  },
  legend: {
    enabled: true,
    verticalAlign: "bottom",
    labelFormatter: function() {
      return this.options.legendName;
    }
  },
  credits: {
    enabled: false
  },
  colors: [
    "#0000FF",
    "#434348",
    "#90ed7d",
    "#f7a35c",
    "#8085e9",
    "#f15c80",
    "#e4d354",
    "#2b908f",
    "#f45b5b",
    "#0000FF"
  ],
  navigation: {
    bindingsClassName: "tools-container",
    events: {
      showPopup:
        'function(e){this.chart.indicatorsPopupContainer||(this.chart.indicatorsPopupContainer=document.getElementsByClassName("highcharts-popup-indicators")[0]),this.chart.annotationsPopupContainer||(this.chart.annotationsPopupContainer=document.getElementsByClassName("highcharts-popup-annotations")[0]),"indicators"===e.formType?this.chart.indicatorsPopupContainer.style.display="block":"annotation-toolbar"===e.formType&&(this.chart.activeButton||(this.chart.currentAnnotation=e.annotation,this.chart.annotationsPopupContainer.style.display="block")),this.popup&&(c=this.popup)}',
      closePopup:
        'function(){this.chart.annotationsPopupContainer.style.display="none",this.chart.currentAnnotation=null}',
      selectButton:
        'function(e){var t=e.button.className+" highcharts-active";e.button.classList.contains("highcharts-active")||(e.button.className=t,this.chart.activeButton=e.button)}',
      deselectButton:
        'function(e){e.button.classList.remove("highcharts-active"),this.chart.activeButton=null}'
    }
  },
  annotations: [],
  data: {
    csv: csv,
    googleSpreadsheetKey: false,
    googleSpreadsheetWorksheet: false,
    seriesMapping: [
      {
        x: 0,
        y: 1
      },
      {
        x: 0,
        y: 2
      },
      {
        x: 0,
        y: 3
      },
      {
        x: 0,
        y: 4
      },
      {
        x: 0,
        y: 5
      },
      {
        x: 0,
        y: 6
      },
      {
        x: 0,
        y: 7
      },
      {
        x: 0,
        y: 8
      },
      {
        x: 0,
        y: 9
      },
      {
        x: 0
      },
      {
        x: 0
      }
    ]
  }
};

export default class ComboTwo extends React.Component {
  render() {
    return (
        <HighchartsReact
          highcharts={Highcharts}
          options={options}
          ref="chartComponent1"
        />
    );
  }
}