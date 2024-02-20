import { defineStore } from 'pinia'

export const useApp = defineStore('app', {
  state: () => ({
    cat: ['Sandwicher', 'Salater'],
    lunsj: [
      {
        name: 'Bistecca Sandwich',
        cat: 'Sandwicher',
      },
      {
        name: 'Bocadillo Sandwich',
        cat: 'Sandwicher',
      },
      {
        name: 'Chevre Sandwich',
        cat: 'Sandwicher',
      },
      {
        name: 'Reke Sandwich',
        cat: 'Sandwicher',
      },
      {
        name: 'Reke Sandwich',
        cat: 'Sandwicher',
      },
      {
        name: 'Kylling Sandwich',
        cat: 'Sandwicher',
      },
      {
        name: 'Cæsar Salat',
        cat: 'Salater',
      },
      {
        name: 'Lun Chevre Salat med rødbeter',
        cat: 'Salater',
      },
      {
        name: 'Boqueria spesial Salat',
        cat: 'Salater',
      },
    ],
    selected: [],
    filter: '',
  }),
  actions: {
    searchLunsj() {},
  },
  getters: {
    getLunsjList() {
      if (!this.filter) {
        return this.lunsj
      } else {
        return this.lunsj.filter((item) => {
          if (item.cat === 'Sandwicher') return item
        })
      }
    },
  },
})
