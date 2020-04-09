import React from 'react'
import { useHistory } from 'react-router-dom'
import styled from 'styled-components'

const Navbar: React.FC = () => {
  const history = useHistory()

  return (
    <StyledNav>
      <StyledLink onClick={()=>history.push('/')}>Home</StyledLink>
      <StyledLink onClick={()=>history.push('/countries')}>Countries</StyledLink>
    </StyledNav>
  )
}

const StyledNav = styled.nav`
  margin: 5vh;
  display: flex;
  flex-direction: row;
  font-size: 2em;
  
`
const StyledLink = styled.div`
  color: red;
  margin-left: 5vw;
`

export default Navbar