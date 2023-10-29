import { api } from '../boot/axios';

export default class Epi {
  static async getEpi(data) {
    return new Promise((res, rej) => {
      api.get('/epi', data)
        .then(response => res(response.data.epi))
        .catch(err => rej(err.response));
    })
  }
  static async postEpi(data) {
    return new Promise((res, rej) => {
      api.post('/epi', data)
        .then(response => res(response), increment())
        .catch(err => rej(err.response));
    })
  }
}
