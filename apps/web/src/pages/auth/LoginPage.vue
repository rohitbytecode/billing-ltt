<template>
  <main class="login-page" :style="{ backgroundImage: `url(${bg})` }">
    <div class="overlay" />
    <LoginForm class="content" />
  </main>
</template>

<script setup lang="ts">
import LoginForm from '@/components/forms/LoginForm.vue';
import bg from '@/assets/login-bg.jpg';
</script>

<style scoped>
.login-page {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  padding: 48px 20px;
  box-sizing: border-box;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}
.overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(180deg, rgba(8, 11, 18, 0.55) 0%, rgba(8, 11, 18, 0.85) 100%);
}
.content {
  position: relative;
  z-index: 2;
}
</style>
