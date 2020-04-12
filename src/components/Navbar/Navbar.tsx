import React from 'react'
import { useHistory } from 'react-router-dom'
import styled from 'styled-components'

const Navbar: React.FC = () => {
  const history = useHistory()

  return (
    <StyledNav>
      <StyledLink onClick={()=>history.push('/')}>Home</StyledLink>
      <StyledLink onClick={()=>history.push('/countries')}>Countries</StyledLink>
      <StyledLink onClick={()=>history.push('/charts')}>Charts</StyledLink>
    </StyledNav>
  )
}

const StyledNav = styled.nav`
  display: flex;
  flex-direction: row;
  font-size: 1.5em;
  position: fixed;
  overflow: hidden;
  width: 100%;
  background-color: #333;
`
const StyledLink = styled.div`
  color: white;
  margin-left: 5vw;
  cursor: pointer;
`

export default Navbar