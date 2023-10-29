import { defineStore } from 'pinia';
// import Pessoa from 'src/services/pessoa'
import Epi from 'src/services/epi'


// export const usePessoaStore = defineStore('counter', {
//   state: () => ({
//     counter: 0,
//     listaPessoa: []
//   }),
//   actions: {
//     increment() {
//       this.counter++;
//     },
//     async getPessoa(data) {
//       this.listaPessoa = await Pessoa.getPessoa(data)
//     },
//     async postPessoa(data) {
//       this.listaPessoa = await Pessoa.postPessoa(data)
//     }
//   },
// });

export const useEpiStore = defineStore('counter', {
  state: () => ({
    counter: 0,
    listaEpi: []
  }),
  actions: {
    increment() {
      this.counter++;
    },
    async getEpi(data) {
      this.listaEpi = await Epi.getEpi(data)
    },
    async postEpi(data) {
      this.listaEpi = await Epi.postEpi(data)
    }
  },
});
