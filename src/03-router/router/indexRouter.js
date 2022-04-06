import React from 'react'
import {HashRouter, Redirect, Route, Switch} from 'react-router-dom'


export default function indexRouter() {
  return (
    <HashRouter>
        <Switch>
            <Route path="/center" component={require('../views/center').default}/>
            <Route path='/films' component={require('../views/films').default}/>
            <Route path='/cinemas' component={require('../views/cinemas').default}/>

            <Redirect from='/' to='/films' exact/>
            <Route component={require('../views/notFound').default}/>
        </Switch>
    </HashRouter>
  )
}
