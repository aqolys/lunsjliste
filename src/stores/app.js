import { defineStore } from 'pinia'

export const useApp = defineStore('app', {
  state: () => ({
    lunsj: [
      {
        id: 1,
        name: 'Bistecca Sandwich',
        cat: '🥪',
        selected: false,
      },
      {
        id: 2,
        name: 'Bocadillo Sandwich',
        cat: '🥪',
        selected: false,
      },
      {
        id: 3,
        name: 'Chevre Sandwich',
        cat: '🥪',
        selected: false,
      },
      {
        id: 4,
        name: 'Reke Sandwich',
        cat: '🥪',
        selected: false,
      },
      {
        id: 5,
        name: 'Kylling Sandwich',
        cat: '🥪',
        selected: false,
      },
      {
        id: 6,
        name: 'Cæsar Salat',
        cat: '🥬',
        selected: false,
      },
      {
        id: 7,
        name: 'Lun Chevre Salat med rødbeter',
        cat: '🥬',
        selected: false,
      },
      {
        id: 8,
        name: 'Boqueria spesial Salat',
        cat: '🥬',
        selected: false,
      },
      {
        id: 9,
        name: 'Lunsj Planke',
        cat: '🥜 🍟 🫛',
        selected: false,
      },
      {
        id: 10,
        name: 'Boqueria fjøla',
        cat: '🥜 🍟 🫛',
        selected: false,
      },
      {
        id: 11,
        name: 'Iberico-fjøl',
        cat: '🥜 🍟 🫛',
        selected: false,
      },
      {
        id: 12,
        name: 'Brød og aioli',
        cat: '🥜 🍟 🫛',
        selected: false,
      },
      {
        id: 13,
        name: 'Spanske oliven',
        cat: '🥜 🍟 🫛',
        selected: false,
      },
      {
        id: 14,
        name: 'Aspargesbønner',
        cat: '🥜 🍟 🫛',
        selected: false,
      },
      {
        id: 15,
        name: 'Pimientos de Padron',
        cat: '🥜 🍟 🫛',
        selected: false,
      },
      {
        id: 16,
        name: 'Baconsurrende dadler',
        cat: '🥜 🍟 🫛',
        selected: false,
      },
      {
        id: 17,
        name: 'Patatas Bravas',
        cat: '🥜 🍟 🫛',
        selected: false,
      },
      {
        id: 18,
        name: '​​Dulcia tomatsalat',
        cat: '🥜 🍟 🫛',
        selected: false,
      },
      {
        id: 19,
        name: '​Salchichion de bellota',
        cat: '🍗 🦐',
        selected: false,
      },
      {
        id: 20,
        name: 'Serranoskinke​',
        cat: '🍗 🦐',
        selected: false,
      },
      {
        id: 21,
        name: '​Iberico de bellota',
        cat: '🍗 🦐',
        selected: false,
      },
      {
        id: 22,
        name: '​Albondigas',
        cat: '🍗 🦐',
        selected: false,
      },
      {
        id: 23,
        name: 'Ytrefilet romesco​',
        cat: '🍗 🦐',
        selected: false,
      },
      {
        id: 24,
        name: '​Stekt chorizo',
        cat: '🍗 🦐',
        selected: false,
      },
      {
        id: 25,
        name: 'Lårfilet av kyllingч',
        cat: '🍗 🦐',
        selected: false,
      },
      {
        id: 26,
        name: '​Gambas al pil pil',
        cat: '🍗 🦐',
        selected: false,
      },
      {
        id: 27,
        name: 'Gratinert rulo de cabra',
        cat: '🧀',
        selected: false,
      },
      {
        id: 28,
        name: 'Gorgonzola piccante',
        cat: '🧀',
        selected: false,
      },
      {
        id: 29,
        name: 'Manchego',
        cat: '🧀',
        selected: false,
      },
      {
        id: 30,
        name: 'Manchego akkem curado',
        cat: '🧀',
        selected: false,
      },
      {
        id: 31,
        name: 'Baskisk ostekake',
        cat: '🍰',
        selected: false,
      },
      {
        id: 32,
        name: 'Creme catalana',
        cat: '🍰',
        selected: false,
      },
      {
        id: 33,
        name: 'Sorbetis med bær',
        cat: '🍰',
        selected: false,
      },
      {
        id: 34,
        name: 'Ukens no-bake ostekake',
        cat: '🍰',
        selected: false,
      },
      {
        id: 35,
        name: 'Cava Sangria',
        cat: '🍋 🍷',
        selected: false,
      },
      {
        id: 36,
        name: 'Rødvin Sangria',
        cat: '🍋 🍷',
        selected: false,
      },
      {
        id: 37,
        name: 'Hvitvin Sangria',
        cat: '🍋 🍷',
        selected: false,
      },
      {
        id: 38,
        name: 'Rosèvin Sangria',
        cat: '🍋 🍷',
        selected: false,
      },
      {
        id: 39,
        name: 'Boquerias Sangria',
        cat: '🍋 🍷',
        selected: false,
      },
      {
        id: 40,
        name: 'Boqueria spritz',
        cat: '🍹',
        selected: false,
      },
      {
        id: 41,
        name: 'Limoncello spritz',
        cat: '🍹',
        selected: false,
      },
      {
        id: 42,
        name: 'Raspberry limoncello',
        cat: '🍹',
        selected: false,
      },
      {
        id: 43,
        name: 'Baristo by night',
        cat: '🍹',
        selected: false,
      },
      {
        id: 44,
        name: 'Pineapple 43',
        cat: '🍹',
        selected: false,
      },
      {
        id: 45,
        name: 'Spanish gin & tonic',
        cat: '🍹',
        selected: false,
      },
      {
        id: 46,
        name: 'Pink gin',
        cat: '🍹',
        selected: false,
      },
      {
        id: 47,
        name: 'Barraquito',
        cat: '🍹',
        selected: false,
      },
      {
        id: 48,
        name: 'Lykkebobler brut nature',
        cat: '🎉 🍷',
        selected: false,
      },
      {
        id: 49,
        name: 'Campo viejo brut rose',
        cat: '🎉 🍷',
        selected: false,
      },
      {
        id: 50,
        name: 'Prelada stars cava brut rose',
        cat: '🎉 🍷',
        selected: false,
      },
      {
        id: 51,
        name: 'Peralada stars cava brute nature',
        cat: '🎉 🍷',
        selected: false,
      },
      {
        id: 52,
        name: 'Castillo peralada cava gran claustro brut nature',
        cat: '🎉 🍷',
        selected: false,
      },
      {
        id: 53,
        name: 'Marquesado reserva',
        cat: '🔴 🍷',
        selected: false,
      },
      {
        id: 54,
        name: 'Perelada 5 Finques reserva',
        cat: '🔴 🍷',
        selected: false,
      },
      {
        id: 55,
        name: 'El ilusionista',
        cat: '🔴 🍷',
        selected: false,
      },
      {
        id: 56,
        name: 'Marques de murrieta reserva',
        cat: '🔴 🍷',
        selected: false,
      },
      {
        id: 57,
        name: 'Las vinas bastardas',
        cat: '🔴 🍷',
        selected: false,
      },
      {
        id: 58,
        name: 'Emilio moro',
        cat: '🔴 🍷',
        selected: false,
      },
      {
        id: 59,
        name: 'Protos reserva​',
        cat: '🔴 🍷',
        selected: false,
      },
      {
        id: 60,
        name: 'Vina tondonia reserva​',
        cat: '🔴 🍷',
        selected: false,
      },
      {
        id: 61,
        name: 'Perelada finca espollo',
        cat: '🔴 🍷',
        selected: false,
      },
      {
        id: 62,
        name: 'Gran claustro gran reserva',
        cat: '🔴 🍷',
        selected: false,
      },
      {
        id: 63,
        name: 'Pazo de villarei',
        cat: '⚪ 🍷',
        selected: false,
      },
      {
        id: 64,
        name: 'Emilio moro el zarzal',
        cat: '⚪ 🍷',
        selected: false,
      },
      {
        id: 65,
        name: 'Pazo barrantes gran vino',
        cat: '⚪ 🍷',
        selected: false,
      },
      {
        id: 66,
        name: 'Estrella',
        cat: '🍺',
        selected: false,
      },
      {
        id: 67,
        name: 'San Miguel',
        cat: '🍺',
        selected: false,
      },
      {
        id: 68,
        name: 'Sol',
        cat: '🍺',
        selected: false,
      },
      {
        id: 69,
        name: '1664 Blanc',
        cat: '🍺',
        selected: false,
      },
      {
        id: 70,
        name: 'Carlsberg',
        cat: '🍺',
        selected: false,
      },
      {
        id: 71,
        name: 'Brooklyn Lager',
        cat: '🍺',
        selected: false,
      },
      {
        id: 72,
        name: 'Grimaas Lallin ',
        cat: '🍺',
        selected: false,
      },
      {
        id: 73,
        name: 'Grimaas Kvæntin',
        cat: '🍺',
        selected: false,
      },
      {
        id: 74,
        name: 'Grimaas Dugurd',
        cat: '🍺',
        selected: false,
      },
      {
        id: 75,
        name: 'Frydenlund 0,25',
        cat: '🍺🚰',
        selected: false,
      },
      {
        id: 76,
        name: 'Frydenlund 0,4',
        cat: '🍺🚰',
        selected: false,
      },
      {
        id: 77,
        name: '1664 Blanc',
        cat: '🚫🍷',
        selected: false,
      },
      {
        id: 78,
        name: 'San Miguel',
        cat: '🚫🍷',
        selected: false,
      },
      {
        id: 79,
        name: 'Lervig no worries ipa',
        cat: '🚫🍷',
        selected: false,
      },
      {
        id: 80,
        name: 'Lervig no worries mango',
        cat: '🚫🍷',
        selected: false,
      },
      {
        id: 81,
        name: 'Somersby lemon spritz',
        cat: '🍏 🍺',
        selected: false,
      },
      {
        id: 82,
        name: 'Somersby pære',
        cat: '🍏 🍺',
        selected: false,
      },
      {
        id: 83,
        name: 'Crabbies ginger',
        cat: '🍏 🍺',
        selected: false,
      },
      {
        id: 84,
        name: 'Crabbies raspberry',
        cat: '🍏 🍺',
        selected: false,
      },
      {
        id: 85,
        name: 'Pepsi',
        cat: '🥤',
        selected: false,
      },
      {
        id: 86,
        name: 'Pepsi max',
        cat: '🥤',
        selected: false,
      },
      {
        id: 87,
        name: '7up',
        cat: '🥤',
        selected: false,
      },
      {
        id: 88,
        name: 'Solo',
        cat: '🥤',
        selected: false,
      },
      {
        id: 89,
        name: 'Farris',
        cat: '🥤',
        selected: false,
      },
      {
        id: 90,
        name: 'Farris Lime',
        cat: '🥤',
        selected: false,
      },
      {
        id: 91,
        name: 'Eplemost',
        cat: '🥤',
        selected: false,
      },
      {
        id: 92,
        name: 'San pellegrino aranciata rossa',
        cat: '🥤',
        selected: false,
      },
      {
        id: 93,
        name: 'San pellegrino aranciata',
        cat: '🥤',
        selected: false,
      },
      {
        id: 94,
        name: 'San pellegrino limonata',
        cat: '🥤',
        selected: false,
      },
      {
        id: 95,
        name: 'Americano',
        cat: '☕',
        selected: false,
      },
      {
        id: 96,
        name: 'Cortado',
        cat: '☕',
        selected: false,
      },
      {
        id: 97,
        name: 'Capuccino',
        cat: '☕',
        selected: false,
      },
      {
        id: 98,
        name: 'Cafe latte',
        cat: '☕',
        selected: false,
      },
      {
        id: 99,
        name: 'Cafe mocca',
        cat: '☕',
        selected: false,
      },
      {
        id: 100,
        name: 'Espresso',
        cat: '☕',
        selected: false,
      },
      {
        id: 101,
        name: 'Iskaffe / Iste',
        cat: '☕',
        selected: false,
      },
    ],
    selected: [],
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
      this.list = this.lunsj.filter((item) => {
        if (item.id == payload) {
          item.selected = true
        }
      })

      this.searchResults = this.searchResults.filter(
        (item) => item.id !== payload
      )
    },

    removeOrder(payload) {
      if (this.isSearched) {
        this.searchResults.push(payload)
      }

      this.list = this.lunsj.filter((item) => {
        if (item.id == payload.id) {
          item.selected = false
        }
      })
    },

    clearOrderList() {
      this.lunsj.forEach((item) => {
        if (item.selected) {
          item.selected = false
        }
      })
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
