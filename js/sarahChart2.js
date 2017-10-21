/*project 1 chart*/
var ctx1 = document.getElementById("pr2-pie").getContext('2d');
var myPieChart = new Chart(ctx1, {
    type: 'doughnut',
    data: {
        labels: ["set on the first set up process","within three days since the first set up","within a week since the first set up"],
        datasets: [{
            label: 'When did you set up a timer?',
            data: [94.9,3,1.2],
            backgroundColor: [        
                '#9d9cf3',
                '#fdf69c',
                '#f2f2f2'
            ]
        }]
    },
    options: {
        cutoutPercentage : 80,
        legend : {
            display: false
        },
        centertext: "94.9%"
    }
});


var ctx2 = document.getElementById("pr2-bar").getContext("2d");
var data = {
  labels: ["No Timer","More than 1 Timer", "More than 3 Timers"],
  datasets: [
        {
            backgroundColor: "#9d9cf3",
            data: [47, 61, 66]
        }
    ]
};
var myBarChart = new Chart(ctx2, {
  type: 'bar',
  data: data,
  options: {
    legend : {
        display: false
    },
    barValueSpacing: 20,
    scales: {
      yAxes: [{
        ticks: {
          min: 0,
        }
      }]
    }
  }
});

Chart.plugins.register({
   afterDatasetsDraw: function(chart, easing) {
       // To only draw at the end of animation, check for easing === 1
       var myBarChart = chart.ctx2;
       chart.data.datasets.forEach(function (dataset, i) {
           var meta = chart.getDatasetMeta(i);
           if (!meta.hidden) {
               meta.data.forEach(function(element, index) {
                   // Draw the text in black, with the specified font
                   ctx2.fillStyle = 'rgb(0, 0, 0)';
                   var fontSize = 12;
                   var fontStyle = '600';
                   var fontFamily = 'Montserrat';
                   ctx2.font = Chart.helpers.fontString(fontSize, fontStyle, fontFamily);
                   // Just naively convert to string for now
                   var dataString = dataset.data[index].toString()+"%";
                   // Make sure alignment settings are correct
                   ctx2.textAlign = 'center';
                   ctx2.textBaseline = 'bottom';
                   var padding = -5;
                   var position = element.tooltipPosition();
                   ctx2.fillText(dataString, position.x, position.y - (fontSize / 2) - padding);
               });
           }
       });
   }
});



Chart.pluginService.register({
    beforeDraw: function (chart) {
        if (chart.options.centertext) {
            var width = chart.chart.width,
                    height = chart.chart.height,
                    ctx = chart.chart.ctx;
            ctx.restore();
            var fontSize = (height / 100).toFixed(2); // was: 114
            ctx.font = fontSize + "em 'Montserrat'";
            ctx.color = "#f2f2f2";
            ctx.textBaseline = "bottom";
            var text = chart.options.centertext, // "75%",
                    textX = Math.round((width - ctx.measureText(text).width) / 2),
                    textY = height / 2 - (chart.titleBlock.height - 15);

            ctx.fillText(text, textX, textY);
            ctx.save();
        }
    }
});