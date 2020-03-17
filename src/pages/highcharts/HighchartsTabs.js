import React, { useState } from 'react';
import { Container, TabContent, TabPane, Nav, NavItem, NavLink, Row, Col } from 'reactstrap';
import classnames from 'classnames';

import DashboardHOC from './dashboard/DashboardHOC';
import Pies from './pies';
import Bars from './bars';
import Lines from './lines';
import Combo from './combo';

const HighchartsTabs = (props) => {
  const [activeTab, setActiveTab] = useState('1');

  const toggle = tab => {
    if(activeTab !== tab) setActiveTab(tab);
  }

  return (
    <div style={{paddingTop: 5}}>
      <Nav tabs style={{paddingLeft: 10}}>
        <NavItem>
          <NavLink
            className={classnames({ active: activeTab === '1' })}
            onClick={() => { toggle('1'); }}
          >
            Dashboard
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            className={classnames({ active: activeTab === '2' })}
            onClick={() => { toggle('2'); }}
          >
            Pie/Donuts
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            className={classnames({ active: activeTab === '3' })}
            onClick={() => { toggle('3'); }}
          >
            Bars/Columns
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            className={classnames({ active: activeTab === '4' })}
            onClick={() => { toggle('4'); }}
          >
            Lines/Areas
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            className={classnames({ active: activeTab === '5' })}
            onClick={() => { toggle('5'); }}
          >
            Combo
          </NavLink>
        </NavItem>
      </Nav>
      <TabContent activeTab={activeTab} style={{padding: 5, background: 'white', minHeight: '97vh'}}>
        <TabPane tabId="1">
          <Row>
            <Col sm="12">
              <DashboardHOC/>
            </Col>
          </Row>
        </TabPane> 
        
          <TabPane tabId="2">
          <Container fluid className="customTab">
            <Pies />
            </Container>  
          </TabPane>
          
          <TabPane tabId="3">
          <Container fluid className="customTab">
            <Bars/>
            </Container>  
          </TabPane>   
          <TabPane tabId="4">
          <Container fluid className="customTab">
            <Lines/>
            </Container>  
          </TabPane>     
          <TabPane tabId="5">
          <Container fluid className="customTab">
            <Combo />
            </Container>  
          </TabPane>     
      </TabContent>
    </div>
  );
}

export default HighchartsTabs;