
    var ctx = document.getElementById("chart-funnel").getContext("2d");
    var funnel = new Chart(ctx, {
    type: 'barFunnel',
    data: barChartData,
    options: {
        labels: ["Step 1", "Step 2", "Step 3", "Step 4", "Step 5"],
        datasets: [{
            label: 'Dataset 1',
            backgroundColor: "#0B84A5",
            borderColor: '#F6C85F',
            data: [1500, 1200, 1000, 800, 400]
        }],
        // Elements options apply to all of the options unless overridden in a dataset
        // In this case, we are setting the border of each bar to be 2px wide and green
        elements: {
            rectangle: {
                borderWidth: 2,
                borderColor: '0B84A5',
                borderSkipped: 'bottom',
                stepLabel: {
                    display: true,
                    fontSize: 20,
                    // color: "red"
                }
            }
        },
        region: {
          display: true
        },
        responsive: true,
        legend: {
            position: 'top',
        },
        scales: {
          yAxes: [{
              ticks: {
                  beginAtZero:true
              }
          }]
        },
        title: {
            display: true,
            text: 'Chart.js Bar Funnel Chart'
        }
    }
    });