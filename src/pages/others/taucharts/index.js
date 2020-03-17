import React from 'react';
import { Container, Card, CardBody, Row, Col } from 'reactstrap';

import './tauchart.min.css';
import './styles.css';

import ExampleOne from './ExampleOne';
import ExampleTwo from './ExampleTwo';
import ExampleThree from './ExampleThree';
import ExampleFour from './ExampleFour';


export default function App(props) {
  
    return (
        <Container fluid className="customTab">
        <Row>
            <Col sm="4">
                <Card body style={{minHeight: '350px'}}>
                  <CardBody>
                      <ExampleOne/>
                  </CardBody>
                </Card>
            </Col>
            <Col sm="8">
                <Card body style={{minHeight: '350px'}}>
                  <CardBody>
                    <ExampleTwo/>
                  </CardBody>
                </Card>
            </Col>
        </Row>
        <div  style={{height: 10}}/>
        <Row>
            <Col sm="4">
                <Card body>
                  <CardBody>
                    <ExampleFour/>
                  </CardBody>
                </Card>
            </Col>
            <Col sm="8">
                <Card body>
                  <CardBody>
                    <ExampleThree/>
                  </CardBody>
                </Card>
            </Col>
        </Row>
        <div  style={{height: 10}}/>
            <Row>
              <Col sm="12">
                <Card body style={{minHeight: '350px'}}>
                  <CardBody>
                      
                  </CardBody>
                </Card>
              </Col>
            </Row>
            <div  style={{height: 10}}/>
            <Row>
              <Col sm="6">
                <Card body style={{minHeight: '350px'}}>
                  <CardBody>
                  
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
      </Container>
    );
  }
