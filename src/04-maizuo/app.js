import React from 'react'
import Router from './router/Router'
import { Provider } from 'react-redux'
import {store, persistor} from './redux/store'
import { PersistGate } from 'redux-persist/integration/react'
import './app.css'

export default function app() {

  return (
    <Provider store={store}>
      {/* {console.log('index')} */}
      <PersistGate loading={null} persistor={persistor}>
        <Router>
        </Router>
      </PersistGate>
    </Provider>
)
}
