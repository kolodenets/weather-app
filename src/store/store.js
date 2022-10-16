import { applyMiddleware, legacy_createStore as createStore,  compose} from 'redux'
import thunkMiddleware from 'redux-thunk'
import { persistStore, persistReducer } from 'redux-persist'
import session from 'redux-persist/es/storage/session' 
import { initialState } from '../features/weather/weatherSlice'
import rootReducer from '../reducers/rootReducer'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

let preloadedState = {
  date: {
    hours: new Date().getUTCHours() - 4,
    min: new Date().getMinutes(),
    timeZoneOffset: -4,
    day: new Date().getDay(),
    date: new Date().getDate(),
    month: new Date().getMonth(),
    year: new Date().getFullYear()
  },
  location: {
    name: 'New-York',
    country: 'US'
  },
  weather: {
    ...initialState,
    now: {
      ...initialState.now,
      view: 'clear'
    }
  },
  api: {
    api: 'openweathermap'
  },
  loading: {
    isloading: false
  },
  calendar: {
    tasks: localStorage.tasks ? JSON.parse(localStorage.tasks) : {},
    today: new Date().toLocaleDateString()
  }
}

const persistConfig = {
  key: 'root',
  storage: session,
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

const asyncEnhancer = applyMiddleware(thunkMiddleware)

const store = createStore(persistedReducer, preloadedState, composeEnhancers(asyncEnhancer))

export const persistor = persistStore(store)
export default store;