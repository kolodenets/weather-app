import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { changeCity,changeCityByWeatherBit } from "./../../features/location/locationSlice";
import { changeService } from './../../features/service/serviceSlice'
import styles from "./ApiChoise.module.css";

const ApiChoise = () => {

  const dispatch = useDispatch();
  const apiSelector = useSelector((state) => state.service);
  const locationSelector = useSelector((state) => state.location);


  function handleClick() {
    dispatch(changeService('openweathermap'))
    dispatch(changeCity(locationSelector.name))
  }

  function handleClick2() {
    dispatch(changeService('weatherbit'))
    dispatch(changeCityByWeatherBit(locationSelector.name))
  }


  return (
    <div className={styles.container}>
      Choose your service:
      <input
        type="radio"
        checked={apiSelector.service === "openweathermap" ? true : false}
        onChange={handleClick}
        className={styles.customRadio}
        name="api"
        id="openweathermap"
      />
      <label htmlFor="openweathermap">OpenWeather</label>

      <input
        type="radio"
        checked={apiSelector.service === "weatherbit" ? true : false}
        onChange={handleClick2}
        className={styles.customRadio}
        name="api"
        id="weatherbit"
      />
      <label htmlFor="weatherbit">Weatherbit</label>
    </div>
  );
};

export default ApiChoise;
