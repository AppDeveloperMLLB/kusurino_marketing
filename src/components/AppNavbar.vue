<template>
  <v-app-bar
    :elevation="scrolled ? 2 : 0"
    :color="scrolled ? 'white' : 'transparent'"
    height="70"
    style="transition: all 0.3s ease;"
  >
    <v-container class="d-flex align-center pa-0">
      <router-link to="/" class="text-decoration-none d-flex align-center">
        <v-icon icon="mdi-shield-plus" color="primary" size="32" class="mr-2" />
        <span
          class="text-h6 font-weight-bold"
          :style="{ color: scrolled ? '#0277BD' : 'white', letterSpacing: '-0.02em' }"
        >
          クスリノ
        </span>
      </router-link>

      <v-spacer />

      <!-- Desktop nav -->
      <div class="d-none d-md-flex align-center ga-2">
        <v-btn
          v-for="item in navItems"
          :key="item.label"
          :to="item.to"
          variant="text"
          :color="scrolled ? 'primary' : 'white'"
          class="font-weight-medium"
        >
          {{ item.label }}
        </v-btn>
        <v-btn
          color="primary"
          variant="elevated"
          rounded="pill"
          class="ml-2 font-weight-bold"
          href="#download"
        >
          <v-icon start icon="mdi-download" />
          ダウンロード
        </v-btn>
      </div>

      <!-- Mobile nav -->
      <v-app-bar-nav-icon
        class="d-flex d-md-none"
        :color="scrolled ? 'primary' : 'white'"
        @click="drawer = true"
      />
    </v-container>
  </v-app-bar>

  <!-- Mobile drawer -->
  <v-navigation-drawer v-model="drawer" temporary location="right" width="280">
    <v-list-item class="py-4">
      <template #prepend>
        <v-icon icon="mdi-shield-plus" color="primary" size="28" />
      </template>
      <v-list-item-title class="text-h6 font-weight-bold text-primary">クスリノ</v-list-item-title>
    </v-list-item>
    <v-divider />
    <v-list nav>
      <v-list-item
        v-for="item in navItems"
        :key="item.label"
        :to="item.to"
        :prepend-icon="item.icon"
        :title="item.label"
        color="primary"
        rounded="lg"
        @click="drawer = false"
      />
    </v-list>
    <template #append>
      <div class="pa-4">
        <v-btn color="primary" block rounded="pill" class="font-weight-bold" href="#download" @click="drawer = false">
          <v-icon start icon="mdi-download" />
          ダウンロード
        </v-btn>
      </div>
    </template>
  </v-navigation-drawer>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const scrolled = ref(false)
const drawer = ref(false)

const navItems = [
  { label: 'ホーム', to: '/', icon: 'mdi-home-outline' },
  { label: '機能', to: '/#features', icon: 'mdi-star-outline' },
  { label: 'サポート', to: '/support', icon: 'mdi-help-circle-outline' },
]

function handleScroll() {
  scrolled.value = window.scrollY > 40
}

onMounted(() => window.addEventListener('scroll', handleScroll))
onUnmounted(() => window.removeEventListener('scroll', handleScroll))
</script>
