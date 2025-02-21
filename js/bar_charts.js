const ctx = document.getElementById("myChart");

const myChart = new Chart(ctx, {
  type: "bar",
  data: {
    labels: ["Teachers", "Students", "Rooms Available", "Our Developers"],
    datasets: [
      {
        label: "Dataset Bar Chart",

        data: [21, 45, 16, 3],
        backgroundColor: [
          "rgba(255, 99, 99, 0.62)", // Red
          "rgba(54, 162, 235, 0.5)", // Blue
          "rgba(255, 206, 86, 0.5)", // Yellow
          "rgba(75, 192, 192, 0.5)", // Green
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
        ],
        borderWidth: 2,
      },
    ],
  },
  options: {
    scales: {
      x: {
        ticks: {
          font: {
            size: 16,
            weight: "bold",
          },
          textStrokeColor: "white",
        },
      },
      y: {
        ticks: {
          font: {
            size: 16,
            weight: "bold",
          },
        },
        beginAtZero: true,
      },
    },
    plugins: {
      // For the legend label
      legend: {
        labels: {
          font: {
            size: 20,
          },
        },
      },
    },
  },
});

// You can access the variables of data this way

// myChart.data.datasets[0].data = [1, 1, 1, 1];
// myChart.update();

// Linking Chart With Table
// Move this OUTSIDE the chart initialization
const barTableCells = document.querySelectorAll(
  "#table-container1 table tr:nth-child(2) td"
);
myChart.data.datasets[0].data.forEach((value, index) => {
  barTableCells[index].textContent = value;
});
