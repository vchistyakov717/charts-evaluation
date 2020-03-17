import React from 'react';
import { Container, Card, CardBody, Row, Col } from 'reactstrap';

export default function App(props) {
  
    return (
      <Container fluid className="customTab">
        <Row>
            <Col sm="4">
                <Card body style={{minHeight: '350px'}}>
                  <CardBody>
                      
                  </CardBody>
                </Card>
            </Col>
            <Col sm="8">
                <Card body style={{minHeight: '350px'}}>
                  <CardBody>
                                        
                  </CardBody>
                </Card>
            </Col>
        </Row>
        <div  style={{height: 10}}/>
        <Row>
            <Col sm="12">
                <Card body>
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
