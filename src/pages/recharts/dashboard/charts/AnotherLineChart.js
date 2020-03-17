import React from "react";
import moment from "moment";

import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
  Brush
} from "recharts";
moment.locale("de-AT");

const ids = [1, 2, 3, 4, 5];
const colors = ["#8884d8", "#82ca9d", "#88419d", "#d49a96", "#fda724"];

function renderSwitch(value) {
  switch (value) {
    case 1:
      return "Schlecht";
    case 2:
      return "Naja";
    case 3:
      return "Ok";
    case 4:
      return "Gut";
    case 5:
      return "Super";
    default:
      return "Nicht definiert";
  }
}

const timestamp = moment()
  .year(2018)
  .month(6)
  .date(20);
const ONE_DAY = 86400000;

export default class App extends React.Component {
  /*state = { opacity: 1 };
  getInitialState() {
    return {
      opacity: {
        id_value: 1
      }
    };
  }

  handleMouseEnter(o) {
    const { dataKey } = o;
    const { opacity } = this.state;
    console.log("handleMouseEnter");

    this.setState({
      opacity: { ...opacity, [dataKey]: 0.5 }
    });
  }

  handleMouseLeave(o) {
    const { dataKey } = o;
    const { opacity } = this.state;

    this.setState({
      opacity: { ...opacity, [dataKey]: 1 }
    });
  }*/

