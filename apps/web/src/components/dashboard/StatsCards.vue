<template>
  <div class="stats-grid">
    <div class="card blue">
      <div>
        <p>Total Bookings</p>
        <h2>25</h2>
      </div>
      <span>🚌</span>
    </div>

    <div class="card green">
      <div>
        <p>Total Revenue</p>
        <h2>₹1,25,000</h2>
      </div>
      <span>💰</span>
    </div>

    <div class="card orange">
      <div>
        <p>Pending Payment</p>
        <h2>₹18,000</h2>
      </div>
      <span>⏳</span>
    </div>

    <div class="card gold">
      <div>
        <p>Total Customers</p>
        <h2>310</h2>
      </div>
      <span>👥</span>
    </div>
  </div>
</template>

<style scoped>
.stats-grid {
  display: grid;
  grid-template-columns: repeat(4, minmax(220px, 1fr));
  gap: 18px;
  margin-bottom: 20px;
}

.card {
  background: #fff;
  border-radius: 16px;
  padding: 18px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.08);
  transition: 0.25s ease;
  min-height: 110px;
}

.card:hover {
  transform: translateY(-4px);
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.12);
}

.card p {
  color: #6b7280;
  font-size: 14px;
  margin-bottom: 8px;
}

.card h2 {
  color: #0f4c81;
  font-size: 30px;
  font-weight: 700;
}

.card span {
  font-size: 34px;
}

.blue {
  border-left: 5px solid #0f4c81;
}

.green {
  border-left: 5px solid #16a34a;
}

.orange {
  border-left: 5px solid #f59e0b;
}

.gold {
  border-left: 5px solid #d4af37;
}

/* Tablet */

@media (max-width: 1100px) {
  .stats-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

/* Mobile */

@media (max-width: 700px) {
  .stats-grid {
    grid-template-columns: 1fr;
  }
}
</style>
