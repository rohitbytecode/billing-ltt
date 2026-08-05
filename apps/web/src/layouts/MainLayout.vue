<template>
  <div class="layout">
    <aside class="sidebar">
      <h2>LTTBS</h2>

      <ul>
        <li>🏠 Dashboard</li>
        <li>📅 Bookings</li>
        <li>👥 Customers</li>
        <li>🧾 Billing</li>
        <li>💰 Payments</li>
        <li>📊 Reports</li>
        <li>⚙️ Settings</li>
      </ul>
    </aside>

    <main class="content">
      <slot />
    </main>
  </div>
</template>

<style scoped>
.layout {
  display: flex;
  min-height: 100vh;
}

.sidebar {
  width: 240px;
}
.sidebar h2 {
  margin-bottom: 30px;
}

.sidebar ul {
  list-style: none;
  padding: 0;
}

.sidebar li {
  padding: 14px 0;
  cursor: pointer;
}

.sidebar li:hover {
  color: #d4af37;
}

.content {
  padding: 20px;
}
</style>
