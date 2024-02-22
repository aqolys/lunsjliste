<script>
import { useApp } from '@/stores'

import Home from '@/views/Home.vue'

export default {
  data() {
    return {
      app: useApp(),
    }
  },
  components: {
    Home,
  },
}
</script>

<template>
  <main class="h-full">
    <Home />
  </main>
</template>

<style scoped></style>
