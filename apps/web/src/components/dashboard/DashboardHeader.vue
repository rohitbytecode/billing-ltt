<template>
  <div class="header">
    <div>
      <h1>Dashboard</h1>
      <p>Welcome back, Admin 👋</p>
    </div>

    <div class="date-card">
      <span>{{ today }}</span>
    </div>
  </div>
</template>

<script setup lang="ts">
const today = new Date().toLocaleDateString('en-IN', {
  weekday: 'long',
  day: 'numeric',
  month: 'long',
  year: 'numeric',
});
</script>

<style scoped>
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 30px;
}

.header h1 {
  font-size: 32px;
  color: #0f4c81;
  margin-bottom: 6px;
}

.header p {
  color: #6b7280;
}

.date-card {
  background: white;
  padding: 12px 18px;
  border-radius: 12px;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.08);
  font-weight: 600;
  color: #0f4c81;
}
</style>
