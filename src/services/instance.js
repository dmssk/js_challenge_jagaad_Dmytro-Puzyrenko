import axios from 'axios'

export default {
  async get (url, payload) {
    try {
      return await axios.get(url, payload)
    } catch (err) {
      console.error(err)
    }
  }
}
