import { defineStore } from 'pinia';
import Epi from 'src/services/epi'

export const useEpiStore = defineStore('epiStore', {
  state: () => ({
    listaEpi: [],
    counter : 0,
  }),
  actions: {
    increment() {
      this.counter = 1;
    },
    async getEpi(data) {
      this.listaEpi = await Epi.getEpi(data)
    },
    async postEpi(data) {
      await Epi.postEpi(data)
    }
  },
});
