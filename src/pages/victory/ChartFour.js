import React from "react";
import {
  VictoryLine,
  VictoryScatter,
  VictoryChart,
  VictoryAxis,
  VictoryTheme,
  VictoryLabel,
  VictoryTooltip
} from "victory";

const paymentsData = {
    "days": [
      { "waddle": 0, "cloud": 0 },
      { "waddle": 0, "cloud": 0 },
      { "waddle": 40401.28, "cloud": 41398.12 },
      { "waddle": 13792.88, "cloud": 13989.68 },
      { "waddle": 5402.38, "cloud": 5837.0 },
      { "waddle": 7338.78, "cloud": 7688.06 },
      { "waddle": 6585.62, "cloud": 6772.12 },
      { "waddle": 0, "cloud": 0 },
      { "waddle": 0, "cloud": 0 },
      { "waddle": 4747.94, "cloud": 5209.34 },
      { "waddle": 2957.76, "cloud": 3865.25 },
      { "waddle": 7644.0, "cloud": 9366.78 },
      { "waddle": 5309.54, "cloud": 6263.09 },
      { "waddle": 7949.43, "cloud": 7949.43 },
      { "waddle": 0, "cloud": 0 },
      { "waddle": 0, "cloud": 0 },
      { "waddle": 9292.11, "cloud": 9196.97 },
      { "waddle": 7653.07, "cloud": 27844.84 },
      { "waddle": 3420.71, "cloud": 4440.95 },
      { "waddle": 7901.57, "cloud": 8381.23 },
      { "waddle": 5936.56, "cloud": 5936.56 },
      { "waddle": 0, "cloud": 0 },
      { "waddle": 0, "cloud": 0 },
      { "waddle": 10057.33, "cloud": 10177.31 },
      { "waddle": 19187.84, "cloud": 19402.34 },
      { "waddle": 3570.01, "cloud": 4228.02 },
      { "waddle": 7172.63, "cloud": 8066.09 },
      { "waddle": 5766.56, "cloud": 5968.87 },
      { "waddle": 0, "cloud": 0 },
      { "waddle": 0, "cloud": 0 },
      { "waddle": 26858.57, "cloud": 26579.82 },
      { "waddle": 7269.94, "cloud": 7703.14 },
      { "waddle": 5850.21, "cloud": 6298.51 },
      { "waddle": 2655.87, "cloud": 12888.3 },
      { "waddle": 4844.45, "cloud": 6623.06 },
      { "waddle": 0, "cloud": 0 },
      { "waddle": 0, "cloud": 0 },
      { "waddle": 5123.67, "cloud": 5504.82 },
      { "waddle": 13785.31, "cloud": 14646.54 },
      { "waddle": 6815.32, "cloud": 8275.08 },
      { "waddle": 7226.44, "cloud": 7899.57 },
      { "waddle": 4524.74, "cloud": 4663.24 },
      { "waddle": 0, "cloud": 0 },
      { "waddle": 0, "cloud": 0 },
      { "waddle": 9051.82, "cloud": 8596.34 },
      { "waddle": 7255.99, "cloud": 7076.89 },
      { "waddle": 8762.93, "cloud": 9092.93 },
      { "waddle": 1965.35, "cloud": 3278.34 },
      { "waddle": 6608.51, "cloud": 6629.54 },
      { "waddle": 0, "cloud": 0 },
      { "waddle": 0, "cloud": 0 },
      { "waddle": 5142.32, "cloud": 5233.23 },
      { "waddle": 14482.18, "cloud": 15048.21 },
      { "waddle": 13238.73, "cloud": 13572.97 },
      { "waddle": 2541.18, "cloud": 4144.62 },
      { "waddle": 14934.96, "cloud": 25825.73 },
      { "waddle": 0, "cloud": 0 },
      { "waddle": 0, "cloud": 0 },
      { "waddle": 10738.85, "cloud": 10738.85 },
      { "waddle": 24743.17, "cloud": 24958.01 },
      { "waddle": 5837.07, "cloud": 7286.75 },
      { "waddle": 7004.42, "cloud": 7377.65 },
      { "waddle": 0, "cloud": 0 },
      { "waddle": 0, "cloud": 0 },
      { "waddle": 0, "cloud": 0 },
      { "waddle": 0, "cloud": 0 },
      { "waddle": 19280.77, "cloud": 19432.79 },
      { "waddle": 29434.08, "cloud": 30045.65 },
      { "waddle": 0, "cloud": 0 },
      { "waddle": 11411.0, "cloud": 13139.31 },
      { "waddle": 0, "cloud": 0 },
      { "waddle": 0, "cloud": 0 },
      { "waddle": 9757.98, "cloud": 10935.22 },
      { "waddle": 17886.99, "cloud": 17886.99 },
      { "waddle": 22379.52, "cloud": 29029.17 },
      { "waddle": 9339.03, "cloud": 10776.05 },
      { "waddle": 7915.27, "cloud": 7934.64 },
      { "waddle": 0, "cloud": 0 },
      { "waddle": 0, "cloud": 0 },
      { "waddle": 5338.79, "cloud": 5691.05 },
      { "waddle": 10116.64, "cloud": 9941.8 },
      { "waddle": 10590.99, "cloud": 10717.49 },
      { "waddle": 3391.06, "cloud": 3391.06 },
      { "waddle": 2942.76, "cloud": 3207.09 },
      { "waddle": 0, "cloud": 0 },
      { "waddle": 0, "cloud": 0 },
      { "waddle": 9733.86, "cloud": 10815.9 },
      { "waddle": 6862.62, "cloud": 9977.82 },
      { "waddle": 14601.25, "cloud": 14475.85 },
      { "waddle": 11337.7, "cloud": 0 }
    ],
    "weeks": [
      { "waddle": 36926.12, "cloud": 37797.36 },
      { "waddle": 16671.94, "cloud": 18274.55 },
      { "waddle": 36402.0, "cloud": 46365.9 },
      { "waddle": 33633.07, "cloud": 44340.41 },
      { "waddle": 39386.02, "cloud": 33578.19 },
      { "waddle": 32298.93, "cloud": 39091.34 },
      { "waddle": 56918.59, "cloud": 98347.77 },
      { "waddle": 57063.93, "cloud": 62116.23 },
      { "waddle": 28394.48, "cloud": 31969.19 },
      { "waddle": 14503.44, "cloud": 23907.33 },
      { "waddle": 20978.73, "cloud": 29974.35 },
      { "waddle": 58085.47, "cloud": 58940.89 },
      { "waddle": 36521.54, "cloud": 36514.17 },
      { "waddle": 33466.56, "cloud": 35102.14 },
      { "waddle": 23970.03, "cloud": 38860.58 },
      { "waddle": 24828.41, "cloud": 26902.53 },
      { "waddle": 48433.71, "cloud": 52980.37 },
      { "waddle": 45760.95, "cloud": 52632.81 },
      { "waddle": 34848.01, "cloud": 38478.29 },
      { "waddle": 37248.13, "cloud": 42881.65 },
      { "waddle": 35013.61, "cloud": 63646.29 },
      { "waddle": 39526.1, "cloud": 112620.9 },
      { "waddle": 39338.76, "cloud": 41192.91 },
      { "waddle": 50993.49, "cloud": 58395.01 },
      { "waddle": 44286.56, "cloud": 55212.56 },
      { "waddle": 35887.68, "cloud": 53771.44 },
      { "waddle": 47035.25, "cloud": 50767.56 },
      { "waddle": 30254.98, "cloud": 32950.04 },
      { "waddle": 50313.57, "cloud": 54715.25 },
      { "waddle": 58226.31, "cloud": 67409.74 },
      { "waddle": 90650.29, "cloud": 115095.0 },
      { "waddle": 40711.28, "cloud": 44047.12 },
      { "waddle": 38342.01, "cloud": 40653.06 },
      { "waddle": 32080.86, "cloud": 48054.6 },
      { "waddle": 48790.32, "cloud": 52720.33 },
      { "waddle": 31505.47, "cloud": 33323.67 },
      { "waddle": 30068.74, "cloud": 35526.6 },
      { "waddle": 43591.21, "cloud": 54115.25 },
      { "waddle": 27572.94, "cloud": 30926.44 },
      { "waddle": 73090.7, "cloud": 76653.71 },
      { "waddle": 27244.86, "cloud": 31476.58 },
      { "waddle": 36216.89, "cloud": 57813.42 },
      { "waddle": 45924.37, "cloud": 47810.32 },
      { "waddle": 48401.15, "cloud": 59438.64 },
      { "waddle": 37795.19, "cloud": 42949.07 },
      { "waddle": 31560.83, "cloud": 32707.74 },
      { "waddle": 42012.92, "cloud": 44628.57 },
      { "waddle": 63258.47, "cloud": 76186.99 },
      { "waddle": 48714.85, "cloud": 49478.44 },
      { "waddle": 70774.52, "cloud": 81766.74 },
      { "waddle": 37352.75, "cloud": 37676.04 },
      { "waddle": 45478.19, "cloud": 38476.66 }
    ]
  };

