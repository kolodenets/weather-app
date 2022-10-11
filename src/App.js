import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import ClipLoader from "react-spinners/ClipLoader";
import { IconContext } from "react-icons";
import { FcCalendar } from "react-icons/fc";

import List from './components/list/List';
import Location from './components/location/Location';
import DateInfo from './components/date/Date';
import LocationInput from './components/search/LocationInput';
import Weather from './components/weather/Weather';

import { checkDayTime, choseMainImage } from './helpers/helpers';
import './App.css';
import ApiChoise from './components/apiChoise/ApiChoise';
import Popup from './components/popup/Popup';
import CalendarForm from './components/calendarForm/CalendarForm';

const override = {
  display: "block",
  borderColor: "red",
};

function App() {
  const isLoadingSelector = useSelector(state => state.loading)
  const dayTime = useSelector(state => state.weather)
  const [activePopup, setActivePopup] = useState(false)

  const closeForm = (e) => {
    e.preventDefault()
    setActivePopup(false)
  }
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
        <List/>
        <ApiChoise />
        <IconContext.Provider value={{ style: { verticalAlign: "middle", height: '50px', width: '50px', position: 'absolute', right: '0', top: '40em', cursor: 'pointer' } }}>
          <FcCalendar onClick={() => setActivePopup(true)}/>
        </IconContext.Provider>
        <Popup active={activePopup}>
          <CalendarForm closeForm={closeForm}/>
        </Popup>
      </div>
      <div style={{backgroundColor: dayTime.now.footerBcgrColor}} className='weather-forecast'>
        <Weather/>
      </div>
    </div>
    </>
  );
}

export default App;
