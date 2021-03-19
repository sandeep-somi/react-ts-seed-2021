import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Login from '../components/auth/Login'
import Signup from '../components/auth/Signup'

export default function AuthRoutes() {

  return (
    <Switch>
      <Route path="/auth/login" component={Login} />
      <Route path="/auth/signup" component={Signup} />
    </Switch>
  )
}