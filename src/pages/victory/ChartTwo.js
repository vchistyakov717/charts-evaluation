import React from 'react';
import "@patternfly/react-core/dist/styles/base.css";

import { Chart, ChartArea, ChartAxis, ChartGroup, ChartThemeColor, ChartVoronoiContainer } from '@patternfly/react-charts';
import { VictoryZoomContainer } from 'victory';
// import '@patternfly/patternfly/patternfly-charts.css'; // Required for mix-blend-mode CSS property

export default class MultiColorChart extends React.Component {
  constructor(props) {
    super(props);
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
    const { width } = this.state;

    return (
      <div ref={this.containerRef} style={{ height: '300px' }}>
        <Chart
          ariaDesc="Average number of pets"
          ariaTitle="Area chart example"
        //   containerComponent={<ChartVoronoiContainer labels={({ datum }) => `${datum.name}: ${datum.y}`} constrainToVisibleArea />}
          containerComponent={<VictoryZoomContainer zoomDimension="x" />}
          legendData={[{ name: 'Cats' }, { name: 'Dogs' }, { name: 'Birds' }]}
          legendPosition="bottom-left"
          height={300}
          padding={{
            bottom: 55, // Adjusted to accommodate legend
            left: 30,
            right: 30,
            top: 10,
          }}
          maxDomain={{y: 9}}
          themeColor={ChartThemeColor.multiUnordered}
          width={width}
        >
          <ChartAxis />
          <ChartAxis dependentAxis showGrid />
          <ChartGroup>
            <ChartArea
              data={[
                { name: 'Cats', x: '2015', y: 3 },
                { name: 'Cats', x: '2016', y: 4 },
                { name: 'Cats', x: '2017', y: 8 },
                { name: 'Cats', x: '2018', y: 6 }
              ]}
              interpolation="monotoneX"
            />
            <ChartArea
              data={[
                { name: 'Dogs', x: '2015', y: 2 },
                { name: 'Dogs', x: '2016', y: 3 },
                { name: 'Dogs', x: '2017', y: 4 },
                { name: 'Dogs', x: '2018', y: 5 },
                { name: 'Dogs', x: '2019', y: 6 }
              ]}
              interpolation="monotoneX"
            />
            <ChartArea
              data={[
                { name: 'Birds', x: '2015', y: 1 },
                { name: 'Birds', x: '2016', y: 2 },
                { name: 'Birds', x: '2017', y: 3 },
                { name: 'Birds', x: '2018', y: 2 },
                { name: 'Birds', x: '2019', y: 4 }
              ]}
              interpolation="monotoneX"
            />
          </ChartGroup>
        </Chart>
      </div>
    );
  }
}
