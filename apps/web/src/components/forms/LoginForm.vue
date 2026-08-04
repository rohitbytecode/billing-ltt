<template>
  <div class="login-wrapper">
    <div class="brand">
      <div class="logo">
        <span>🛡</span>
      </div>
      <h1>Welcome back</h1>
      <p class="subtitle">Secure access to LTTBS dashboard.</p>
    </div>

    <div class="login-card">
      <div class="field">
        <label for="username">Username</label>
        <input id="username" type="text" placeholder="Your username" autocomplete="username" />
      </div>

      <div class="field">
        <label for="password">Password</label>
        <input
          id="password"
          type="password"
          placeholder="Enter your password"
          autocomplete="current-password"
        />
      </div>

      <div class="options">
        <label class="remember">
          <input type="checkbox" />
          <span>Remember me</span>
        </label>
        <a href="#">Forgot password?</a>
      </div>

      <button type="submit">Sign in</button>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped>
.login-wrapper {
  width: 100%;
  max-width: 400px;
  margin: 0 auto;
}

.brand {
  text-align: center;
  margin-bottom: 28px;
}
.logo {
  width: 52px;
  height: 52px;
  margin: 0 auto 18px;
  border-radius: 50%;
  background: rgba(234, 179, 8, 0.14);
  border: 1px solid rgba(234, 179, 8, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
}
.logo span {
  font-size: 22px;
}
h1 {
  margin: 0 0 8px;
  font-size: 28px;
  font-weight: 700;
  color: #f8fafc;
  letter-spacing: -0.02em;
}
.subtitle {
  margin: 0;
  color: #94a3b8;
  font-size: 14px;
}

.login-card {
  padding: 32px;
  border-radius: 18px;
  background: rgba(17, 22, 32, 0.85);
  backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.08);
  box-shadow: 0 24px 60px rgba(0, 0, 0, 0.5);
  box-sizing: border-box;
}

.field {
  margin-bottom: 18px;
}
.field label {
  display: block;
  margin-bottom: 7px;
  font-size: 13px;
  font-weight: 500;
  color: #cbd5e1;
}
.field input {
  width: 100%;
  height: 46px;
  padding: 0 14px;
  border-radius: 10px;
  background: rgba(255, 255, 255, 0.04);
  border: 1px solid rgba(255, 255, 255, 0.1);
  color: #f1f5f9;
  font-size: 14px;
  box-sizing: border-box;
  outline: none;
  transition:
    border-color 0.15s ease,
    box-shadow 0.15s ease;
}
.field input::placeholder {
  color: #64748b;
}
.field input:hover {
  border-color: rgba(255, 255, 255, 0.18);
}
.field input:focus {
  border-color: #eab308;
  box-shadow: 0 0 0 3px rgba(234, 179, 8, 0.15);
}
.field input:-webkit-autofill {
  -webkit-text-fill-color: #f1f5f9;
  -webkit-box-shadow: 0 0 0 1000px #171d29 inset;
  transition: background-color 9999s ease-in-out 0s;
}

.options {
  margin: 4px 0 24px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 13px;
}
.remember {
  display: flex;
  align-items: center;
  gap: 7px;
  color: #94a3b8;
  cursor: pointer;
}
.remember input[type='checkbox'] {
  width: 15px;
  height: 15px;
  accent-color: #eab308;
  cursor: pointer;
}
.options a {
  color: #eab308;
  text-decoration: none;
}
.options a:hover {
  text-decoration: underline;
}

button {
  width: 100%;
  height: 46px;
  border: none;
  border-radius: 10px;
  background: #eab308;
  color: #1c1400;
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
  box-sizing: border-box;
  transition:
    background 0.15s ease,
    transform 0.1s ease;
}
button:hover {
  background: #facc15;
}
button:active {
  transform: scale(0.98);
}
</style>
