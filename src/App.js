import React from 'react';
import './App.css';
import Calendar from './components/calendar/Calendar';
import Location from './components/location/Location';
import DateInfo from './components/date/Date';
import LocationInput from './components/search/LocationInput';
import Weather from './components/weather/Weather';
import { useSelector} from 'react-redux';
import { checkDayTime } from './helpers/helpers';

function App() {
  const dayTime = useSelector(state => state.weather)
  return (
    <div className="App" style={{backgroundImage: 'url(' + require(`./images/${checkDayTime(dayTime.now.icon)}/${dayTime.now.view.toLowerCase()}.jpg`) + ')'}}>
      <div className='container'>
          <div className='date-location'>
          <DateInfo/>
          <Location/>
        </div>
        <LocationInput/>
        <Calendar/>
      </div>
      <div style={{backgroundColor: dayTime.now.footerBcgrColor}} className='weather-forecast'>
        <Weather/>
      </div>
    </div>
  );
}

export default App;
