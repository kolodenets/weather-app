import { applyMiddleware, legacy_createStore as createStore,  compose} from 'redux'
import thunkMiddleware from 'redux-thunk'
import { persistStore, persistReducer } from 'redux-persist'
import sessionStorage from 'redux-persist/lib/storage/session'
import { initialState } from '../features/weather/weatherSlice'
import rootReducer from '../reducers/rootReducer'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

let preloadedState = {
  date: {
    hours: new Date().getHours(),
    min: new Date().getMinutes(),
    timeZoneOffset: -1 * new Date().getTimezoneOffset()/60,
    day: new Date().getDay(),
    date: new Date().getDate(),
    month: new Date().getMonth(),
    year: new Date().getFullYear()
  },
  location: {
    name: localStorage.getItem('name'),
    country: localStorage.getItem('country')
  },
  weather: {
    ...initialState,
    now: {
      ...initialState.now,
      view: 'clear'
    }
  }
}

const persistConfig = {
  key: 'root',
  storage: sessionStorage,
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

const asyncEnhancer = applyMiddleware(thunkMiddleware)

const store = createStore(persistedReducer, preloadedState, composeEnhancers(asyncEnhancer))

export const persistor = persistStore(store)
export default store;