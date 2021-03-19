import React from 'react'
import { Route, Switch, Redirect, BrowserRouter as Router } from 'react-router-dom'
import lazyLoad from '../utils/cache'

const AuthRoutes = lazyLoad(() => import(/* webpackChunkName: 'home' */ './auth'))
const DashboardRoutes = lazyLoad(() => import(/* webpackChunkName: 'dashboard */ './dashboard'))

export default function Routes() {

  return (
    <Router>
      <Switch>
        <Route exact path="/" component={DashboardRoutes} />
        <Route path="/auth" component={AuthRoutes} />
      </Switch>
    </Router>
  )
}