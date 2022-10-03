import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { IconContext } from "react-icons";
import { AiOutlineSearch } from "react-icons/ai"
import { changeCity } from '../../features/location/locationSlice';
import styles from './LocationInput.module.css'

const LocationInput = () => {

  const weatherSelector = useSelector(state=> state.weather) 
  const dispatch = useDispatch()
  const [cityName, setCityname] = useState('')

  const getCityWeather = (e) => {
    e.preventDefault()
    dispatch(changeCity(cityName))
    setCityname('')
  }
  
  return (
    <form id='locationInput' className={styles.form}>
      <input 
        type="text"
        className={styles.search} 
        placeholder='Search Location...'
        value={cityName}
        onChange={(e) => setCityname(e.target.value)}
      />
      <button style={{background: weatherSelector.now.btnColor}} className={styles.submit}
      onClick={getCityWeather}
      >
        <IconContext.Provider value={{ style: { verticalAlign: 'middle' } }}>
          <AiOutlineSearch/>
        </IconContext.Provider>
      </button>
    </form>
  );
};

export default LocationInput;