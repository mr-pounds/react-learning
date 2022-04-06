import {applyMiddleware, combineReducers, createStore, compose} from 'redux'
import reducerThunk from 'redux-thunk'
import reducerPromise from 'redux-promise'
import bannerReducer from './banner/bannerReducer'
import bottomNavReducer from './bottomNav/bottomNavReducer'
import citySwitchReducer from './citySwitch/citySwitchReducer'
import filmsReducer from './films/filmsReducer'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage' 


const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['citySwitchReducer']  
  }

const reducer = combineReducers({
    bannerReducer,
    bottomNavReducer,
    citySwitchReducer,
    filmsReducer
})

const persistedReducer = persistReducer(persistConfig, reducer)

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(persistedReducer, /* preloadedState, */ composeEnhancers(applyMiddleware(reducerThunk, reducerPromise)))
// const store = createStore(persistedReducer, 
let persistor = persistStore(store)

export { store, persistor }