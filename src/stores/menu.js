import { defineStore } from 'pinia';

export const useMenuStore = defineStore('menuStore', {
  state: () => ({
    menuAtivo: 'Início'
  }),
  actions: {
    async updateMenu(path) {
      const title = {
        "/inicio": 'Início',
        "/pessoa": 'Pessoa',
        "/pessoa/novo": 'Inserir Pessoa',
        "/epi": 'EPI'
      }
      this.menuAtivo = title[path]
    }
  },
});
