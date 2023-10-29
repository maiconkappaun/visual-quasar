import { api } from '../boot/axios';

export default class Pessoa {
  static async getPessoa(data) {
    return new Promise((res, rej) => {
      api.get('/pessoa', data)
        .then(response => res(response.data.pessoas))
        .catch(err => rej(err.response));
    })
  }
  static async postPessoa(data) {
    return new Promise((res, rej) => {
      api.post('/pessoa', data)
        .then(response => res(response))
        .catch(err => rej(err.response));
    })
  }
}
