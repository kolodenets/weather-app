import { combineReducers } from 'redux';

import dateReducer from "../features/date/dateSlice";
import locationReducer from '../features/location/locationSlice';
import { weatherReducer } from '../features/weather/weatherSlice';

const rootReducer = combineReducers({
  date: dateReducer,
  location: locationReducer,
  weather: weatherReducer
})

export default rootReducer;