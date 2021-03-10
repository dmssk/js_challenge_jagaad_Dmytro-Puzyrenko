import instance from './../instance'

export default {
  async get (url, request) {
    const headers = {
      'accept-language': 'it',
      'content-type': 'application/json',
      'x-musement-currency': 'EUR',
      'x-musement-version': '3.4.0'
    }
    try {
      const payload = {
        headers: request.headers || headers,
        params: request.params
      }
      const { data } = await instance.get(url, payload)
      return data
    } catch (e) {
      console.error(e)
    }
  }
}
