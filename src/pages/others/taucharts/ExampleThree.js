import React from 'react';
import TauChart from './TauChartReact';

function clone(row) {
    var newRow = {}
    for (var key in row) {
      newRow[key] = row[key]
    }
    return newRow;
  };

const chartOptions = {
	"type": "line",
      "x": ["car"],
      "y": ["co2,hp"],
      "color": "co2-hp-type"
};

export default class App extends React.Component {

	constructor(props) {
		super(props);
		this.state = {};
		this.state.options = chartOptions;
		this.state.data = [{
            car: "BMV X5",
            co2: 197,
            hp: 306
          },
          {
            car: "Bentley Continental",
            co2: 246,
            hp: 507
          },
          {
            car: "Infinity FX",
            co2: 238,
            hp: 238
          },
          {
            car: "Toyota Prius+",
            co2: 96,
            hp: 99
          },
          {
            car: "Mercedes Vito",
            co2: 203,
            hp: 95
          },
          {
            car: "Peugeot 3008",
            co2: 155,
            hp: 120
          },
          {
            car: "Volvo S60",
            co2: 135,
            hp: 150
          },
          {
            car: "Subaru Forester",
            co2: 186,
            hp: 150
          },
          {
            car: "Lexus RX",
            co2: 233,
            hp: 188
          }
        ].reduce(function(memo, row) {
  
          var keyVal = "co2,hp";
          var keyType = "co2-hp-type";
  
          var r1 = clone(row);
          r1[keyType] = 'co2';
          r1[keyVal] = row['co2'];
  
          var r2 = clone(row);
          r1[keyType] = 'hp';
          r2[keyVal] = row['hp'];
  
          return memo.concat([r1, r2]);
        }, [])
	}

	render() {
		return (
			<TauChart data={this.state.data} options={this.state.options} width={800} height={600} />
		);
	}

}
