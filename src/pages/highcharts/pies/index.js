import React, { useState, Fragment } from 'react';
import { Card, Button, CardTitle, CardBody, Row, Col } from 'reactstrap';

import SimpleDonut from './SimpleDonut';
import SolidGauge from './SolidGauge';
import Simple3dPie from './Simple3dPie';
import Sunburst from './Sunburst';
import Semigauge from './SemiGauge';
import VariablePie from './VariablePie';
import CesarGauge from './Cesar';

const Pies = (props) => {
    const [randomNumber, setRendomNumber] = useState('2');
  
    const update = () => {
      setRendomNumber(Math.random());
    }
  
    return (
      <Fragment>
        <Row>
            <Col sm="4">
                <Card body style={{minHeight: '350px'}}>
                  <CardTitle>Simple Donut</CardTitle>
                  <CardBody><SimpleDonut/></CardBody>
                </Card>
            </Col>
            <Col sm="8">
                <Card body style={{minHeight: '350px'}}>
                  <CardTitle>Semi Gauge</CardTitle>
                  <CardBody>
                    <Semigauge value={randomNumber}/>
                    <Button onClick={update}>Update</Button>
                  </CardBody>
                </Card>
            </Col>
        </Row>
        <div  style={{height: 10}}/>
        <Row>
            <Col sm="4">
                <Card body style={{minHeight: '350px'}}>
                  <CardTitle>Variable Pie</CardTitle>
                  <CardBody><VariablePie/></CardBody>
                </Card>
            </Col>
            <Col sm="4">
                <Card body style={{minHeight: '350px'}}>
                  <CardTitle>Solid Gauge</CardTitle>
                  <CardBody><SolidGauge/></CardBody>
                </Card>
            </Col>
            <Col sm="4">
                <Card body style={{minHeight: '350px'}}>
                  <CardTitle>Simple 3D Pie</CardTitle>
                  <CardBody><Simple3dPie/></CardBody>
                </Card>
            </Col>
        </Row>
        <div  style={{height: 10}}/>
            <Row>
              <Col sm="4">
                <Card body style={{minHeight: '350px'}}>
                  <CardTitle>Sunburst</CardTitle>
                  <CardBody><Sunburst/></CardBody>
                </Card>
              </Col>
              <Col sm="4">
                <Card body style={{minHeight: '350px'}}>
                  <CardTitle>Cesar</CardTitle>
                  <CardBody><CesarGauge/></CardBody>
                </Card>
              </Col>
            </Row>
      </Fragment>
    );
  }
  
  export default Pies;