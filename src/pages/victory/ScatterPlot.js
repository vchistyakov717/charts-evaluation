import React from 'react';
import { VictoryChart, VictoryZoomContainer, VictoryScatter } from 'victory';
import { random , range } from 'lodash';

export default class App extends React.Component {

    constructor(props) {
        super(props);
        this.containerRef = React.createRef();
        this.state = {
          data: this.getScatterData(),
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
  
    getScatterData() {
      return range(50).map((index) => {
        return {
          x: random(1, 50),
          y: random(10, 90),
          size: random(8) + 3
        };
      });
    }
  
    render() {
      const { width } = this.state;
      return (
        <div ref={this.containerRef} style={{ height: '300px' }}>
        <VictoryChart
          width={width }
          height={300}
          domain={{y: [0, 100]}}
        //   containerComponent={<VictoryZoomContainer zoomDomain={{x: [5, 35], y: [0, 100]}}/>}
        >
          <VictoryScatter
            data={this.state.data}
            // style={{
            //   data: {
            //     opacity: ({ datum }) =>  datum.y % 5 === 0 ? 1 : 0.7,
            //     fill: ({ datum }) => datum.y % 5 === 0 ? "tomato" : "black"
            //   }
            // }}
          />
        </VictoryChart>
        </div>
      );
    }
  }