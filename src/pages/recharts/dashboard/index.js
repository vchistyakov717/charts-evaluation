import React from 'react';
import { Container, Card, CardBody, Row, Col } from 'reactstrap';

import SimpleBarChart from './charts/BarChart';
import LineChart from './charts/LineChart';
import PieChart from './charts/PieChart';
import AreaChart from './charts/AreaChart';
import ScatterChart from './charts/ScatterChart';
import AnotherLineChart from './charts/AnotherLineChart';
import VerticalBarChart from './charts/VerticalBarChart';

export default function Combo(props) {
  
    return (
        <Container fluid className="customTab">
        <Row>
            <Col sm="4">
                <Card body style={{minHeight: '350px'}}>
                  <CardBody>
                      <SimpleBarChart/>
                  </CardBody>
                </Card>
            </Col>
            <Col sm="8">
                <Card body style={{minHeight: '350px'}}>
                  <CardBody>
                    <LineChart/>
                  </CardBody>
                </Card>
            </Col>
        </Row>
        <div  style={{height: 10}}/>
        <Row>
            <Col sm="5">
                <Card body>
                  <CardBody>
                      <ScatterChart/>
                  </CardBody>
                </Card>
            </Col>
            <Col sm="7">
                <Card body>
                  <CardBody>
                  <AreaChart/>
                </CardBody>
                </Card>
            </Col>
        </Row>
        <div  style={{height: 10}}/>
            <Row>
              <Col sm="12">
                <Card body style={{minHeight: '350px'}}>
                  <CardBody>
                      <AnotherLineChart/>
                  </CardBody>
                </Card>
              </Col>
            </Row>
            <div  style={{height: 10}}/>
            <Row>
              <Col sm="6">
                <Card body style={{minHeight: '350px'}}>
                  <CardBody>
                  <VerticalBarChart/>
                  </CardBody>
                </Card>
              </Col>
              <Col sm="6">
                <Card body style={{minHeight: '350px'}}>
                  <CardBody>
                      <PieChart/>
                  </CardBody>
                </Card>
              </Col>
            </Row>
      </Container>
    );
  }
