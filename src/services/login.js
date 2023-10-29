import { api } from '../boot/axios';

export default class Login {
  static async postLogin(data) {
    return new Promise((res, rej) => {
      api.post('/login', {}, {
        auth: {
          NOME_USUARIO: data.NOME_USUARIO,
          PASSWORD: data.PASSWORD
        },
        withCredentials: true
      })
      .then(response => res(response))
      .catch(err => rej(err.response));
    });
  }
}
