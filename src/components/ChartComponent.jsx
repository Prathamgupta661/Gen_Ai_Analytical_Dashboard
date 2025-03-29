import React from "react";
import { Line } from "react-chartjs-2";
import { Box, Typography } from "@mui/material";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

function ChartComponent({ data }) {
  return (
    <Box>
      <Typography variant="h6" align="center" gutterBottom>
        Data Visualization
      </Typography>
      <Line data={data} />
    </Box>
  );
}

export default ChartComponent;
