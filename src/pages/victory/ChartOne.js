import React from 'react';
import VizG from 'react-vizgrammar';
import { VictoryZoomContainer } from 'victory';

export default class SimpleChart extends React.Component {

    constructor(props) {
        super(props);

        this.metadata = {
            names: ['rpm', 'torque', 'horsepower', 'EngineType'],
            types: ['linear', 'linear', 'ordinal', 'ordinal'],
        };

        this.staticDataSet = [
            [10, 11, 12, 'piston'],
            [11, 15, 12, 'rotary'],
            [12, 14, 12, 'piston'],
            [13, 24, 12, 'rotary'],
            [15, 11, 12, 'rotary'],
            [16, 15, 12, 'piston'],
            [17, 14, 12, 'rotary'],
        ];

        this.containerRef = React.createRef();
    this.state = {
      width: 0
    };
    this.handleResize = () => {
      if(this.containerRef.current && this.containerRef.current.clientWidth){
        this.setState({ width: this.containerRef.current.clientWidth });
      }
    };
    }

    componentDidMount() {
        this.handleResize();
        window.addEventListener('resize', this.handleResize);
      }
    
      componentWillUnmount() {
        window.removeEventListener('resize', this.handleResize);
      }


    render() {
        const {width} = this.state;
        const lineChartConfig = {
            x: 'rpm',
            charts: [{
                type: 'line',
                y: 'torque'
            }],
            maxLength: 30,
            width: width,
            height: 300,
            interactiveLegend: true,
            legend: true,
        };
        return ( 

            <VizG ref={this.containerRef} style={{ height: '300px' }} config = {lineChartConfig} metadata = {this.metadata} data = {this.staticDataSet}/>

        );
    }
}