export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.containerRef = React.createRef();
        this.state = {
          data: paymentsData,
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
        const { width, data } = this.state;
  return (
    <div className="App">
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "stretch",
          justifyContent: "space-around"
        }}
      >
        <div ref={this.containerRef} style={{ height: '300px' }}>
          <VictoryChart
            domainPadding={20}
            theme={VictoryTheme.material}
            width={width}
          >
            <VictoryLabel
              text="Customer Payments"
              textAnchor="middle"
              x={400}
              y={15}
              style={{ fontSize: "18px" }}
            />
            <VictoryLabel text="52 weeks" textAnchor="middle" x={400} y={35} />
            <VictoryAxis
              // tickValues specifies both the number of ticks and where
              // they are placed on the axis
              tickValues={new Array(52)
                .fill(null)
                .map((val, index) => "-" + (index + 1))
                .reverse()}
              tickCount={26}
              label="Time in weeks"
            />
            <VictoryAxis
              dependentAxis
              // tickFormat specifies how ticks should be displayed
              tickFormat={x => `$${x / 1000}k`}
              label="Weekly Aggregate"
              style={{ labels: { fontSize: "30px", padding: "2em" } }}
            />
            <VictoryLine
              data={data.weeks.map(week => week.cloud)}
              labelComponent={<VictoryTooltip />}
              animate={{
                duration: 2000,
                onLoad: { duration: 1000 }
              }}
            />
            <VictoryScatter
              data={data.weeks.map(week => week.cloud)}
              labelComponent={<VictoryTooltip />}
              animate={{
                duration: 2000,
                onLoad: { duration: 1000 }
              }}
            />
          </VictoryChart>
        </div>
        </div>
    </div>
  );
}
}