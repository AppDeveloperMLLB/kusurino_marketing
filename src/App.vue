<template>
  <v-app style="font-family: 'Noto Sans JP', sans-serif;">
    <AppNavbar />
    <v-main>
      <router-view />
    </v-main>
    <AppFooter />
  </v-app>
</template>

<script setup>
import AppNavbar from './components/AppNavbar.vue'
import AppFooter from './components/AppFooter.vue'
</script>

<style>
* {
  font-family: 'Noto Sans JP', sans-serif;
}

html {
  scroll-behavior: smooth;
}

.section-title {
  font-size: 2rem;
  font-weight: 700;
  letter-spacing: -0.02em;
}

.section-subtitle {
  font-size: 1.05rem;
  color: #546E7A;
  line-height: 1.8;
}
</style>
