import React from 'react'
import Country from '../../../types/country'

interface Props {
  country: Country
}

const Row: React.FC<Props> = ({ country }) => {
  return (
    <tr>
      <td>{country.name}</td>
      <td>{country.alpha2Code}</td>
      <td>{country.capital}</td>
      <td>{country.region}</td>
      <td>{country.subregion}</td>
      <td>{country.population}</td>
      <td>{country.area}</td>
      <td>{country.gini}</td>
    </tr>
  )
}

export default Row