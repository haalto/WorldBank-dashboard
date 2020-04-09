import React, { useEffect, useState, useMemo } from 'react'
import { useTable , useSortBy } from 'react-table'
import { CellProps } from 'react-table'
import { getCountries } from '../../services/countryServices'

const Table: React.FC = () => {

  const columns = useMemo(
    () => [
      { 
        Header: 'Name', 
        accessor: 'name', 
        Cell: (
          { cell: { value } }: CellProps<object> ) => 
            <span onClick={()=>console.log('clicked')}>
              {value}
            </span> 
      },
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

  const [data, setData] = useState([])
  const [loading, setLoading] = useState(false)  

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
  } = useTable(
    { columns, data },
    useSortBy
  )

  useEffect(() => {
    const getData = async () => {
      setLoading(true)
      const data = await getCountries()
      setData(data)
      setLoading(false)
      console.log(data)
    } 
    getData()
  }, [])

  if (loading) {
    return <div>Loading data</div>
  }

  return (
    <table {...getTableProps()}>
      <thead>
        {headerGroups.map(headerGroup => (
          <tr {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map(column => (
              <th {...column.getHeaderProps(column.getSortByToggleProps())}>
                {column.render('Header')}             
              </th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody {...getTableBodyProps()}>
        {rows.map(row => {
          prepareRow(row)
          return (
            <tr {...row.getRowProps()}>
              {row.cells.map(cell => {
                return (
                  <td {...cell.getCellProps()}>
                    {cell.render('Cell')}                                  
                  </td>)
              })}
            </tr>
          )
        })}
      </tbody>
    </table>
  )
}

export default Table