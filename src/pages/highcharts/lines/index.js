import React, { Fragment } from 'react';
import { Card, CardBody, Row, Col } from 'reactstrap';

import LineOne from './LineOne';
import LineTwo from './LineTwo';
// import LineThree from './LineThree';
import LineFour from './LineFour';
import LineFive from './LineFive';
import Areaspline from './AreaSpline';


export default function Combo(props) {
  
    return (
      <Fragment>
        <Row>
            <Col sm="4">
                <Card body style={{minHeight: '350px'}}>
                  <CardBody><Areaspline/></CardBody>
                </Card>
            </Col>
            <Col sm="8">
                <Card body style={{minHeight: '350px'}}>
                  <CardBody>
                    <LineOne/>
                  </CardBody>
                </Card>
            </Col>
        </Row>
        <div  style={{height: 10}}/>
        <Row>
           {/*} <Col sm="5">
                <Card body>
                  <CardBody><LineThree/></CardBody>
                </Card>
    </Col> */}
            <Col sm="12">
                <Card body>
                  <CardBody><LineTwo/></CardBody>
                </Card>
            </Col>
        </Row>
        <div  style={{height: 10}}/>
            <Row>
              <Col sm="6">
                <Card body style={{minHeight: '350px'}}>
                  <CardBody><LineFour/></CardBody>
                </Card>
              </Col>
              <Col sm="6">
                <Card body style={{minHeight: '350px'}}>
                  <CardBody><LineFive/></CardBody>
                </Card>
              </Col>
            </Row>
      </Fragment>
    );
  }
