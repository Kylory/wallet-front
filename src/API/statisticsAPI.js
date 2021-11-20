import axios from 'axios';
import { BASE_URL } from './baseURL';

const URL = BASE_URL + '/transactions'

export const transactionAPI = {
  getTransactions(token) {
    return axios({
      method: "GET",
      url: `${URL}/`,
      headers: {
        Authorization: `Bearer ${token}`,
      }
    }).then(r => r.data)
  },
  getTransactionCategories(token) {
    return axios({
      method: "GET",
      url: `${URL}/categories`,
      headers: {
        Authorization: `Bearer ${token}`,
      }
    }).then(r => r.data)
  },
}
