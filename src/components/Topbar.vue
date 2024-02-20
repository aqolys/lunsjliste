<script>
import { useApp } from '@/stores'

import { MagnifyingGlassIcon, Cross1Icon } from '@radix-icons/vue'
import { Input } from '@/components/ui/input'

export default {
  components: {
    Input,
    MagnifyingGlassIcon,
    Cross1Icon,
  },
  data() {
    return {
      app: useApp(),
      search: '',
      results: [],
    }
  },
  methods: {
    onChange() {
      this.app.searchLunsj(this.search)
    },
    clearInput() {
      this.search = ''
      this.app.searchLunsj('')
    },
  },
  mounted() {},
}
</script>

<template>
  <div class="fixed z-10 top-0 w-full p-1">
    <div class="relative w-full items-center">
      <div>
        <Input
          id="search"
          type="text"
          placeholder="Søk..."
          v-model="search"
          autocomplete="off"
          class="blured pl-10 text-lg h-12 bg-background"
          @input="onChange($event)"
        />
        <span
          class="absolute start-0 inset-y-0 flex items-center justify-center px-2"
        >
          <MagnifyingGlassIcon class="size-6 text-muted-foreground" />
        </span>
        <span
          class="absolute end-2 inset-y-0 flex items-center justify-center px-2"
          v-if="this.search"
          @click="clearInput"
        >
          <Cross1Icon class="size-6 text-muted-foreground" />
        </span>
      </div>
    </div>
    <ul>
      <li v-for="(item, i) in this.results" :key="i">{{ item }}</li>
    </ul>
  </div>
</template>

<style lang="scss" scoped>
@media screen and (max-width: 480px) {
  #search {
    width: calc(100vw - 8px);
  }
}
</style>
