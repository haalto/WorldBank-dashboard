import React from 'react'
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'
import LandingPage from './pages/LandingPage/LandingPage'
import TablePage from './pages/TablePage/TablePage'
import ChartPage from './pages/ChartPage/ChartPage'
const App: React.FC = () => {

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={LandingPage}/>
        <Route path="/countries" component={TablePage}/>
        <Route path="/charts" component={ChartPage}/>
        <Redirect from='*' to='/'/>
      </Switch>
    </BrowserRouter>           
  )
}

export default App