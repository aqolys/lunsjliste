<script>
import { useApp } from "@/stores";

import LunsjItem from "@/components/LunsjItem.vue";

import { ref } from "vue";

export default {
  data() {
    return {
      app: useApp(),
      isOpened: ref(false),
    };
  },
  components: {
    LunsjItem,
  },
  methods: {
    onLunsj(lunsj) {
      this.app.removeOrder(lunsj);
    },
    clearList() {
      this.app.clearOrderList();
    },
  },
};
</script>

<template>
  <div class="orders-list p-1">
    <ul>
      <li class="pb-2" v-for="(item, i) in this.app.getOrderList" :key="i">
        <LunsjItem :id="item.id" :cat="item.cat" @click="onLunsj(item)">
          {{ item.name }}
        </LunsjItem>
      </li>
    </ul>
  </div>
</template>

<style lang="scss" scoped>
.orders-list {
  height: calc(100vh - 116px);
  overflow-y: scroll;
  overflow-x: hidden;
}
</style>
