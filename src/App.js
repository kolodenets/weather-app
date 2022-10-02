import React from 'react';
import './App.css';
import Calendar from './components/calendar/Calendar';
import Location from './components/location/Location';
import Date from './components/date/Date';
import LocationInput from './components/search/LocationInput';
import Weather from './components/weather/Weather';
import { useSelector } from 'react-redux';
import { checkDayTime } from './helpers/helpers';

function App() {
  const dayTime = useSelector(state => state.weather)

  return (
    <div className="App" style={{backgroundImage: 'url(' + require(`./images/${checkDayTime(dayTime.today.icon)}/${dayTime.today.view.toLowerCase()}.jpg`) + ')'}}>
      <div className='container'>
          <div className='date-location'>
          <Date/>
          <Location/>
        </div>
        <LocationInput/>
        <Calendar/>
      </div>
      <div className='weather-forecast'>
        <Weather/>
      </div>
    </div>
  );
}

export default App;
