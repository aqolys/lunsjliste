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
    <div
      class="fixed w-80 -z-50 left-2/4 top-2/4 -translate-x-1/2 -translate-y-1/2"
    >
      <div
        class="text-center"
        :class="{
          'opacity-0': app.getOrderList.length || app.activeTab === 'list',
        }"
      >
        <span class="uppercase text-2xl">XXX listen er tom XXX</span>
      </div>
      <img
        :class="{
          'opacity-90': !app.getOrderList.length && !app.activeTab === 'list',
          'opacity-5': app.getOrderList.length || app.activeTab === 'list',
        }"
        src="@/assets/sw-bg.png"
      />
    </div>

    <Home />
  </main>
</template>

<style scoped></style>
