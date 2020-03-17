import React from "react";
import { Card, CardBody, CardHeader, CardTitle } from "reactstrap";

require('../../utils/cycle.js');

function ClientCard(props) {
  const { title } = props;
  return (
    <Card>
      <CardHeader>{title}</CardHeader>
      <CardBody style={{ minHeight: 400 }}>
        <CardTitle style={{ fontWeight: "900" }}>&nbsp;</CardTitle>
        {props.children}
      </CardBody>
    </Card>
  );
}

export default ClientCard;
