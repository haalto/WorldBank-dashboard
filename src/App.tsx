import React, { useEffect, useState } from 'react'
import Datatable from './components/Datatable/Datatable'
import { getCountries } from './services/countryServices'

const App: React.FC = () => {

  const headers = [
    {name: 'Name',  field: 'name'}, 
    {name: 'ICO2',  field: 'alpha2code'},
    {name: 'Capital',  field: 'capital'},
    {name: 'Region',  field: 'region'},
    {name: 'Subregion',  field: 'subregion'},
    {name: 'Population',  field: 'population'},
    {name: 'Area',  field: 'area'},
    {name: 'Gini',  field: 'gini'}
  ]

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