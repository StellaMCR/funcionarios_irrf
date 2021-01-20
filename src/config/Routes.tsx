import React from "react";
import {
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import SaveEmployeeScreen from "../crud-employee/SaveEmployeeScreen";
import { EmployeeListScreen } from "../list-view/EmployeeListScreen";

export function Routes() {
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
  );
}