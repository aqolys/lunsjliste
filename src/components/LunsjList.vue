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
      this.app.addLunsj(id)
    },
  },
}
</script>

<template>
  <div class="p-1 pt-12 pb-16">
    <ul v-if="this.app.isSearched">
      <li class="pt-2" v-for="(item, i) in this.app.searchResults" :key="i">
        <LunsjItem :id="item.id" :cat="item.cat" @click="onLunsj(item.id)">
          {{ item.name }}
        </LunsjItem>
      </li>
    </ul>
    <ul v-if="!this.app.isSearched">
      <li class="pt-2" v-for="(item, i) in this.app.getLunsjList" :key="i">
        <LunsjItem :id="item.id" :cat="item.cat" @click="onLunsj(item.id)">
          {{ item.name }}
        </LunsjItem>
      </li>
    </ul>
  </div>
</template>

<style lang="scss" scoped></style>
