import React from 'react'
import { Redirect, Route, Switch } from 'react-router-dom'

import SaveEmployeeScreen from '../components/crud-employee/SaveEmployeeScreen'
import { EmployeeListScreen } from '../components/list-view/EmployeeListScreen'

export function Routes () {
  return (
        <Switch>
          <Route path="/list">
            <EmployeeListScreen/>
          </Route>
          <Route path="/create">
            <SaveEmployeeScreen/>
          </Route>
          <Route path="/edit/:id">
            <SaveEmployeeScreen/>
          </Route>
          <Route path="/edit" exact>
            <Redirect to={'/list'}/>
          </Route>
          <Route path="/">
            <Redirect to={'/list'}/>
          </Route>
        </Switch>
  )
}
