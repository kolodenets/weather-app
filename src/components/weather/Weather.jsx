import React from 'react';
import DayForecast from '../dayForecast/DayForecast';
import styles from './Weather.module.css'

const Weather = () => {
  return (
    <div className={styles.container}>
      <div className={styles.today}>
        <div className={styles.image} 
          style={{backgroundImage: 'url(' + require('../../icons/day/113.png') + ')', width: '150px', height: '100px'}}></div>
        <div className={styles.dayForecast}>
          <p className={styles.day}>Today</p>
          <p  style={{fontSize: '5em'}}>12&#176;</p>
        </div>
      </div>
      
      <div className={styles.forecast}>
        <DayForecast/>
        <DayForecast/>
        <DayForecast/>
        <DayForecast/>
        <DayForecast/>
        <DayForecast/>
      </div>
    </div>
  );
};

export default Weather;