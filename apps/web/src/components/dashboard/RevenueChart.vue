<template>
  <div class="chart-card">
    <div class="header">
      <h3>Revenue Analytics</h3>
      <span>This Month</span>
    </div>

    <div class="chart-container">
      <Line :data="chartData" :options="chartOptions" />
    </div>
  </div>
</template>

<script setup lang="ts">
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
} from 'chart.js';

import { Line } from 'vue-chartjs';

ChartJS.register(Title, Tooltip, Legend, LineElement, CategoryScale, LinearScale, PointElement);

const chartData = {
  labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],

  datasets: [
    {
      label: 'Revenue',
      data: [25000, 42000, 38000, 60000, 75000, 95000],

      borderColor: '#0F4C81',
      backgroundColor: '#0F4C81',
      tension: 0.4,
      fill: false,
    },
  ],
};

const chartOptions = {
  responsive: true,
  maintainAspectRatio: false,

  plugins: {
    legend: {
      display: false,
    },
  },

  scales: {
    y: {
      beginAtZero: true,
    },
  },
};
</script>

<style scoped>
.chart-card {
  margin-top: 20px;
  background: #fff;
  border-radius: 16px;
  padding: 20px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.08);
}

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 15px;
}

.header h3 {
  color: #0f4c81;
  font-size: 20px;
}

.header span {
  color: #666;
  font-size: 14px;
}

.chart-container {
  position: relative;
  width: 100%;
  height: 300px;
}
</style>
