<template>
  <main class="login-page">
    <div class="overlay">
      <LoginForm />
    </div>
  </main>
</template>

<script setup lang="ts">
import LoginForm from '@/components/forms/LoginForm.vue';
import bg from '@/assets/login-bg.jpg';
</script>

<style scoped>
.login-page {
  position: relative;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: v-bind('`url(${bg})`');
  background-size: cover;
  background-position: center;
}
.overlay {
  position: absolute;
  inset: 0;
  background: rgba(10, 15, 25, 0.7);
}
.login-page > *:last-child {
  position: relative;
  z-index: 2;
}
</style>
