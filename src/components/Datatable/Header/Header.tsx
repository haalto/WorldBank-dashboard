import React from 'react'

interface Props {
  headers: string[]
}

const Header: React.FC<Props> = ({ headers }) => {

const renderHeaders = () => headers.map(h => <th key={h}>{h}</th>)

  return (
    <tr>
      {renderHeaders()}
    </tr>
  )
}

export default Header