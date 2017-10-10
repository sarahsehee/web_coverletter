/*project 1 chart*/
var ctx = document.getElementById("chart-return").getContext('2d');
var myChart1 = new Chart(ctx, {
    type: 'doughnut',
    data: {
        labels: ["More than one timer","No timer at all"],
        datasets: [{
            label: 'Users who use timer featuer',
            data: [35.3,64.7],
            backgroundColor: [
                '#6991f8' ,
                '#f2f2f2'
                   
            ]
        }]
    },
    options: {
        cutoutPercentage : 80,
        legend : {
            display: false
        },
        centertext : "35.3%"
    }
});

var ctx = document.getElementById("chart-premium").getContext('2d');
var myChart2 = new Chart(ctx, {
    type: 'doughnut',
    data: {
        labels: ["No timer at all","More than one timer"],
        datasets: [{
            label: 'Users who use timer featuer',
            data: [67.5,32.5],
            backgroundColor: [        
                '#6991f8',
                '#f2f2f2'
            ]
        }]
    },
    options: {
        cutoutPercentage : 80,
        legend : {
            display: false
        },
        centertext: "67.5%"
    }
});



var ctx2 = document.getElementById("chart-compare").getContext("2d");
var data = {
  labels: ["Monthly", "Annual", "Biannual","Treinnual"],
  datasets: [{
    label: "Users setting a timer",
    backgroundColor: "#6991f8",
    data: [21, 34, 7, 38]
  }, {
    label: "Users not using a timer",
    backgroundColor: "#f2f2f2",
    data: [37, 11, 1, 5]
  }]
};

var myBarChart = new Chart(ctx2, {
  type: 'bar',
  data: data,
  options: {
    legend : {
        position:'bottom'
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



