import { configureStore } from '@reduxjs/toolkit'
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist'
import session from 'redux-persist/lib/storage/session'
import { initialState } from '../features/weather/weatherSlice'
import rootReducer from '../reducers/rootReducer'


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
    country:'US'
  },
  weather: {
    ...initialState,
    now: {
      ...initialState.now,
      view: 'clear'
    }
  },
  service: {
    service: 'openweathermap'
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
  version: 1,
  storage: session,
}

const persistedReducer = persistReducer(persistConfig, rootReducer)


const store = configureStore({
  reducer: persistedReducer,
  preloadedState,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
})


export const persistor = persistStore(store)
export default store;