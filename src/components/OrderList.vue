<script>
import { useApp } from '@/stores'

import { SewingPinFilledIcon } from '@radix-icons/vue'
import { ChevronUpIcon } from '@radix-icons/vue'

import LunsjItem from '@/components/LunsjItem.vue'

import { ref } from 'vue'

export default {
  data() {
    return {
      app: useApp(),
      isOpened: ref(false),
      styleObject: {
        top: 'unset !important',
        bottom: '0% !important',
      },
    }
  },
  components: {
    SewingPinFilledIcon,
    ChevronUpIcon,
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
}
</script>

<template>
  <div
    class="order-list blured px-2 fixed rounded-t-lg"
    :style="this.isOpened ? this.styleObject : null"
  >
    <div
      class="order-list__heading flex justify-between items-center cursor-pointer select-none"
      @click="this.isOpened = !this.isOpened"
    >
      <span class="flex items-center text-base pl-1">
        <SewingPinFilledIcon />
        <p>
          <span class="font-bold">ordreliste</span>
          ({{ app.getOrderList.length }})
        </p>
      </span>
      <ChevronUpIcon />
    </div>
    <ul class="mb-2" v-if="app.getOrderList">
      <li v-for="(item, i) in app.getOrderList" :key="i">
        <LunsjItem :id="item.id" :cat="item.cat" @click="onLunsj(item)">
          {{ item.name }}
        </LunsjItem>
      </li>
    </ul>
    <div class="w-full flex items-center justify-center">
      <span class="p-2 underline" @click="clearList">tømme listen</span>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.order-list {
  border-color: hsl(var(--input));
  // background-color: hsl(var(--background));
  border-width: 1px;
  top: calc(100% - 45px);
  max-width: 592px;
  width: 100%;
  margin: 0 4px 0 4px;

  &__heading {
    height: 35px;
    margin: 5px 0 5px 0;
  }
}

@media screen and (max-width: 480px) {
  .order-list {
    width: calc(100vw - 8px);
  }
}
</style>
