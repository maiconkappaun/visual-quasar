import { defineStore } from 'pinia';
import Login from 'src/services/login'

export const useLoginStore = defineStore('loginStore', {
  state: () => ({
    login: []
  }),
  actions: {
    async postLogin(data) {
      console.log('teste');
      this.login = await Login.postLogin({data})
    },
  },
});
