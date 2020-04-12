import React, { useState } from 'react'
import Navbar from '../../components/Navbar/Navbar'
import styled from 'styled-components'
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip } from 'recharts'
import { getIndicatorByCountry } from '../../services/wbServices'

interface IDataObject {
  value: number
}

const ChartPage: React.FC = () => {

  const [data, setData] = useState<IDataObject[]>([])
  
  const renderLineChart = (
    <LineChart width={1200} height={400} data={data}>
      <Line type="monotone" dataKey="value" stroke="#8884d8"/>
      <CartesianGrid stroke="#ccc" />
      <XAxis dataKey="date" />
      <YAxis/>
      <Tooltip/>
    </LineChart>
  ) 

  const reduceValueSize = (data: IDataObject[]) => {
    const reducedData: IDataObject[] = []
    for (let item of data) {
      if (item.value !== 0) {
        item.value = item.value/1000000000        
      }
      reducedData.push(item)
    }
    return reducedData
  }

  const handleDataRequest = async (country: string = 'FI', indicator: string = 'NY.GDP.MKTP.CD') => {      
    try {
      const responseData = await getIndicatorByCountry(country, indicator)
      const filteredData = responseData.filter((_, i) => i % 2 === 1)
      const mergedData = filteredData.concat.apply([], [...filteredData]).reverse()
      mergedData.pop()
      const reducedData = reduceValueSize(mergedData)
      setData(reducedData)
    }
    catch (e) {
      console.log(e)
    }  
  }

  return (    
    <div>
      <Navbar/>
      <MainWrapper>
        Finland GDP in billions $
        <button onClick={()=>handleDataRequest()}>Render</button>
        {renderLineChart}        
      </MainWrapper>
    </div>
  )
}

const MainWrapper = styled.div`
  padding: 10vw;
`

export default ChartPage