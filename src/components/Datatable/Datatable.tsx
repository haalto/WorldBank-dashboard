import React from 'react'
import Header from './Header/Header'
import Country from '../../types/country'
import Row from './Row/Row'

interface Props {
  headers: string[]
  data: Country[]
}

const Datatable: React.FC<Props> = ({ headers, data }) => {

  const renderRows = () => data.map(country => <Row key={country.name}country={country}/>)
  
  return (
    <table>
      <thead>
        <Header      
          headers={headers}
        />
      </thead>
      <tbody>
        {renderRows()}
      </tbody>    
    </table>
  )
}

export default Datatable