import React from 'react'

interface Props {
  headers: string[]
}

const Header: React.FC<Props> = ({ headers }) => {

const renderHeaders = () => headers.map(header => <th key={header}>{header}</th>)

  return (
    <tr>
      {renderHeaders()}
    </tr>
  )
}

export default Header