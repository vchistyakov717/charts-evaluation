import React from 'react';
import { Container, Card, CardBody, Row, Col } from 'reactstrap';

import LineChart from './LineChart';
import AreaChart from './AreaChart';
import Scatterplot from'./Scatterplot';
import Contours from'./Contours';
import TrendLines from './TrendLines';
import MarginalChart from './MarginalChart';
import Candlestick from './Candlestick';

export default function App(props) {
  
    return (
      <Container fluid className="customTab">
        <Row>
            <Col sm="4">
                <Card body style={{minHeight: '350px'}}>
                  <CardBody>
                      <LineChart/>
                  </CardBody>
                </Card>
            </Col>
            <Col sm="8">
                <Card body style={{minHeight: '350px'}}>
                  <CardBody>
                    <AreaChart/>                 
                  </CardBody>
                </Card>
            </Col>
        </Row>
        <div  style={{height: 10}}/>
        <Row>
            <Col sm="12">
                <Card body>
                  <CardBody>
                    <Scatterplot/>
                  </CardBody>
                </Card>
            </Col>
        </Row>
        <div  style={{height: 10}}/>
            <Row>
              <Col sm="6">
                <Card body style={{minHeight: '350px'}}>
                  <CardBody>
                      <Contours/>
                  </CardBody>
                </Card>
              </Col>
              <Col sm="6">
                <Card body style={{minHeight: '350px'}}>
                  <CardBody>
                      <TrendLines/>
                  </CardBody>
                </Card>
              </Col>
            </Row>
            <div  style={{height: 10}}/>
            <Row>
              <Col sm="6">
                <Card body style={{minHeight: '350px'}}>
                  <CardBody>
                      <MarginalChart/>
                  </CardBody>
                </Card>
              </Col>
              <Col sm="6">
                <Card body style={{minHeight: '350px'}}>
                  <CardBody>
                      <Candlestick/>
                  </CardBody>
                </Card>
              </Col>
            </Row>
      </Container>
    );
  }
