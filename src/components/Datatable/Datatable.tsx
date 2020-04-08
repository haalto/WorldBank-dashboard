import React from 'react'
import Header from './Header/Header'

interface Props {
  headers: string[]
  data: string[]
}

const Datatable: React.FC<Props> = ({ headers, data }) => {
  return (
    <table>
      <Header
        headers={headers}
      />

    </table>
  )
}

export default Datatable