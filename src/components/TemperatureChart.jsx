import React from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend
);

export default function TemperatureChart({ temp }) {

  const predictedTemp = temp + 1.5;

  const data = {
    labels: ["Today", "Predicted Tomorrow"],
    datasets: [
      {
        label: "Temperature °C",
        data: [temp, predictedTemp],
        borderColor: "#007BA7",
        backgroundColor: "#007BA7"
      }
    ]
  };

  return <Line data={data} />;
}