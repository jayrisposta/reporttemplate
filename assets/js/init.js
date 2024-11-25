(function () {
  "use strict";

  // ######### ***Half Circle Progrss init*** ###########
  $(".half-progress").each(function () {

    var $bar = $(this).find(".half-bar");
    var $val = $(this).find("span");
    var perc = parseInt($val.text(), 10);

    $({ p: 0 }).animate({ p: perc }, {
      duration: 3000,
      easing: "swing",
      step: function (p) {
        $bar.css({
          transform: "rotate(" + (45 + (p * 1.8)) + "deg)", // 100%=180° so: ° = % * 1.8
          // 45 is to add the needed rotation to have the green borders at the bottom
        });
        $val.text(p | 0);
      }
    });
  });

  // ########## ***doughnut Charts 1 init*** ###########
  const doughnutData1 = {
    labels: [
      'Dissatisfied',
      'Neutral',
      'Satisfied'
    ],
    datasets: [{
      label: "",
      data: [100, 50, 100],
      backgroundColor: [
        '#F93434',
        '#D1CBD9',
        '#428F05'
      ],
      hoverOffset: 4
    }]
  };
  const doughnutOptions1 = {
    plugins: {
      legend: {
        display: false // This hides the legend
      }
    }
  };
  // config
  const doughnutConfig1 = {
    type: 'doughnut',
    data: doughnutData1,
    options: doughnutOptions1
  };

  // render init block
  const doughnutChart1 = new Chart(document.getElementById("doughnutChart1"), doughnutConfig1);

  // ########## ***doughnut Charts*** ###########
  const doughnutData2 = {
    labels: [
      'Dissatisfied',
      'Neutral',
      'Satisfied'
    ],
    datasets: [{
      label: "",
      data: [100, 50, 100],
      backgroundColor: [
        '#F93434',
        '#D1CBD9',
        '#428F05'
      ],
      hoverOffset: 4
    }]
  };
  const doughnutOptions2 = {
    plugins: {
      legend: {
        display: false // This hides the legend
      }
    }
  };
  // config
  const doughnutConfig2 = {
    type: 'doughnut',
    data: doughnutData2,
    options: doughnutOptions2
  };

  // render init block
  const doughnutChart2 = new Chart(document.getElementById("doughnutChart2"), doughnutConfig2);

  // ###########################
  var myData = {
    labels: [
      "FY 15-16",
      "FY 16-17",
      "FY 17-18",
      "FY 18-19",
      "FY 19-20",
      "FY 20-21",
      "FY 21-22",
      "FY 22-23",
      "FY 23-24",
      "FY 24-25",
      "FY 25-26",
      "FY 26-27",
      "FY 27-28",
      "FY 28-29",
      "FY 15-16",
      "FY 16-17",
      "FY 17-18",
      "FY 18-19",
    ],
    datasets: [
      {
        label: "TREND LINE(INR Cr.)",
        type: "line",
        data: [
          54, 96, 204, 454, 602, 428, 576, 696, 1600, 1700, 1750, 1800,
          1750, 1800, 54, 96, 204, 454,
        ],
        borderWidth: 3,
        fill: false,
        borderColor: "#1A8AEF",
      },
      {
        label: "Net Turnover(INR Cr.)",
        fill: false,
        type: "bar",
        backgroundColor: [
          "#e5e5e5",
          "#83cc7f",
          "#e5e5e5",
          "#e5e5e5",
          "#e5e5e5",
          "#e5e5e5",
          "#83cc7f",
          "#83cc7f",
          "#83cc7f",
          "#83cc7f",
          "#83cc7f",
          "#83cc7f",
          "#83cc7f",
          "#83cc7f",
          "#83cc7f",
          "#83cc7f",
          "#83cc7f",
          "#e5e5e5",
        ],
        data: [
          54, 96, 204, 454, 602, 428, 576, 696, 1600, 1700, 1750, 1800,
          1750, 1800, 54, 96, 204, 454,
        ],
      },
    ],
  };
  const myoption = {
    maintainAspectRatio: false,
    tooltips: {
      enabled: true,
    },
    hover: {
      animationDuration: 1,
    },
    scales: {
      xAxes: [
        {
          display: true,
          scaleLabel: {
            display: true,
          },
        },
      ],
      yAxes: [
        {
          display: true,
          ticks: {
            beginAtZero: true,
            max: 2000,
          },
        },
      ],
    },
    animation: {
      duration: 1,
      onComplete: function () {
        var chartInstance = this.chart,
          ctx = chartInstance.ctx;
        ctx.textAlign = "center";
        ctx.fillStyle = "#212529";
        ctx.textBaseline = "bottom";

        this.data.datasets.forEach(function (dataset, i) {
          var meta = chartInstance.controller.getDatasetMeta(i);
          meta.data.forEach(function (bar, index) {
            var data = dataset.data[index];
            ctx.fillText(data, bar._model.x, bar._model.y - 20);
          });
        });
      },
    },
    legend: {
      // position: 'bottom', // Set the legend to appear at the bottom
      display: false,
    },
    responsive: true,
  };


  var ctx = document.getElementById("barLineChart").getContext("2d");
  var myChart = new Chart(ctx, {
    type: "bar",
    data: myData,
    options: myoption,
  });

  const chartcontainerBody = document.querySelector(".chartcontainerBody");
  const totalLabels = myChart.data.labels.length;

  if (totalLabels > 10) {
    const newWidth = 1024 + (totalLabels - 10) * 28;
    chartcontainerBody.style.width = `${newWidth}px`;
  }

  // ####################
  const barChartData = {
    labels: [
      "2023",
      "2024",
      "Ago",
      "Set",
      "Out",
      "Test",
    ],
    datasets: [
      {
        label: "Weekly Sales",
        data: [18, 12, 6, 9, 12, 3,],
        backgroundColor: [
          "rgba(207, 211, 249, 1)",
          "rgba(207, 211, 249, 1)",
          "rgba(207, 211, 249, 1)",
          "rgba(207, 211, 249, 1)",
          "rgba(105, 118, 235, 1)",
          "rgba(105, 118, 235, 1)",
        ],
        borderWidth: 0,
      },
    ],
  };

  // config
  const barCartConfig = {
    type: "bar",
    data: barChartData,
    options: {
      maintainAspectRatio: false,
      legend: {
        // position: 'bottom', // Set the legend to appear at the bottom
        display: false,
      },
      responsive: true,
      scales: {
        y: {
          beginAtZero: true,
        },
      },
    },
  };

  // render init block
  const myBarChart = new Chart(document.getElementById("myBarChart"), barCartConfig);

  const barChartBody = document.querySelector(".barChartBody");
  const totalBarLabels = myBarChart.data.labels.length;

  if (totalBarLabels > 5) {
    const newWidth = 600 + (totalBarLabels - 5) * 60;
    barChartBody.style.width = `${newWidth}px`;
  }

  // ###############  Bar chart 2 init   ###################
  const barChartData2 = {
    labels: [
      "Morning",
      "Afternoon",
      "Night",
    ],
    datasets: [
      {
        label: "Weekly Sales",
        data: [18, 12, 6,],
        backgroundColor: [
          "#83CC7F",
          "#B7BFC7",
          "#FF9900",
        ],
        borderWidth: 0,
      },
    ],
  };

  // config
  const barCartConfig2 = {
    type: "bar",
    data: barChartData2,
    options: {
      maintainAspectRatio: false,
      legend: {
        // position: 'bottom', // Set the legend to appear at the bottom
        display: false,
      },
      responsive: true,
      scales: {
        y: {
          beginAtZero: true
        }
      }
    },
  };

  // render init block
  const myBarChart2 = new Chart(document.getElementById("myBarChart2"), barCartConfig2);


  // ########## card on click open popup  ##############

  $(".openpop").click(function () {
    $(".comm-box-popup").removeClass("showpop");
    $(this).parents(".comm-box-card").find(".comm-box-popup").addClass("showpop")
  });
  $(".popclose").click(function () {
    $(this).parents(".comm-box-card").find(".comm-box-popup").removeClass("showpop")
  });

  // swiper init
  var swiper = new Swiper(".marketing-slider .mySwiper", {
    slidesPerView: 2,
    spaceBetween: 16,
    loop: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints: {
      575: {
        slidesPerView: 3,
        spaceBetween: 20,
      },
      991: {
        slidesPerView: 4,
        spaceBetween: 24,
      },
      1199: {
        slidesPerView: 6,
        spaceBetween: 30,
      },
    },
  });

})()










