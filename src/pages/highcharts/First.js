import React from 'react';
import Highcharts from "highcharts/highstock";
import HighchartsReact from "highcharts-react-official";

import ChartCard from "../../components/layout/ChartCard";

const options = {
  title: {
    text: "My stock chart"
  },
  series: [
    {
      data: [1, 2, 1, 4, 3, 6, 7, 3, 8, 6, 9]
    }
  ]
};



const First = (props) => {
  return (
    <ChartCard {...props}>
      <HighchartsReact
      highcharts={Highcharts}
      constructorType={"stockChart"}
      options={options}
    />
    </ChartCard>
  )
}

export default First