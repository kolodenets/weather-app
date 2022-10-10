import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeCity, changeCityByWeatherBit } from "../../features/location/locationSlice";
import { addZeros, getDayofTheWeek, getMonth } from "../../helpers/helpers";
import styles from "./Date.module.css";

const DateInfo = () => {
  const dispatch = useDispatch()
  const [mins, setMins] = useState(new Date().getMinutes())
  const dateSelector = useSelector((state) => state.date);
  const apiSelector = useSelector((state) => state.api);
  const citySelector = useSelector((state) => state.location);

  const interval = setInterval(() => {
    setMins(new Date().getMinutes())
  }, 1000);

  useEffect(() => {
    interval;
    if(mins === 0) {
      if(apiSelector.api === 'openweathermap'){
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
