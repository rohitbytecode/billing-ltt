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
  font-size: 28px !important;
  font-weight: 700 !important;
  color: #f8fafc !important;
  letter-spacing: -0.02em;
  line-height: 1.3;
}
.subtitle {
  margin: 0;
  color: #94a3b8;
  font-size: 14px;
}

.login-card {
  padding: 32px;
  border-radius: 18px;
  background: linear-gradient(135deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.04) 100%);
  backdrop-filter: blur(24px) saturate(180%);
  -webkit-backdrop-filter: blur(24px) saturate(180%);
  border: 1px solid transparent;
  background-clip: padding-box;
  position: relative;
  box-shadow:
    0 24px 60px rgba(0, 0, 0, 0.45),
    0 2px 8px rgba(0, 0, 0, 0.2),
    inset 0 1px 0 rgba(255, 255, 255, 0.15),
    inset 0 0 0 1px rgba(255, 255, 255, 0.06);
  box-sizing: border-box;
  transition:
    box-shadow 0.3s ease,
    transform 0.3s ease;
}

.login-card::before {
  content: '';
  position: absolute;
  inset: 0;
  border-radius: inherit;
  padding: 1px;
  background: linear-gradient(
    135deg,
    rgba(255, 255, 255, 0.35),
    rgba(255, 255, 255, 0.05) 40%,
    rgba(255, 255, 255, 0.15)
  );
  -webkit-mask:
    linear-gradient(#fff 0 0) content-box,
    linear-gradient(#fff 0 0);
  -webkit-mask-composite: xor;
  mask-composite: exclude;
  pointer-events: none;
}

.login-card:hover {
  box-shadow:
    0 28px 70px rgba(0, 0, 0, 0.5),
    0 2px 8px rgba(0, 0, 0, 0.25),
    inset 0 1px 0 rgba(255, 255, 255, 0.2),
    inset 0 0 0 1px rgba(255, 255, 255, 0.08);
  transform: translateY(-2px);
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

/* Button */
button {
  width: 100%;
  height: 46px;
  border: none;
  border-radius: 10px;
  background: linear-gradient(135deg, #fde047 0%, #eab308 50%, #ca8a04 100%);
  color: #1c1400;
  font-size: 14px;
  font-weight: 600;
  letter-spacing: 0.02em;
  cursor: pointer;
  box-sizing: border-box;
  position: relative;
  overflow: hidden;
  box-shadow:
    0 1px 0 rgba(255, 255, 255, 0.4) inset,
    0 -2px 4px rgba(0, 0, 0, 0.15) inset,
    0 8px 20px rgba(234, 179, 8, 0.35),
    0 2px 4px rgba(0, 0, 0, 0.15);
  transition:
    background 0.2s ease,
    box-shadow 0.2s ease,
    transform 0.1s ease;
}

button::before {
  content: '';
  position: absolute;
  inset: 0;
  background: linear-gradient(
    120deg,
    transparent 30%,
    rgba(255, 255, 255, 0.35) 50%,
    transparent 70%
  );
  transform: translateX(-100%);
  transition: transform 0.5s ease;
}

button:hover {
  background: linear-gradient(135deg, #fef08a 0%, #facc15 50%, #eab308 100%);
  box-shadow:
    0 1px 0 rgba(255, 255, 255, 0.5) inset,
    0 -2px 4px rgba(0, 0, 0, 0.15) inset,
    0 10px 26px rgba(234, 179, 8, 0.5),
    0 3px 6px rgba(0, 0, 0, 0.2);
  transform: translateY(-1px);
}

button:hover::before {
  transform: translateX(100%);
}

button:active {
  transform: scale(0.98) translateY(0);
  box-shadow:
    0 1px 0 rgba(255, 255, 255, 0.3) inset,
    0 -1px 2px rgba(0, 0, 0, 0.2) inset,
    0 4px 10px rgba(234, 179, 8, 0.3);
}

button:focus-visible {
  outline: 2px solid #fde047;
  outline-offset: 2px;
}
</style>
