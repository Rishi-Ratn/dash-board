import { Chart, LineElement, PointElement, LineController, CategoryScale, LinearScale, Tooltip, Legend } from 'chart.js';
import { Line } from "react-chartjs-2";

// Register necessary components
Chart.register(LineElement, PointElement, LineController, CategoryScale, LinearScale, Tooltip, Legend);

const labels = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
const data = {
  labels: labels,
  datasets: [
    {
      label: "Monthly Progress",
      backgroundColor: "rgb(255, 99, 132)",
      borderColor: "rgb(255, 99, 132)",
      data: [0, 2, 5, 10, 15, 20, 30, 45, 50, 60, 70, 90],
    },
  ],
};

const LineChart = () => {
  return (
    <div>
      <Line data={data} />
    </div>
  );
};

export default LineChart;
