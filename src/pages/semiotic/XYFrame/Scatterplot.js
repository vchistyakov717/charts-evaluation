import React from 'react';
import ResponsiveXYFrame from "semiotic/lib/ResponsiveXYFrame"
const frameProps = {   points: [{ theaterCount: 4, rank: 18, grossWeekly: 327616, title: "Ex Machina" },
    { theaterCount: 39, rank: 15, grossWeekly: 1150814, title: "Ex Machina" },
    { theaterCount: 1255, rank: 6, grossWeekly: 7156570, title: "Ex Machina" },
    { theaterCount: 1279, rank: 6, grossWeekly: 3615000, title: "Ex Machina" },
    { theaterCount: 2004, rank: 6, grossWeekly: 5212462, title: "Ex Machina" },
    { theaterCount: 1718, rank: 9, grossWeekly: 3108609, title: "Ex Machina" },
    { theaterCount: 896, rank: 12, grossWeekly: 2248258, title: "Ex Machina" },
    { theaterCount: 506, rank: 13, grossWeekly: 1122034, title: "Ex Machina" },
    { theaterCount: 302, rank: 19, grossWeekly: 551552, title: "Ex Machina" },
    { theaterCount: 194, rank: 20, grossWeekly: 316877, title: "Ex Machina" },
    { theaterCount: 124, rank: 29, grossWeekly: 201345, title: "Ex Machina" },
    { theaterCount: 81, rank: 34, grossWeekly: 153162, title: "Ex Machina" },
    { theaterCount: 61, rank: 36, grossWeekly: 102114, title: "Ex Machina" },
    { theaterCount: 39, rank: 42, grossWeekly: 64350, title: "Ex Machina" },
    { theaterCount: 31, rank: 47, grossWeekly: 45344, title: "Ex Machina" },
    { theaterCount: 10, rank: 24, grossWeekly: 240160, title: "Far from the Madding Crowd" },
    { theaterCount: 99, rank: 15, grossWeekly: 1090487, title: "Far from the Madding Crowd" },
    { theaterCount: 289, rank: 10, grossWeekly: 1831958, title: "Far from the Madding Crowd" },
    { theaterCount: 865, rank: 7, grossWeekly: 3779833, title: "Far from the Madding Crowd" },
    { theaterCount: 902, rank: 9, grossWeekly: 2246233, title: "Far from the Madding Crowd" },
    { theaterCount: 610, rank: 14, grossWeekly: 1129007, title: "Far from the Madding Crowd" },
    { theaterCount: 366, rank: 17, grossWeekly: 701207, title: "Far from the Madding Crowd" },
    { theaterCount: 256, rank: 20, grossWeekly: 430870, title: "Far from the Madding Crowd" },
    { theaterCount: 122, rank: 24, grossWeekly: 270977, title: "Far from the Madding Crowd" },
    { theaterCount: 105, rank: 28, grossWeekly: 195483, title: "Far from the Madding Crowd" },
    { theaterCount: 98, rank: 30, grossWeekly: 138071, title: "Far from the Madding Crowd" },
    { theaterCount: 74, rank: 39, grossWeekly: 86393, title: "Far from the Madding Crowd" },
    { theaterCount: 47, rank: 42, grossWeekly: 52821, title: "Far from the Madding Crowd" },
    { theaterCount: 27, rank: 58, grossWeekly: 25708, title: "Far from the Madding Crowd" },
    { theaterCount: 18, rank: 60, grossWeekly: 17292, title: "Far from the Madding Crowd" },
    { theaterCount: 3366, rank: 3, grossWeekly: 16660516, title: "The Longest Ride" },
    { theaterCount: 3371, rank: 5, grossWeekly: 9372323, title: "The Longest Ride" },
    { theaterCount: 3140, rank: 7, grossWeekly: 5507604, title: "The Longest Ride" },
    { theaterCount: 2115, rank: 10, grossWeekly: 2369655, title: "The Longest Ride" },
    { theaterCount: 1464, rank: 11, grossWeekly: 1823683, title: "The Longest Ride" },
    { theaterCount: 803, rank: 14, grossWeekly: 780244, title: "The Longest Ride" },
    { theaterCount: 329, rank: 17, grossWeekly: 419930, title: "The Longest Ride" },
    { theaterCount: 230, rank: 21, grossWeekly: 226064, title: "The Longest Ride" },
    { theaterCount: 155, rank: 28, grossWeekly: 126320, title: "The Longest Ride" },
    { theaterCount: 116, rank: 31, grossWeekly: 101719, title: "The Longest Ride" },
    { theaterCount: 45, rank: 40, grossWeekly: 33808, title: "The Longest Ride" },
    { theaterCount: 24, rank: 56, grossWeekly: 17379, title: "The Longest Ride" },
    { theaterCount: 9, rank: 67, grossWeekly: 6872, title: "The Longest Ride" }],
  size: [700,400],
  margin: { left: 60, bottom: 90, right: 10, top: 40 },
  responsiveWidth: true,
  xAccessor: "theaterCount",
  yAccessor: "rank",
  pointStyle: { fill: "#E0488B" },
  lineStyle: { stroke: "#E0488B" },
  axes: [
            {
              orient: "left",
              baseline: "under",
              tickLineGenerator: ({ xy }) => (
                <path
                  style={{
                    fill: "#efefef"
                  }}
                  d={`M${xy.x1},${xy.y1 - 10}L${xy.x2},${xy.y1 - 10}L${xy.x2},${xy.y1 + 10}L${xy.x1},${xy.y1 + 10}Z`}
                />
              )
            }
        ]
}

