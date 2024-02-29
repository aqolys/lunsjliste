<script>
import { useApp } from '@/stores'

import LunsjItem from '@/components/LunsjItem.vue'

export default {
  data() {
    return {
      app: useApp(),
    }
  },
  components: {
    LunsjItem,
  },
  methods: {
    onLunsj(id) {
      this.app.removeOrder(id)
    },
    clearList() {
      this.app.clearOrderList()
    },
  },
}
</script>

<template>
  <div class="orders-list p-1">
    <div
      class="fixed w-80 -z-50 left-2/4 top-2/4 -translate-x-1/2 -translate-y-1/2"
    >
      <div
        class="text-center transition-all"
        :class="{
          'opacity-0': app.orders.length,
        }"
      >
        <span class="uppercase text-2xl">XXX listen er tom XXX</span>
      </div>
      <img
        class="transition-all"
        :class="{
          'opacity-90': !app.orders.length,
          'opacity-5': app.orders.length,
        }"
        src="@/assets/sw-bg.png"
      />
    </div>
    <ul v-auto-animate>
      <li class="pb-2" v-for="item in app.orders" :key="item">
        <LunsjItem :id="item.id" :cat="item.cat" @click="onLunsj(item.id)">
          {{ item.name }}
          <span class="text-green-400" v-if="item.count > 1">
            ({{ item.count }})</span
          >
        </LunsjItem>
      </li>
    </ul>
  </div>
</template>

<style lang="scss" scoped>
.orders-list {
  height: calc(100dvh - 100px);
  overflow-y: scroll;
  overflow-x: hidden;
}
</style>
