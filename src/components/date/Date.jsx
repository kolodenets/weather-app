import React, { useState,useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { changeCity, changeCityByWeatherBit } from "../../features/location/locationSlice";
import { addZeros, getDayofTheWeek, getMonth } from "../../helpers/helpers";
import styles from "./Date.module.css";

const DateInfo = () => {
  const dispatch = useDispatch()
  const [mins, setMins] = useState(new Date().getMinutes())
  const dateSelector = useSelector((state) => state.date);
  const serviceSelector = useSelector((state) => state.service);
  const citySelector = useSelector((state) => state.location);
  const interval = setInterval(() => {
    setMins(new Date().getMinutes())
  }, 2000);

  useEffect(() => {
    interval;
    if(mins === 0) {
      if(new Date().toLocaleTimeString().substring(0,2) === '00') {
          dispatch({type: 'calendar/getTodaysTasks', payload: new Date().toLocaleDateString()})
        }
      if(serviceSelector.service === 'openweathermap'){
        dispatch(changeCity(citySelector.name))
      }
      else {
        dispatch(changeCityByWeatherBit(citySelector.name))
      }
    }
    return clearInterval(interval);
  }, [mins]);
  
  return (
    <div>
      <div className={styles.container}>
        <span className={styles.time}>
          {addZeros(dateSelector.hours)}:{addZeros(mins)}
        </span>
        <span className={styles.date}>
          {getDayofTheWeek(dateSelector.day)}, {dateSelector.date}{" "}
          {getMonth(dateSelector.month)} {dateSelector.year}
        </span>
      </div>
    </div>
  );
};

export default DateInfo;
