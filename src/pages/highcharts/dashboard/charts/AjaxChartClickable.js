export const T2 = {
    data: {
      csvURL:
        "https://cdn.rawgit.com/highcharts/highcharts/" +
        "057b672172ccc6c08fe7dbb27fc17ebca3f5b770/samples/data/analytics.csv",
      beforeParse: function(csv) {
        return csv.replace(/\n\n/g, "\n");
      }
    },
    title: {
      text: "Sensor Reading"
    },
    subtitle: {
      text: "Source: Google Analytics"
    },
    xAxis: {
      tickInterval: 7 * 24 * 3600 * 1000, // one week
      tickWidth: 0,
      gridLineWidth: 1,
      labels: {
        align: "left",
        x: 3,
        y: -3
      }
    },
    yAxis: [
      {
        // left y axis
        title: {
          text: null
        },
        labels: {
          align: "left",
          x: 3,
          y: 16,
          format: "{value:.,0f}"
        },
        showFirstLabel: false
      },
      {
        // right y axis
        linkedTo: 0,
        gridLineWidth: 0,
        opposite: true,
        title: {
          text: null
        },
        labels: {
          align: "right",
          x: -3,
          y: 16,
          format: "{value:.,0f}"
        },
        showFirstLabel: false
      }
    ],
    legend: {
      align: "left",
      verticalAlign: "top",
      borderWidth: 0
    },
    tooltip: {
      shared: true,
      crosshairs: true
    },
    plotOptions: {
      series: {
        cursor: "pointer",
        marker: {
          lineWidth: 1
        }
      }
    },
    series: [
      {
        name: "All sessions",
        lineWidth: 4,
        marker: {
          radius: 4
        }
      },
      {
        name: "New users"
      }
    ]
  };
  