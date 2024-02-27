<script>
import { useApp } from '@/stores'

export default {
  data() {
    return {
      app: useApp(),
    }
  },
}
</script>

<template>
  <div class="tab-header flex items-center justify-between">
    <span class="text-2xl pl-2">
      📌 Bestillinger ({{ app.orders.length }})
    </span>
    <span
      class="p-2 underline cursor-pointer"
      @click="app.clearOrderList"
    >
      tømme listen
    </span>
  </div>
</template>