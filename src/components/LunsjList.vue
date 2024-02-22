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
  <div class="lunsj-list p-1">
    <ul v-auto-animate v-if="app.isSearched">
      <li class="pb-2" v-for="item in app.searchResults" :key="item">
        <LunsjItem :id="item.id" :cat="item.cat" @click="onLunsj(item.id)">
          {{ item.name }}
        </LunsjItem>
      </li>
    </ul>
    <ul v-auto-animate v-else>
      <li class="pb-2" v-for="item in app.getLunsjList" :key="item">
        <LunsjItem :id="item.id" :cat="item.cat" @click="onLunsj(item.id)">
          {{ item.name }}
        </LunsjItem>
      </li>
    </ul>
    <!-- <RecycleScroller
      :items="app.getLunsjList"
      :item-size="8"
      :emitUpdate="true"
      key-field="id"
      v-slot="{ item }"
      v-auto-animate
      v-else
    >
      <LunsjItem
        class="pb-2"
        :id="item.id"
        :cat="item.cat"
        @click="onLunsj(item.id)"
      >
        {{ item.name }}
      </LunsjItem>
    </RecycleScroller> -->
  </div>
</template>

<style lang="scss" scoped>
.lunsj-list {
  height: calc(100dvh - 116px);
  overflow-y: scroll;
  overflow-x: hidden;
}
</style>
