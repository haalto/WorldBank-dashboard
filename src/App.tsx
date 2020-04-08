import React, { useEffect, useState } from 'react'
import Datatable from './components/Datatable/Datatable'
import { getCountries } from './services/countryServices'

const App: React.FC = () => {

  const headers = ['Name', 'ICO2', 'Capital', 'Region', 'Subregion', 'Population', 'Gini']
  const [countryData, setCountryData] = useState([])
  
  useEffect(() => {
    const getData = async () => {
      const data = await getCountries()
      setCountryData(data)
      console.log(data)
    } 
    getData()
  }, [])

  return (
    <div>
      <Datatable
        headers={headers}
        data={countryData}
      />
    </div>
  )
}

export default App