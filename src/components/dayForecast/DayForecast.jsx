import React from 'react';
import PropTypes from "prop-types";
import { useSelector } from 'react-redux';
import styles from './../weather/Weather.module.css'
import { getDayofTheWeek } from '../../helpers/helpers';

const DayForecast = ({ day }) => {
  const daySelector = useSelector(state => state.weather)
  return (
    <div className={styles.dayForecast}>
      <p className={styles.day}
        >{getDayofTheWeek(new Date(daySelector[day].weekday*1000).getDay())}
      </p>
      <img src={`http://openweathermap.org/img/wn/${daySelector[day].icon}@2x.png`} 
      alt="icon" 
      style={{width: '80px'}}/>
      <p className={styles.degrees}
      >
        {Math.round(daySelector[day].temp)}&#176;
      </p>
    </div>
  );
};

DayForecast.propTypes = {
  day: PropTypes.string.isRequired
}

export default DayForecast;