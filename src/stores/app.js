import { defineStore } from "pinia";

export const useApp = defineStore("app", {
  state: () => ({
    lunsj: [
      {
        id: 1,
        name: "Bistecca Sandwich",
        cat: "Sandwich",
      },
      {
        id: 2,
        name: "Bocadillo Sandwich",
        cat: "Sandwich",
      },
      {
        id: 3,
        name: "Chevre Sandwich",
        cat: "Sandwich",
      },
      {
        id: 4,
        name: "Reke Sandwich",
        cat: "Sandwich",
      },
      {
        id: 5,
        name: "Kylling Sandwich",
        cat: "Sandwich",
      },
      {
        id: 6,
        name: "Cæsar Salat",
        cat: "Sandwich",
      },
      {
        id: 7,
        name: "Lun Chevre Salat med rødbeter",
        cat: "Salat",
      },
      {
        id: 8,
        name: "Boqueria spesial Salat",
        cat: "Salat",
      },
    ],
    selected: [],
    searchResults: [],
    filter: "",
  }),
  actions: {
    searchLunsj(payload) {
      this.searchResults = this.lunsj.filter(
        (item) => item.name.toLowerCase().indexOf(payload.toLowerCase()) > -1
      );

      console.log(`payload: ${payload}\nresult: ${this.searchResults}`);
    },

    addLunsj(payload) {
      this.selected.push(payload);
      this.lunsj.splice(this.lunsj.indexOf(payload), 1);
      console.log(this.lunsj);
    },
  },
  getters: {
    getLunsjList() {
      if (!this.filter) {
        return this.lunsj;
      } else {
        return this.lunsj.filter((item) => {
          if (item.cat === "Sandwicher") return item;
        });
      }
    },
  },
});
