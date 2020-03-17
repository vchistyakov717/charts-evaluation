import React from 'react';
import TauChart from './TauChartReact';

const chartOptions = {
	type: 'stacked-area',
    x: 'date',
    y: 'effort',
    color: 'team',
     guide: {
        interpolate: 'smooth'
    }
};

export default class App extends React.Component {

	constructor(props) {
		super(props);
		this.state = {};
		this.state.options = chartOptions;
		this.state.data = [
            {team: 'Alpha', date: '2015-07-15', effort: 400},
            {team: 'Alpha', date: '2015-07-16', effort: 200},
            {team: 'Alpha', date: '2015-07-17', effort: 300},
            {team: 'Alpha', date: '2015-07-18', effort: 500},
            {team: 'Beta',  date: '2015-07-15', effort: 100},
            {team: 'Beta',  date: '2015-07-16', effort: 200},
            {team: 'Beta',  date: '2015-07-17', effort: 300},
            {team: 'Beta',  date: '2015-07-18', effort: 100},
            {team: 'Gamma', date: '2015-07-15', effort: 300},
            {team: 'Gamma', date: '2015-07-16', effort: 100},
            {team: 'Gamma', date: '2015-07-17', effort: 100},
            {team: 'Gamma', date: '2015-07-18', effort: 200}
        ];

		// setInterval(() => {
		// 	const data = this.state.data;
		// 	const last = data[data.length - 1];
		// 	const newX = last.x + (Math.PI / 100);
		// 	data.shift();
		// 	data.shift();
		// 	data.push({x: newX, y: Math.sin(newX), type: 'sin'});
		// 	data.push({x: newX, y: Math.cos(newX), type: 'cos'});
		// 	this.setState({ data });
		// }, 200);
	}

	render() {
		return (
			<TauChart data={this.state.data} options={this.state.options} width={800} height={600} />
		);
	}

}
