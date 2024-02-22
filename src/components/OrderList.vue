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
    onLunsj(lunsj) {
      this.app.removeOrder(lunsj)
    },
    clearList() {
      this.app.clearOrderList()
    },
  },
  mounted() {
    console.log(this.app.getOrderList.length)
  },
}
</script>

<template>
  <div class="orders-list p-1">
    <ul v-if="app.getOrderList.length">
      <li class="pb-2" v-for="(item, i) in app.getOrderList" :key="i">
        <LunsjItem :id="item.id" :cat="item.cat" @click="onLunsj(item)">
          {{ item.name }}
        </LunsjItem>
      </li>
    </ul>
  </div>
</template>

<style lang="scss" scoped>
.orders-list {
  height: calc(100dvh - 116px);
  overflow-y: scroll;
  overflow-x: hidden;
}
</style>
