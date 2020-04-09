import React from 'react'
import Table from './components/Table/Table'
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'
import LandingPage from './pages/LandingPage/LandingPage'
import TablePage from './pages/TablePage/TablePage'
const App: React.FC = () => {

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={LandingPage}/>
        <Route path="/countries" component={TablePage}/>
        <Redirect from='*' to='/'/>
      </Switch>
    </BrowserRouter>           
  )
}

export default App