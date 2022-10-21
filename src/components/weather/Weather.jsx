import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getGeolocation } from "../../features/location/locationSlice";

import DayForecast from "../dayForecast/DayForecast";
import styles from "./Weather.module.css";

const Weather = () => {
  const apiSelector = useSelector((state) => state.service);
  const weatherSelector = useSelector((state) => state.weather);
  const dispatch = useDispatch();

  useEffect(() => {
    if (sessionStorage.getItem("persist:root")) {
      return;
    }
    try {
      dispatch(getGeolocation({coords: {
        latitude: '40.71278',
        longitude: '-74.00611'
      }}))
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function(position){
          dispatch(getGeolocation(position))
        })
      }
    } catch(err) {
      console.log(err)
    } 

  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.now}>
        <img
          src={
            apiSelector.service === "openweathermap"
              ? `https://openweathermap.org/img/wn/${weatherSelector.now.icon}@2x.png`
              : `https://www.weatherbit.io/static/img/icons/${weatherSelector.now.icon}.png`
          }
          alt="icon"
        />
        <div className={styles.dayForecast}>
          <p className={styles.day}>Now</p>
          <p className={styles.temp}>
            {Math.round(weatherSelector.now.temp)}&#176;
          </p>
        </div>
      </div>
      <div className={styles.forecast}>
        {Array(6)
          .fill(1)
          .map((_, index) => {
            return (
              <DayForecast
                key={`plusdays${index + 1}`}
                day={`plusdays${index + 1}`}
              />
            );
          })}
      </div>
    </div>
  );
};

export default Weather;
