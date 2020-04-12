import React, { useState } from 'react'
import Navbar from '../../components/Navbar/Navbar'
import styled from 'styled-components'
import { LineChart, Line } from 'recharts'
import { getIndicatorByCountry } from '../../services/wbServices'
 
const ChartPage: React.FC = () => {

  //const [data, setData] = useState([])
  
  const handleSubmit = async () => {
    console.log('clicked')    
    const data = await getIndicatorByCountry('BR', 'NY.GDP.MKTP.CD')
    console.log(data)
  }

  return (    
    <div>
      <Navbar/>
      <MainWrapper>
        Charts
        <button onClick={handleSubmit}>TEST</button>
      </MainWrapper>
    </div>
  )
}

const MainWrapper = styled.div`
  padding-top: 10vh;
`

export default ChartPage