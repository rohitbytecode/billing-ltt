<template>
  <div class="login-wrapper">
    <div class="logo">
      <span>🛡</span>
    </div>
    <h1>Welcome Back</h1>
    <p class="subtitle">Secure access to LTTBS dashboard.</p>

    <div class="login-card">
      <div class="field">
        <label>Username</label>
        <input type="text" placeholder="Your username" />
      </div>

      <div class="field">
        <label>Password</label>
        <input type="password" placeholder="********" />
      </div>

      <div class="options">
        <label>Remember Me</label>
        <a href="#">Forgot Password?</a>
      </div>

      <button>Sign In</button>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped>
.login-wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.login-card {
  width: 430px;
  padding: 42px;
  border-radius: 22px;
  background: rgba(25, 32, 43, 0.72);
  backdrop-filter: blur(18px);
  border: 1px solid rgba(255, 255, 255, 0.08);
  box-shadow: 0 20px 50px rgba(0, 0, 0, 0.55);
  color: white;
}

.logo {
  width: 60px;
  height: 60px;
  margin: 0 auto 22px;
  border-radius: 50%;
  background: rgba(234, 179, 8, 0.18);
  border: 2px solid #eab308;
  display: flex;
  align-items: center;
  justify-content: center;
}
.logo span {
  font-size: 26px;
}
h1 {
  margin: 0;
  text-align: center;
  font-size: 40px;
  font-weight: 700;
}
.subtitle {
  margin: 14px 0 36px;
  text-align: center;
  color: #cbd5e1;
  line-height: 1.6;
  font-size: 15px;
}
.field {
  margin-bottom: 20px;
}
.field label {
  display: block;
  margin-bottom: 8px;
  font-size: 13px;
  font-weight: 600;
  color: #d1d5db;
}
.field input {
  height: 54px;
  border-radius: 12px;
  background: rgba(255, 255, 255, 0.06);
  border: 1px solid rgba(255, 255, 255, 0.12);
  transition: 0.25s;
  color: white;
}
.field input::placeholder {
  color: #94a3b8;
}
.field input:focus {
  border-color: #eab308;
  box-shadow: 0 0 0 4px rgba(234, 179, 8, 0.15);
}

.options {
  margin: 24px 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 14px;
}
.options a {
  color: #eab308;
  text-decoration: none;
}
button {
  height: 54px;
  border-radius: 12px;
  background: #eab308;
  font-size: 15px;
  transition: 0.25s;
}

button:hover {
  transform: translateY(-1px);
  background: #facc15;
}
</style>
