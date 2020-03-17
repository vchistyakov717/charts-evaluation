export const T0 = {
    chart: {
        type: "pie"
      },
      credits: {
        enabled: false
      },
      title: {
        style: {
          fontWeight: "normal"
        }
      },
      plotOptions: {
        pie: {
          allowPointSelect: true,
          cursor: "pointer",
          dataLabels: {
            enabled: true,
            format: "<b>{point.name}</b>: {point.y}"
            // TODO: Check possible label names.
            // formatter() {
            //   return 'Line one<br>Line two<br>Line one<br>Line two';
            // },
          },
          showInLegend: true,
          point: {
            events: {
              legendItemClick: () => {
                debugger;
                return false;
              }
            }
          }
        }
      },
      colors: [
        "rgba(81, 205, 244, 0.75)",
        "rgba(0, 130, 34, 0.75)",
        "rgba(172, 208, 56, 0.75)",
        "rgba(0, 110, 212, 0.75)", // color set 1
        "rgba(93, 214, 187, 0.75)",
        "rgba(0, 108, 153, 0.75)",
        "rgba(70, 182, 101, 0.75)",
        "rgba(175, 95, 194, 0.75)", // color set 2
        "rgba(247, 185, 70, 0.75)",
        "rgba(158, 60, 116, 0.75)",
        "rgba(237, 133, 50, 0.75)",
        "rgba(215, 68, 97, 0.75)" // color set 3
      ],
      exporting: {
        buttons: {
          contextButton: {
            className: "chart-context-button",
            menuClassName: "chart-context-menu",
            menuItems: [
              "downloadPNG",
              "downloadJPEG",
              "downloadSVG",
              "separator",
              "downloadCSV"
            ],
            x: 10,
            y: 0
          }
        },
        libURL: "/public/js/lib/",
        fallbackToExportServer: false
      },
      series: [
        {
          type: "pie",
          name: "VMs",
          data: [
            {
              name: "Private1",
              y: 112,
              sliced: true
            },
            {
              name: "CypressTenant",
              y: 85
            },
            {
              name: "BackVisOnTest",
              y: 32
            },
            {
              name: "QAN1 Tenant _Password or MobilePass__",
              y: 7
            },
            {
              name: "BackVisOffTest",
              y: 15
            },
            {
              name: "QAN1 Tenant _Password",
              y: 7
            },
            {
              name: "Others",
              y: 7
            }
          ]
        }
      ]
}