  render() {
    //const { opacity } = this.state;
    return (
      <ResponsiveContainer
        maxWidth="auto"
        width="100%"
        minHeight={300}
        maxHeight={300}
      >
        <LineChart
          width={1000}
          height={600}
          margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
          data={[
            {
              name: "Ok",
              date: timestamp + ONE_DAY,
              "1_value": 3
            },
            {
              name: "Ok",
              date: timestamp + ONE_DAY,
              "5_value": 3
            },
            {
              name: "Schlecht",
              date: timestamp + 2 * ONE_DAY,
              "4_value": 1
            },
            {
              name: "Ok",
              date: timestamp + 2 * ONE_DAY,
              "3_value": 3
            },
            {
              name: "Naja",
              date: timestamp + 3 * ONE_DAY,
              "2_value": 2
            },
            {
              name: "Naja",
              date: timestamp + 3 * ONE_DAY,
              "4_value": 2
            },
            {
              name: "Super",
              date: timestamp + 3 * ONE_DAY,
              "1_value": 5
            },
            {
              name: "Gut",
              date: timestamp + 3 * ONE_DAY,
              "3_value": 4
            },
            {
              name: "Gut",
              date: timestamp + 3 * ONE_DAY,
              "5_value": 4
            },
            {
              name: "Schlecht",
              date: timestamp + 4 * ONE_DAY,
              "4_value": 1
            },
            {
              name: "Schlecht",
              date: timestamp + 4 * ONE_DAY,
              "5_value": 1
            },
            {
              name: "Gut",
              date: timestamp + 4 * ONE_DAY,
              "3_value": 4
            },
            {
              name: "Super",
              date: timestamp + 4 * ONE_DAY,
              "1_value": 5
            },
            {
              name: "Naja",
              date: timestamp + 5 * ONE_DAY,
              "2_value": 2
            },
            {
              name: "Ok",
              date: timestamp + 5 * ONE_DAY,
              "1_value": 3
            },
            {
              name: "Gut",
              date: timestamp + 5 * ONE_DAY,
              "3_value": 4
            },
            {
              name: "Ok",
              date: timestamp + 5 * ONE_DAY,
              "4_value": 3
            },
            {
              name: "Gut",
              date: timestamp + 5 * ONE_DAY,
              "5_value": 4
            },
            {
              name: "Naja",
              date: timestamp + 6 * ONE_DAY,
              "1_value": 2
            },
            {
              name: "Super",
              date: timestamp + 6 * ONE_DAY,
              "2_value": 5
            },
            {
              name: "Schlecht",
              date: timestamp + 6 * ONE_DAY,
              "3_value": 1
            },
            {
              name: "Naja",
              date: timestamp + 7 * ONE_DAY,
              "1_value": 2
            },
            {
              name: "Super",
              date: timestamp + 7 * ONE_DAY,
              "2_value": 5
            },
            {
              name: "Super",
              date: timestamp + 7 * ONE_DAY,
              "4_value": 5
            },
            {
              name: "Super",
              date: timestamp + 7 * ONE_DAY,
              "5_value": 5
            },
            {
              name: "Schlecht",
              date: timestamp + 7 * ONE_DAY,
              "3_value": 1
            },
            {
              name: "Naja",
              date: timestamp + 8 * ONE_DAY,
              "1_value": 2
            },
            {
              name: "Super",
              date: timestamp + 8 * ONE_DAY,
              "2_value": 5
            },
            {
              name: "Schlecht",
              date: timestamp + 8 * ONE_DAY,
              "3_value": 1
            },
            {
              name: "Super",
              date: timestamp + 9 * ONE_DAY,
              "2_value": 5
            },
            {
              name: "Super",
              date: timestamp + 9 * ONE_DAY,
              "4_value": 5
            },
            {
              name: "Super",
              date: timestamp + 9 * ONE_DAY,
              "5_value": 5
            },
            {
              name: "Schlecht",
              date: timestamp + 9 * ONE_DAY,
              "3_value": 1
            },
            {
              name: "Naja",
              date: timestamp + 9 * ONE_DAY,
              "1_value": 2
            },
            {
              name: "Super",
              date: timestamp + 10 * ONE_DAY,
              "2_value": 5
            },
            {
              name: "Schlecht",
              date: timestamp + 10 * ONE_DAY,
              "3_value": 1
            },
            {
              name: "Super",
              date: timestamp + 11 * ONE_DAY,
              "2_value": 5
            },
            {
              name: "Schlecht",
              date: timestamp + 12 * ONE_DAY,
              "3_value": 1
            },
            {
              name: "Super",
              date: timestamp + 12 * ONE_DAY,
              "2_value": 5
            },
            {
              name: "Schlecht",
              date: timestamp + 12 * ONE_DAY,
              "3_value": 1
            },
            {
              name: "Naja",
              date: timestamp + 13 * ONE_DAY,
              "4_value": 2
            },
            {
              name: "Ok",
              date: timestamp + 12 * ONE_DAY,
              "5_value": 3
            },
            {
              name: "Schlecht",
              date: timestamp + 13 * ONE_DAY,
              "3_value": 1
            },
            {
              name: "Super",
              date: timestamp + 13 * ONE_DAY,
              "2_value": 5
            },
            {
              name: "Schlecht",
              date: timestamp + 13 * ONE_DAY,
              "3_value": 1
            },
            {
              name: "Schlecht",
              date: timestamp + 14 * ONE_DAY,
              "3_value": 1
            },
            {
              name: "Ok",
              date: timestamp + 14 * ONE_DAY,
              "2_value": 3
            },
            {
              name: "Schlecht",
              date: timestamp + 14 * ONE_DAY,
              "3_value": 1
            },
            {
              name: "Super",
              date: timestamp + 14 * ONE_DAY,
              "4_value": 5
            },
            {
              name: "Schlecht",
              date: timestamp + 14 * ONE_DAY,
              "5_value": 1
            },
            {
              name: "Schlecht",
              date: timestamp + 15 * ONE_DAY,
              "3_value": 1
            },
            {
              name: "Super",
              date: timestamp + 15 * ONE_DAY,
              "2_value": 5
            },
            {
              name: "Schlecht",
              date: timestamp + 15 * ONE_DAY,
              "3_value": 1
            },
            {
              name: "Schlecht",
              date: timestamp + 16 * ONE_DAY,
              "3_value": 1
            },
            {
              name: "Super",
              date: timestamp + 16 * ONE_DAY,
              "2_value": 5
            },
            {
              name: "Ok",
              date: timestamp + 16 * ONE_DAY,
              "4_value": 3
            },
            {
              name: "Super",
              date: timestamp + 16 * ONE_DAY,
              "5_value": 5
            },
            {
              name: "Schlecht",
              date: timestamp + 16 * ONE_DAY,
              "3_value": 1
            },
            {
              name: "Super",
              date: timestamp + 17 * ONE_DAY,
              "3_value": 5
            },
            {
              name: "Ok",
              date: timestamp + 17 * ONE_DAY,
              "2_value": 3
            },
            {
              name: "Gut",
              date: timestamp + 17 * ONE_DAY,
              "4_value": 4
            },
            {
              name: "Super",
              date: timestamp + 17 * ONE_DAY,
              "5_value": 5
            },
            {
              name: "Ok",
              date: timestamp + 17 * ONE_DAY,
              "3_value": 3
            },
            {
              name: "Super",
              date: timestamp + 18 * ONE_DAY,
              "3_value": 5
            },
            {
              name: "Ok",
              date: timestamp + 18 * ONE_DAY,
              "2_value": 3
            },
            {
              name: "Gut",
              date: timestamp + 18 * ONE_DAY,
              "4_value": 4
            },
            {
              name: "Super",
              date: timestamp + 18 * ONE_DAY,
              "5_value": 5
            },
            {
              name: "Ok",
              date: timestamp + 18 * ONE_DAY,
              "3_value": 3
            },
            {
              name: "Naja",
              date: timestamp + 18 * ONE_DAY,
              "1_value": 2
            }
          ]}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis
            height={70}
            dataKey="date"
            scale="time"
            type="number"
            //fontFamily="Arial"
            fontSize="14"
            domain={["dataMin", "dataMax"]}
            //tick={[timestamp, timestamp + 7 * ONE_DAY]}
            tick={{ transform: "translate(0, 10)" }}
            tick={["dataMin", "dataMax"]}
            tickSize={20}
            tickFormatter={unixTime => moment(unixTime).format("Do MMM YY")}
          />
          <YAxis
            name="Stimmung"
            //fontFamily="Arial"
            fontSize="14"
            //dataKey="ids"
            //type="category"
            tick={{ transform: "translate(-10, 0)" }}
            tickSize={7}
            domain={["1, 5"]}
            tickFormatter={value => renderSwitch(value)}
          />
          <Legend
            iconType="wye"
            wrapperStyle={{ top: 650, fontSize: 14 }}
            // onMouseEnter={this.handleMouseEnter}
            // onMouseLeave={this.handleMouseLeave}
          />
          <Tooltip
            labelFormatter={unixTime => moment(unixTime).format("Do MMM YY")}
            formatter={value => renderSwitch(value)}
          />
          <Brush
            dataKey="date"
            height={30}
            stroke="#8884d8"
            tickFormatter={unixTime => moment(unixTime).format("Do MMM YY")}
          />
          {ids.map(id => {
            return (
              <Line
                type="monotone"
                connectNulls={true}
                key={`line_${id}`}
                dataKey={`${id}_value`}
                stroke={colors[id]}
                // strokeOpacity={opacity.id_value}
                //stroke="#000080"
                activeDot={{ r: 8 }}
              />
            );
          })}
        </LineChart>
      </ResponsiveContainer>
    );
  }
}