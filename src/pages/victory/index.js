import React, { Fragment } from 'react';
import { Card, CardBody, Row, Col } from 'reactstrap';

import ChartOne from './ChartOne';
import ChartTwo from './ChartTwo';
import ChartThree from './ScatterPlot';
import ChartFour from './ChartFour';

export default function App(props) {
  
    return (
      <Fragment>
        <Row style={{padding: 10}}>
            <Col sm="4">
                <Card body style={{minHeight: '350px'}}>
                  <CardBody>
                    <ChartOne/>
                  </CardBody>
                </Card>
            </Col>
            <Col sm="8">
                <Card body style={{minHeight: '350px'}}>
                  <CardBody>
                    <ChartTwo/>
                  </CardBody>
                </Card>
            </Col>
        </Row>
        <div style={{height: 10}}/>
        <Row style={{padding: 10}}>
            <Col sm="12">
                <Card body>
                  <CardBody>
                    <ChartThree/>
                  </CardBody>
                </Card>
            </Col>
        </Row>
        <div style={{height: 10}}/>
            <Row style={{padding: 10}}>
              <Col sm="6">
                <Card body style={{minHeight: '350px'}}>
                  <CardBody>
                    <ChartFour/>
                  </CardBody>
                </Card>
              </Col>
              <Col sm="6">
                <Card body style={{minHeight: '350px'}}>
                  <CardBody>
                      
                  </CardBody>
                </Card>
              </Col>
            </Row>
      </Fragment>
    );
  }
