import axios from 'axios'

const baseUrl: string = "https://restcountries.eu/rest/v2/all"

export const getCountries = async () => {
  const response = await axios.get(baseUrl)
  return response.data
}