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
        this.searchResults = this.lunsj.filter((item) => {
          if (
            item.name
              .toLowerCase()
              .indexOf(this.searchInputValue.toLowerCase()) > -1 &&
            !item.selected
          ) {
            return item
          }
        })
      } else {
        this.searchResults = []
        this.isSearched = false
      }
    },

    addLunsj(payload) {
      this.lunsj.filter((item) => {
        if (item.id === payload) {
          item.selected = true
          this.orders.push(item)
        }
      })

      if (this.isSearched) {
        this.searchResults = this.searchResults.filter(
          (item) => item.id !== payload
        )
      }
    },

    removeOrder(payload) {
      this.orders = this.orders.filter((order) => {
        if (order.id !== payload) return order

        this.lunsj.filter((item) => {
          if (item.id === order.id) item.selected = false
        })
      })

      if (this.isSearched) this.searchLunsj()
    },

    clearOrderList() {
      this.orders.filter((order) => {
        this.lunsj.filter((item) => {
          if (item.id === order.id) item.selected = false
        })
      })

      if (this.isSearched) this.searchLunsj()

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
