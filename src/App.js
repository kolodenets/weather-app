import React from 'react';
import { useSelector } from 'react-redux';
import ClipLoader from "react-spinners/ClipLoader";

import Calendar from './components/calendar/Calendar';
import Location from './components/location/Location';
import DateInfo from './components/date/Date';
import LocationInput from './components/search/LocationInput';
import Weather from './components/weather/Weather';
import { checkDayTime, choseMainImage } from './helpers/helpers';
import './App.css';
import ApiChoise from './components/apiChoise/ApiChoise';

const override = {
  display: "block",
  borderColor: "red",
};

function App() {
  const isLoadingSelector = useSelector(state => state.loading)
  const dayTime = useSelector(state => state.weather)

  return (
    <>
    <div style={{display: `${isLoadingSelector.isLoading ? 'flex': 'none'}`}} className='loader'>
      <ClipLoader loading={isLoadingSelector.isLoading} cssOverride={override} size={150} aria-label="Loading Spinner" />
    </div> 
    <div className="App" style={{backgroundImage: 'url(' + require(`./images/${checkDayTime(dayTime.now.icon)}/${choseMainImage(dayTime.now.view)}.jpg`) + ')'}}>
      <div className='container'>
          <div className='date-location'>
          <DateInfo/>
          <Location/>
        </div>
        <LocationInput/>
        <Calendar/>
        <ApiChoise />
      </div>
      <div style={{backgroundColor: dayTime.now.footerBcgrColor}} className='weather-forecast'>
        <Weather/>
      </div>
    </div>
    </>
  );
}

export default App;
