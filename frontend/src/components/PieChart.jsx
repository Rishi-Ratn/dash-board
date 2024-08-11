import { Chart, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from "react-chartjs-2";

// Register necessary components
Chart.register(ArcElement, Tooltip, Legend);

const labels = ["Speaking", "Reading", "Writing", "Listening"];
const data = {
  labels: labels,
  datasets: [
    {
      label: "Learning time (in min)",
      backgroundColor: ["rgb(255, 99, 132)", "rgb(54, 162, 235)", "rgb(255, 206, 86)", "rgb(75, 192, 192)"],
      borderColor: ["rgb(255, 99, 132)", "rgb(54, 162, 235)", "rgb(255, 206, 86)", "rgb(75, 192, 192)"],
      data: [10 , 20 , 30, 45],
    },
  ],
};

const PieChart = () => {
  return (
    <div>
      <Pie data={data} />
    </div>
  );
};

export default PieChart;
