import React, { useEffect, useState } from 'react'
import Datatable from './components/Datatable/Datatable'
import { getCountries } from './services/countryServices'

const App: React.FC = () => {

  const headers = ['Name', 'ICO2', 'Capital', 'Region', 'Subregion', 'Population', 'Area','Gini']
  const [countryData, setCountryData] = useState([])
  const [loading, setLoading] = useState(false)  

  useEffect(() => {
    const getData = async () => {
      setLoading(true)
      const data = await getCountries()
      setCountryData(data)
      setLoading(false)
    } 
    getData()
  }, [])

  return (
    <div>
      {loading ? 'Loading country data' : <Datatable headers={headers} data={countryData}/>}      
    </div>
  )
}

export default App