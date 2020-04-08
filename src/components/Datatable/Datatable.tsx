import React from 'react'
import Header from './Header/Header'
import CountryInterface from '../../types/country'
import Row from './Row/Row'
import { sortBy } from 'lodash'
import HeaderInterface from '../../types/header'

interface Props {
  headers: HeaderInterface[]
  data: CountryInterface[]
}

const Datatable: React.FC<Props> = ({ headers, data }) => {

  const renderRows = () => data.map(country => <Row key={country.name}country={country}/>)
  
  const handleSort = (header: string) => {
    console.log(header)
    data = sortBy(data, header, 'asc')
  }

  return (
    <table>
      <thead>
        <Header      
          headers={headers}
          handleSort={handleSort}
        />
      </thead>
      <tbody>
        {renderRows()}
      </tbody>    
    </table>
  )
}

export default Datatable