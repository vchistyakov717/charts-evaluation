import React, { useState } from 'react';
import { Container, TabContent, TabPane, Nav, NavItem, NavLink, Row, Col } from 'reactstrap';
import classnames from 'classnames';

import XYFrameExamples from './XYFrame';
import OrdinalFrameExamples from './OrdinalFrame';
import NetworkFrameExamples from './NetworkFrame';
const SemioticTabs = (props) => {
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
            XYFrame
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            className={classnames({ active: activeTab === '2' })}
            onClick={() => { toggle('2'); }}
          >
            OrdinalFrame
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            className={classnames({ active: activeTab === '3' })}
            onClick={() => { toggle('3'); }}
          >
            NetworkFrame
          </NavLink>
        </NavItem>
      </Nav>
      <TabContent activeTab={activeTab} style={{padding: 5, background: 'white', minHeight: '97vh'}}>
        <TabPane tabId="1">
          <Row>
            <Col sm="12">
              <XYFrameExamples/>
            </Col>
          </Row>
        </TabPane> 
        
          <TabPane tabId="2">
          <Container fluid className="customTab">
            <OrdinalFrameExamples />
            </Container>  
          </TabPane>
          
          <TabPane tabId="3">
          <Container fluid className="customTab">
            <NetworkFrameExamples/>
            </Container>  
          </TabPane>     
      </TabContent>
    </div>
  );
}

export default SemioticTabs;