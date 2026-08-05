<template>
  <MainLayout>
    <div class="dashboard">
      <DashboardHeader />
      <StatsCards />
      <RevenueChart />
      <RecentBookings />
    </div>
  </MainLayout>
</template>

<script setup lang="ts">
import MainLayout from '../../layouts/MainLayout.vue';
import DashboardHeader from '../../components/dashboard/DashboardHeader.vue';
import StatsCards from '../../components/dashboard/StatsCards.vue';
import RevenueChart from '../../components/dashboard/RevenueChart.vue';
import RecentBookings from '../../components/dashboard/RecentBookings.vue';
</script>

<style scoped>
.dashboard {
  width: 100%;
}
</style>
