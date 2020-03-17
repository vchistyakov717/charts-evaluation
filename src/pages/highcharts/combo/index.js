import React, { Fragment } from 'react';
import { Card, CardBody, Row, Col } from 'reactstrap';

import ComboOne from './ComboOne';
import ComboTwo from './ComboTwo';
import Areaspline from './ComboThree';
import ComboFour from './ComboFour';
import ComboFive from './ComboFive';
import ComboSix from './ComboSix';
import Stream from './ComboSeven';
import ComboEight from './ComboEight';

export default function Combo(props) {
  
    return (
      <Fragment>
        <Row>
            <Col sm="4">
                <Card body style={{minHeight: '350px'}}>
                  <CardBody><ComboTwo/></CardBody>
                </Card>
            </Col>
            <Col sm="8">
                <Card body style={{minHeight: '350px'}}>
                  <CardBody>
                    <ComboOne/>
                  </CardBody>
                </Card>
            </Col>
        </Row>
        <div  style={{height: 10}}/>
        <Row>
            <Col sm="5">
                <Card body>
                  <CardBody><Areaspline/></CardBody>
                </Card>
            </Col>
            <Col sm="7">
                <Card body>
                  <CardBody><ComboFour/></CardBody>
                </Card>
            </Col>
        </Row>
        <div  style={{height: 10}}/>
            <Row>
              <Col sm="6">
                <Card body style={{minHeight: '350px'}}>
                  <CardBody><ComboFive/></CardBody>
                </Card>
              </Col>
              <Col sm="6">
                <Card body style={{minHeight: '350px'}}>
                  <CardBody><ComboSix/></CardBody>
                </Card>
              </Col>
            </Row>
            <div  style={{height: 10}}/>
            <Row>
              <Col sm="6">
                <Card body style={{minHeight: '350px'}}>
                  <CardBody style={{background: '#252f38'}}><Stream/></CardBody>
                </Card>
              </Col>
              <Col sm="6">
                <Card body style={{minHeight: '350px'}}>
                  <CardBody><ComboEight/></CardBody>
                </Card>
              </Col>
            </Row>
      </Fragment>
    );
  }
