import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import DayForecast from '../dayForecast/DayForecast';
import styles from './Weather.module.css'

const Weather = () => {
  const weatherSelector = useSelector(state=> state.weather)
  const dispatch = useDispatch()
  useEffect(()=> {
    fetch(`https://api.openweathermap.org/data/3.0/onecall?lat=${localStorage.getItem('lat')}&lon=${localStorage.getItem('lon')}&exclude=minutely,hourly,alerts&appid=b6681e3f0446bc62f33527efc7b781c5&units=metric`)
    .then(response => response.json())
    .then(data=> dispatch({type: 'weather/changeWeatherForecast', payload: data}))
  }, [])
  return (
    <div className={styles.container}>
      <div className={styles.today}>
        <img src={`http://openweathermap.org/img/wn/${weatherSelector.today.icon}@2x.png`} 
        alt="icon" 
        style={{width: '150px'}}/>
        <div className={styles.dayForecast}>
          <p className={styles.day}>Now</p>
          <p  style={{fontSize: '5em'}}>{Math.round(weatherSelector.today.temp)}&#176;</p>
        </div>
      </div>
      <div className={styles.forecast}>
        {Array(6).fill(1).map((_, index) => {return <DayForecast key={`plusdays${index+1}`} day={`plusdays${index+1}`}/>})}
      </div>
    </div>
  );
};

export default Weather;