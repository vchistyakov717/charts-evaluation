import React from 'react';
import ResponsiveXYFrame from "semiotic/lib/ResponsiveXYFrame"
const theme = ["#ac58e5","#E0488B","#9fd0cb","#e0d33a","#7566ff","#533f82","#7a255d","#365350","#a19a11","#3f4482"]
const frameProps = {   lines: [{ title: "Ex Machina", coordinates: [{ week: 1, grossWeekly: 327616, theaterCount: 4, theaterAvg: 81904, date: "2015-04-10", rank: 18 },
        { week: 2, grossWeekly: 1150814, theaterCount: 39, theaterAvg: 29508, date: "2015-04-17", rank: 15 },
        { week: 3, grossWeekly: 7156570, theaterCount: 1255, theaterAvg: 5702, date: "2015-04-24", rank: 6 },
        { week: 4, grossWeekly: 3615000, theaterCount: 1279, theaterAvg: 2826, date: "2015-05-01", rank: 6 },
        { week: 5, grossWeekly: 5212462, theaterCount: 2004, theaterAvg: 2601, date: "2015-05-08", rank: 6 },
        { week: 6, grossWeekly: 3108609, theaterCount: 1718, theaterAvg: 1809, date: "2015-05-15", rank: 9 },
        { week: 7, grossWeekly: 2248258, theaterCount: 896, theaterAvg: 2509, date: "2015-05-22", rank: 12 },
        { week: 8, grossWeekly: 1122034, theaterCount: 506, theaterAvg: 2217, date: "2015-05-29", rank: 13 },
        { week: 9, grossWeekly: 551552, theaterCount: 302, theaterAvg: 1826, date: "2015-06-05", rank: 19 },
        { week: 10, grossWeekly: 316877, theaterCount: 194, theaterAvg: 1633, date: "2015-06-12", rank: 20 },
        { week: 11, grossWeekly: 201345, theaterCount: 124, theaterAvg: 1624, date: "2015-06-19", rank: 29 },
        { week: 12, grossWeekly: 153162, theaterCount: 81, theaterAvg: 1891, date: "2015-06-26", rank: 34 },
        { week: 13, grossWeekly: 102114, theaterCount: 61, theaterAvg: 1674, date: "2015-07-03", rank: 36 },
        { week: 14, grossWeekly: 64350, theaterCount: 39, theaterAvg: 1650, date: "2015-07-10", rank: 42 },
        { week: 15, grossWeekly: 45344, theaterCount: 31, theaterAvg: 1463, date: "2015-07-17", rank: 47 }] },
    { title: "Far from the Madding Crowd", coordinates: [{ week: 1, grossWeekly: 240160, theaterCount: 10, theaterAvg: 24016, date: "2015-05-01", rank: 24 },
        { week: 2, grossWeekly: 1090487, theaterCount: 99, theaterAvg: 11015, date: "2015-05-08", rank: 15 },
        { week: 3, grossWeekly: 1831958, theaterCount: 289, theaterAvg: 6339, date: "2015-05-15", rank: 10 },
        { week: 4, grossWeekly: 3779833, theaterCount: 865, theaterAvg: 4370, date: "2015-05-22", rank: 7 },
        { week: 5, grossWeekly: 2246233, theaterCount: 902, theaterAvg: 2490, date: "2015-05-29", rank: 9 },
        { week: 6, grossWeekly: 1129007, theaterCount: 610, theaterAvg: 1851, date: "2015-06-05", rank: 14 },
        { week: 7, grossWeekly: 701207, theaterCount: 366, theaterAvg: 1916, date: "2015-06-12", rank: 17 },
        { week: 8, grossWeekly: 430870, theaterCount: 256, theaterAvg: 1683, date: "2015-06-19", rank: 20 },
        { week: 9, grossWeekly: 270977, theaterCount: 122, theaterAvg: 2221, date: "2015-06-26", rank: 24 },
        { week: 10, grossWeekly: 195483, theaterCount: 105, theaterAvg: 1862, date: "2015-07-03", rank: 28 },
        { week: 11, grossWeekly: 138071, theaterCount: 98, theaterAvg: 1409, date: "2015-07-10", rank: 30 },
        { week: 12, grossWeekly: 86393, theaterCount: 74, theaterAvg: 1167, date: "2015-07-17", rank: 39 },
        { week: 13, grossWeekly: 52821, theaterCount: 47, theaterAvg: 1124, date: "2015-07-24", rank: 42 },
        { week: 14, grossWeekly: 25708, theaterCount: 27, theaterAvg: 952, date: "2015-07-31", rank: 58 },
        { week: 15, grossWeekly: 17292, theaterCount: 18, theaterAvg: 961, date: "2015-08-07", rank: 60 }] }],
  size: [700,400],
  margin: { left: 80, bottom: 90, right: 10, top: 40 },
  responsiveWidth: true,
  lineType: "area",
  xAccessor: "week",
  yAccessor: "theaterCount",
  yExtent: [0],
  lineDataAccessor: "coordinates",
  lineStyle: (d, i) => ({
    stroke: theme[i],
    strokeWidth: 2,
    fill: theme[i],
    fillOpacity: 0.6
  }),
  title: (
    <text textAnchor="middle">
      Theaters showing <tspan fill={"#ac58e5"}>Ex Machina</tspan> vs{" "}
      <tspan fill={"#E0488B"}>Far from the Madding Crowd</tspan>
    </text>
  ),
  axes: [{ orient: "left", label: "Number of Theaters", tickFormat: function(e){return e/1e3+"k"} },
    { orient: "bottom", label: { name: "Weeks from Opening Day", locationDistance: 55 } }],
  hoverAnnotation: true
}

export default () => {
  return <ResponsiveXYFrame {...frameProps} />
}