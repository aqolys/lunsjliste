<script>
import { useApp } from '@/stores'
import LunsjItem from '@/components/LunsjItem.vue'

export default {
  props: {
    name: String
  },
  data() {
    return {
      app: useApp(),
    }
  },
  components: {
    LunsjItem,
  },
  computed: {
    searchInput() {
      return this.app.searchInputValue
    },
    // Блюда, которые еще не выбраны.
    availableItems() {
      return this.app.lunsj.filter(el => {
        // Список айдишников выбранных блюд.
        const orders = this.app.orders.map(({ id }) => id)

        // Оставляем только те элементы,
        // которые не содержатся в списке выбранных блюд.
        return !orders.includes(el.id)
      })
    },
    // Блюда, отфильтрованные по поисковой строке.
    filteredItems() {
      // trim() убирает лишние пробелы из начала и конца строки.
      const search = this.searchInput.trim().toLowerCase()
      
      // Если поисковая строка пуста - возвращаем полный список.
      if (!search) return this.availableItems
      
      return this.availableItems.filter(el => {
        return el.name.toLowerCase().includes(search)
      })
    },
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
    <ul v-auto-animate>
      <li class="pb-2" v-for="item in filteredItems" :key="item">
        <LunsjItem :id="item.id" :cat="item.cat" @click="onLunsj(item.id)">
          {{ item.name }}
        </LunsjItem>
      </li>
    </ul>
  </div>
</template>

<style lang="scss" scoped>
.lunsj-list {
  height: calc(100dvh - 116px);
  overflow-y: scroll;
  overflow-x: hidden;
}
</style>
