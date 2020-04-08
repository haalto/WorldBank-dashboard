import React from 'react'
import HeaderInterface from '../../../types/header'


interface Props {
  headers: HeaderInterface[]
  handleSort: (header: string) => void
}

const Header: React.FC<Props> = ({ headers, handleSort }) => {

const renderHeaders = () => headers.map(header => 
  <th 
    key={header.name}
    onClick={() => handleSort(header.field)}>    
    {header.name}
  </th>
)

  return (
    <tr>
      {renderHeaders()}
    </tr>
  )
}

export default Header