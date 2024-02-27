import { defineStore } from 'pinia'
import { lunsjList } from '@/data/lunches'

export const useApp = defineStore('app', {
  state: () => ({
    lunsj: lunsjList,
    orders: [],
    searchInputValue: '',
    activeTab: 'orders',
  }),
  actions: {
    addLunsj(id) {
      const order = this.lunsj.find(el => el.id === id)

      // Eсли ордер по переданному id не найден
      // или уже добавлен список ордеров - выходим из функции.
      if (!order || this.orders.find(el => el.id === id)) return
      
      this.orders.push(order)
    },

    removeOrder(id) {
      // Фильтруем список, исключая искомый ордер.
      this.orders = this.orders.filter(el => el.id !== id)
    },

    clearOrderList() {
      this.orders = []
    },

    changeActiveTab(tab) {
      this.activeTab = tab
    },
  },
})
