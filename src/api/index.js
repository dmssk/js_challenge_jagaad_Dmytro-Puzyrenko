import axios from 'axios'

export async function getProducts(limit = 6, offset = 0) {
  const headers = {
    'accept-language': 'it',
    'content-type': 'application/json',
    'x-musement-currency': 'EUR',
    'x-musement-version': '3.4.0'
  }
  try {
    const {data} = await axios.get(
      `https://api.musement.com/api/v3/venues/164/activities?limit=${limit}&offset=${offset}`,
      {headers}
    )
    console.log(data)
    return data
  } catch (e) {
    console.error(e)
  }
}
