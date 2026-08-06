<template>
  <div class="recent-card">
    <div class="header">
      <h3>Recent Bookings</h3>

      <button>View All</button>
    </div>

    <table>
      <thead>
        <tr>
          <th>Customer</th>
          <th>Destination</th>
          <th>Amount</th>
          <th>Status</th>
        </tr>
      </thead>

      <tbody>
        <tr>
          <td>Raj Patel</td>
          <td>Goa</td>
          <td>₹25,000</td>
          <td><span class="confirmed">Confirmed</span></td>
        </tr>

        <tr>
          <td>Meet Shah</td>
          <td>Kashmir</td>
          <td>₹40,000</td>
          <td><span class="pending">Pending</span></td>
        </tr>

        <tr>
          <td>Riya Patel</td>
          <td>Manali</td>
          <td>₹18,500</td>
          <td><span class="confirmed">Confirmed</span></td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<style scoped>
.recent-card {
  margin-top: 25px;
  background: white;
  border-radius: 18px;
  padding: 25px;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.08);
}

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
}

.header button {
  background: #0f4c81;
  color: white;
  border: none;
  padding: 10px 18px;
  border-radius: 10px;
  cursor: pointer;
}

table {
  width: 100%;
  border-collapse: collapse;
}

th {
  background: #f8fafc;
  padding: 14px;
  text-align: left;
}

td {
  padding: 16px 14px;
  border-bottom: 1px solid #eee;
}

.confirmed {
  background: #dcfce7;
  color: #15803d;
  padding: 6px 12px;
  border-radius: 20px;
  font-size: 13px;
}

.pending {
  background: #fef3c7;
  color: #b45309;
  padding: 6px 12px;
  border-radius: 20px;
  font-size: 13px;
}
</style>
