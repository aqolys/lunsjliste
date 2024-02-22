import { defineStore } from 'pinia'
import { lunsjList } from './data'

export const useApp = defineStore('app', {
  state: () => ({
    lunsj: lunsjList,
    orders: [],
    isSearched: false,
    searchResults: [],
    searchInputValue: '',
    activeTab: 'orders',
  }),
  actions: {
    searchLunsj() {
      if (this.searchInputValue) {
        this.isSearched = true
        this.searchResults = this.lunsj.filter(
          (item) =>
            item.name
              .toLowerCase()
              .indexOf(this.searchInputValue.toLowerCase()) > -1
        )
      } else {
        this.searchResults = []
        this.isSearched = false
      }
    },

    addLunsj(payload) {
      this.lunsj.filter((item) => {
        if (
          item.id === payload &&
          this.orders.filter((order) => order.id === payload).length === 0
        ) {
          this.orders.push({ ...item, count: 1 })
        } else if (
          item.id === payload &&
          this.orders.filter((order) => order.id === payload).length > 0
        ) {
          this.orders.filter((order) => {
            if (order.id === payload) order.count += 1
          })
        }
      })
    },

    removeOrder(payload) {
      this.orders = this.orders.filter((order) => {
        if (order.id !== payload) return order
      })
    },

    clearOrderList() {
      this.orders = []
    },

    changeActiveTab(payload) {
      this.activeTab = payload
    },
  },
  getters: {
    getLunsjList() {
      if (!this.isSearched) {
        return this.lunsj.filter((item) => {
          if (!item.selected) return item
        })
      }
    },
    getOrderList() {
      return this.lunsj.filter((item) => {
        if (item.selected) return item
      })
    },
  },
})
