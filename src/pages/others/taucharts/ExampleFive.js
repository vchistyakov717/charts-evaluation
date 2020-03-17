import React from 'react';
import Taucharts from 'taucharts';
import 'taucharts/dist/plugins/tooltip';
import 'taucharts/dist/plugins/layers';
import 'taucharts/dist/plugins/legend';
import 'taucharts/dist/plugins/trendline';
import TauChart from './TauChartReact';

var arr = [];
function oscillator_sin(time, frequency){  
    return Math.sin(time * 2 * Math.PI * frequency);
};
function oscillator_cos(time, frequency){  
    return Math.sin(time * 2 * Math.PI * frequency);
};


const chartOptions = {
	type: 'line',
    x: ['x'],
    y: ['followers'],
    guide: {
        x: ["x"],
        y: {
            label: { text:'Followers' }
        }
    },
    dimensions: {
        "x" : { "type": "measure", "scale": "linear" },
        "followers" : { "type": "measure", "scale": "linear" },
        "reposts" : { "type": "measure", "scale": "linear" },
        "comments" : { "type": "measure", "scale": "linear" },
    },
    plugins: [
        Taucharts.api.plugins.get('tooltip')(),
    ]
};

export default class App extends React.Component {

	constructor(props) {
		super(props);
		this.state = {};
		this.state.options = chartOptions;
		this.state.data = [
            { x: 1, followers: 10, reposts: 1, likes: 1, comments: 1 },
            { x: 2, followers: 17, reposts: 2, likes: 2, comments: 1 },
            { x: 3, followers: 37, reposts: 5, likes: 15, comments: 10 },
            { x: 4, followers: 101, reposts: 7, likes: 17, comments: 12 },
            { x: 5, followers: 337, reposts: 9, likes: 27, comments: 19 },
            { x: 6, followers: 337, reposts: 11, likes: 33, comments: 25 },
            { x: 7, followers: 717, reposts: 11, likes: 23, comments: 14 },
            { x: 8, followers: 899, reposts: 11, likes: 23, comments: 14 }
        ]
	}

	render() {
        
		return (
			<TauChart data={this.state.data} options={this.state.options} width={800} height={600} />
		);
	}

}
