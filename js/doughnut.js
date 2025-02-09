window.onload = function () {
  const ctx = document.getElementById("myChart2");

  if (!ctx) {
    console.error("Canvas element #myChart2 not found!");
    return;
  }

  new Chart(ctx.getContext("2d"), {
    type: "doughnut",
    data: {
      labels: ["Room1", "Room2", "Room3", "Room4", "Room5", "Room6"],
      datasets: [
        {
          label: "Some value",
          data: [12, 19, 3, 5, 2, 3],
          backgroundColor: [
            "rgba(255, 99, 132, 0.6)",
            "rgba(54, 162, 235, 0.6)",
            "rgba(255, 206, 86, 0.6)",
            "rgba(75, 192, 192, 0.6)",
            "rgba(153, 102, 255, 0.6)",
            "rgba(255, 159, 64, 0.6)",
          ],
          borderColor: [
            "rgba(255, 99, 132, 1)",
            "rgba(54, 162, 235, 1)",
            "rgba(255, 206, 86, 1)",
            "rgba(75, 192, 192, 1)",
            "rgba(153, 102, 255, 1)",
            "rgba(255, 159, 64, 1)",
          ],
          borderWidth: 1,
        },
      ],
    },
    options: {
      responsive: true,
    },
  });
};
