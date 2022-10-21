import { combineReducers } from 'redux';

import dateReducer from "../features/date/dateSlice";
import locationReducer from '../features/location/locationSlice';
import weatherReducer  from '../features/weather/weatherSlice';
import serviceReducer from '../features/service/serviceSlice';
import loadingReducer from '../features/isLoading/isLoadingSlice';
import calendarReducer from '../features/calendar/calendarSlice';

const rootReducer = combineReducers({
  date: dateReducer,
  location: locationReducer,
  weather: weatherReducer,
  service: serviceReducer,
  loading: loadingReducer,
  calendar: calendarReducer,
})

export default rootReducer;