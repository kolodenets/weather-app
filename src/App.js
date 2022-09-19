import React from 'react';
import './App.css';
import Calendar from './components/calendar/Calendar';
import Location from './components/location/Location';
import Date from './components/date/Date';
import LocationInput from './components/search/LocationInput';
import Weather from './components/weather/Weather';

function App() {
  return (
    <div className="App" style={{background: 'url(./images/day/clear.jpg)'}}>
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
