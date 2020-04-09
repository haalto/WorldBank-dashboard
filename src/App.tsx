import React, { useEffect, useState, useMemo } from 'react'
import { getCountries } from './services/countryServices'
import Table from './components/Table/Table'
const App: React.FC = () => {

  const columns = useMemo(
    () => [
      { Header: 'Name', accessor: 'name' },
      { Header: 'ICO2', accessor: 'alpha2Code' },
      { Header: 'Capital', accessor: 'capital' },
      { Header: 'Region', accessor: 'region' },
      { Header: 'Subregion', accessor: 'subregion' },
      { Header: 'Population', accessor: 'population' },
      { Header: 'Area', accessor: 'area' },
      { Header: 'Gini', accessor: 'gini' },
    ],
    []
  )

  const [countryData, setCountryData] = useState([])
  const [loading, setLoading] = useState(false)  

  useEffect(() => {
    const getData = async () => {
      setLoading(true)
      const data = await getCountries()
      setCountryData(data)
      setLoading(false)
      console.log(data)
    } 
    getData()
  }, [])

  return (
    <div>            
      {loading ? 'Loading country data' : <Table columns={columns} data={countryData}/>}
    </div>
  )
}

export default App