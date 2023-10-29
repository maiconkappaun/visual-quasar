import { defineStore } from 'pinia';
import Pessoa from 'src/services/pessoa'

export const usePessoaStore = defineStore('pessoaStore', {
  state: () => ({
    listaPessoa: [],
    counter: 0,
  }),
  actions: {
    increment() {
      this.counter++;
    },
    async getPessoa(data) {
      this.listaPessoa = await Pessoa.getPessoa(data)
    },
    async postPessoa(data) {
      await Pessoa.postPessoa(data)
    }
  },
});