export default () => {
  return <ResponsiveXYFrame {...frameProps} />
}

// import React from 'react';
// import ResponsiveXYFrame from "semiotic/lib/ResponsiveXYFrame";

// const frameProps = {   lines: { label: "#ac58e5", coordinates: [{ step: 0, value: 40 },
//       { step: 1, value: 42 },
//       { step: 2, value: 49 },
//       { step: 3, value: 47 },
//       { step: 4, value: 39 },
//       { step: 5, value: 32 },
//       { step: 6, value: 26 },
//       { step: 7, value: 19 },
//       { step: 8, value: 19 },
//       { step: 9, value: 16 },
//       { step: 10, value: 13 },
//       { step: 11, value: 11 },
//       { step: 12, value: 20 },
//       { step: 13, value: 21 },
//       { step: 14, value: 25 },
//       { step: 15, value: 34 },
//       { step: 16, value: 38 },
//       { step: 17, value: 42 },
//       { step: 18, value: 44 },
//       { step: 19, value: 40 },
//       { step: 20, value: 48 },
//       { step: 21, value: 52 },
//       { step: 22, value: 50 },
//       { step: 23, value: 60 },
//       { step: 24, value: 68 },
//       { step: 25, value: 61 },
//       { step: 26, value: 63 },
//       { step: 27, value: 56 },
//       { step: 28, value: 62 },
//       { step: 29, value: 57 },
//       { step: 30, value: 67 },
//       { step: 31, value: 63 },
//       { step: 32, value: 68 },
//       { step: 33, value: 62 },
//       { step: 34, value: 63 },
//       { step: 35, value: 64 },
//       { step: 36, value: 62 },
//       { step: 37, value: 64 },
//       { step: 38, value: 67 },
//       { step: 39, value: 70 },
//       { step: 40, value: 63 }] },
//   margin: 70,
//   xAccessor: "step",
//   yAccessor: "value",
//   pointStyle: { fill: "#E0488B" },
//   lineStyle: { stroke: "#E0488B" },
//   axes: [
//             {
//               orient: "left",
//               baseline: "under",
//               tickLineGenerator: ({ xy }) => (
//                 <path
//                   style={{
//                     fill: "#efefef",
//                     stroke: "#ccc",
//                     strokeDasharray: "2 2"
//                   }}
//                   d={`M${xy.x1},${xy.y1 - 5}L${xy.x2},${xy.y1 - 5}L${
//                     xy.x2
//                     },${xy.y1 + 5}L${xy.x1},${xy.y1 + 5}Z`}
//                 />
//               )
//             }
//         ],
//   showLinePoints: true
// }

// export default () => {
//   return <ResponsiveXYFrame {...frameProps} />
// }