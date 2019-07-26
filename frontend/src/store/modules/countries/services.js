import axios from 'axios'

export default {
  getAll() {
    return axios.get('https://restcountries.eu/rest/v2/all')
  }
}