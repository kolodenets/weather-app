import React from 'react';
import styles from './../weather/Weather.module.css'

const DayForecast = () => {
  return (
    <div className={styles.dayForecast}>
      <p className={styles.day}>Tue</p>
      <div className={styles.image} style={{backgroundImage: 'url(' + require('../../icons/day/116.png') + ')', width: '80px', height: '80px'}}></div>
      <p className={styles.degrees}>15&#176;</p>
    </div>
  );
};

export default DayForecast;