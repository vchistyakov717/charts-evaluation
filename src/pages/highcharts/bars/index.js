import React, { Fragment } from 'react';
import { Card, CardBody, Row, Col } from 'reactstrap';

import Highcharts from "highcharts";
import HcMore from "highcharts/highcharts-more";
import HighchartsReact from "highcharts-react-official";

import cloneDeep from 'lodash/cloneDeep';

HcMore(Highcharts);
require("highcharts/highcharts-3d")(Highcharts);

const Bars = (props) => {

    const categories = [
        'Norway',
        'United States',
        'Germany',
        'Canada',
        'Austria',
        'Sweden',
        'Switzerland',
        'Russia',
        'Netherlands',
        'Finland'
      ];

      const series = [
        {
          name: "Gold medals",
          data: [132, 105, 92, 73, 64, 57, 55, 47, 45, 43]
        },
        {
          name: "Silver medals",
          data: [125, 110, 86, 64, 81, 46, 46, 38, 44, 63]
        },
        {
          name: "Bronze medals",
          data: [111, 90, 60, 62, 87, 55, 52, 35, 41, 61]
        }
      ];

      let basicOptions = {
        colors: ["#FFD700", "#C0C0C0", "#CD7F32"],
        chart: {
          type: "column"
        },
        title: {
          text: ""
        },
        tooltip: {
          outside: true
        },
        pane: {
          size: "85%",
          endAngle: 270
        },
        xAxis: {
          crosshair: true,
          categories: categories
        },
        yAxis: {
          lineWidth: 0,
          tickInterval: 25,
          reversedStacks: false,
          endOnTick: true,
          showLastLabel: true
        },
        plotOptions: {
          column: {
            borderWidth: 0,
            pointPadding: 0,
            groupPadding: 0.15
          }
        },
        series: series
      };

      //copy of basicOptions
      let optionsPolar = cloneDeep(basicOptions);
      optionsPolar.plotOptions.column.stacking = "normal";
      optionsPolar.chart.polar = true;
      optionsPolar.chart.inverted = true;
      optionsPolar.xAxis =  {
        tickInterval: 1,
        labels: {
          align: "right",
          useHTML: true,
          allowOverlap: true,
          step: 1,
          y: 4,
          style: {
            fontSize: "12px"
          }
        },
        lineWidth: 0,
        categories: categories
      };

      //copy of basicOptions
      let optionsColumn = cloneDeep(basicOptions);

      let optionsColumnStacking = cloneDeep(optionsColumn);
      optionsColumnStacking.plotOptions.column.stacking = "normal";
      
      //copy of basicOptions
      let optionsColumn3D = cloneDeep(basicOptions);
      optionsColumn3D.chart.options3d = {
        enabled: true,
        alpha: 25,
        beta: 10
      };

      //copy of basicOptions
      let optionsBar = cloneDeep(basicOptions);
      optionsBar.chart.inverted = true;

      let optionsBarStacking = cloneDeep(optionsBar);
      optionsBarStacking.plotOptions.column.stacking = "normal";

      const optionsFruits = {
        title: {
          text: ""
        },
        xAxis: {
          categories: ["Apples", "Oranges", "Pears", "Grapes", "Bananas"]
        },
        credits: {
          enabled: false
        },
        series: [
          {
            name: "John",
            data: [5, 3, 4, 7, 2],
            type: "column"
          },
          {
            name: "Jane",
            data: [2, -2, -3, 2, 1],
            type: "column"
          },
          {
            name: "Joe",
            data: [3, 4, 4, -2, 5],
            type: "column"
          }
        ]
      };
  
    return (
      <Fragment>
        <Row>
            <Col sm="4">
                <Card body style={{minHeight: '350px'}}>
                  <CardBody><HighchartsReact highcharts={Highcharts} options={optionsPolar} /></CardBody>
                </Card>
            </Col>
            <Col sm="8">
                <Card body style={{minHeight: '350px'}}>
                  <CardBody>
                  <HighchartsReact highcharts={Highcharts} options={optionsColumn} />
                  </CardBody>
                </Card>
            </Col>
        </Row>
        <div  style={{height: 10}}/>
        <Row>
            <Col sm="4">
                <Card body style={{minHeight: '350px'}}>
                  <CardBody><HighchartsReact highcharts={Highcharts} options={optionsBar} /></CardBody>
                </Card>
            </Col>
            <Col sm="4">
                <Card body style={{minHeight: '350px'}}>
                  <CardBody><HighchartsReact highcharts={Highcharts} options={optionsColumnStacking} /></CardBody>
                </Card>
            </Col>
            <Col sm="4">
                <Card body style={{minHeight: '350px'}}>
                  <CardBody><HighchartsReact highcharts={Highcharts} options={optionsBarStacking} /></CardBody>
                </Card>
            </Col>
        </Row>
        <div  style={{height: 10}}/>
            <Row>
              <Col sm="6">
                <Card body style={{minHeight: '350px'}}>
                  <CardBody><HighchartsReact highcharts={Highcharts} options={optionsFruits} /></CardBody>
                </Card>
              </Col>
              <Col sm="6">
                <Card body style={{minHeight: '350px'}}>
                  <CardBody><HighchartsReact highcharts={Highcharts} options={optionsColumn3D} /></CardBody>
                </Card>
              </Col>
            </Row>
      </Fragment>
    );
  }
  
  export default Bars;