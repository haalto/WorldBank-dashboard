import axios from 'axios'

const baseUrl: string = 'http://api.worldbank.org/v2/country/'

//Recursively fecth data from World Bank API since the API uses paginated data
export const getIndicatorByCountry = async (country: string, indicator: string, page:number=1): Promise<[]> => {
  const query = `${baseUrl}/${country}/indicator/${indicator}?page=${page}&format=json`
  const response = await axios.get(query)  
  const data = response.data

  if (data[0].pages > page) {
    return data.concat(await getIndicatorByCountry(country, indicator, page+1)) 
  } else {
    return data
  }
}