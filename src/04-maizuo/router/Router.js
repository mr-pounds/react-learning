import React from 'react'
import {HashRouter, Route, Redirect, Switch} from 'react-router-dom'
 
export default function Router(props) {
  return (
    <HashRouter>
      <Switch>
        <Route path="/index" component={require('../views/index/index').default} />
        <Route path="/filmDetail/:filmId" component={require('../views/fimdetail/filmdetail').default} />
        <Route path="/cinemas" component={require('../views/cinemas/cinemas').default} />
        <Route path='/center' component={require('../views/center/center').default} />
        <Route path='/citySwitch' component={require('../views/citySwitch/citySwitch').default} />
        <Redirect from="/" to="/index" exact/>
        <Route  path='' component={require('../views/404/notFound').default} />
      </Switch>
      {props.children}
    </HashRouter>
  )
}
