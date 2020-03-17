import React from 'react';
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";

import ChartCard from "../../components/layout/ChartCard";
import config from "./config2";

const Second = (props) => {
  return (
    <ChartCard {...props}>
      <HighchartsReact highcharts={Highcharts} options={config} />
    </ChartCard>
  )
}

export default Second;