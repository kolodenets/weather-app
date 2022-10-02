import { applyMiddleware, legacy_createStore as createStore} from 'redux'
import thunkMiddleware from 'redux-thunk'
import { initialState } from '../features/weather/weatherSlice'
import rootReducer from '../reducers/rootReducer'

let preloadedState = {
  date: {
    hours: new Date().getHours(),
    min: new Date().getMinutes(),
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
    today: {
      ...initialState.today,
      view: 'clear'
    }
  }
}
const asyncEnhancer = applyMiddleware(thunkMiddleware)
const store = createStore(rootReducer, preloadedState, asyncEnhancer)

export default store;