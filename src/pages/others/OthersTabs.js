import React, { useState } from 'react';
import { Container, TabContent, TabPane, Nav, NavItem, NavLink, Row, Col } from 'reactstrap';
import classnames from 'classnames';

import TauChartsExamples from './taucharts';

const OthersTabs = (props) => {
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
            TauCharts
          </NavLink>
        </NavItem>
        
      </Nav>
      <TabContent activeTab={activeTab} style={{padding: 5, background: 'white', minHeight: '97vh'}}>
        <TabPane tabId="1">
          <Row>
            <Col sm="12">
              <TauChartsExamples/>
            </Col>
          </Row>
        </TabPane> 
        
      </TabContent>
    </div>
  );
}

export default OthersTabs;