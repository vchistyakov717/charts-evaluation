import React, { Fragment } from "react";
import PerfectScrollbar from "react-perfect-scrollbar";
import { Container, Row, Col } from "reactstrap";

import Header from "../Header";

function ChartsGrid(props) {
    const { data, title } = props;
    const layout = "col-12 col-sm-12 col-md-12 col-lg-6 col-xl-4 p-1";

    return (
      <Fragment>
        <Header className="header-content" />
        <Container fluid className="main-content pl-2 pr-2">
          <PerfectScrollbar>
            <Row className="no-gutters">
              {data.map((card, i) => (
                <Col key={i} className={layout}>
                  {card}
                </Col>
              ))}
            </Row>
          </PerfectScrollbar>
        </Container>
      </Fragment>
    );
}

export default ChartsGrid;
