import React from "react";
// import { useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import {
  changeCity,
  changeCityByWeatherBit,
} from "./../../features/location/locationSlice";
import styles from "./ApiChoise.module.css";

const ApiChoise = () => {
  // const [isChecked, setIsChecked] = useState()
  const dispatch = useDispatch();
  const apiSelector = useSelector((state) => state.api);
  const locationSelector = useSelector((state) => state.location);

  async function handleClick() {
    dispatch({ type: "loading/changeIsLoading", payload: true });
    await dispatch({ type: "api/changeApi", payload: "openweathermap" });
    await dispatch(changeCity(locationSelector.name));
    dispatch({ type: "loading/changeIsLoading", payload: false });
  }
  async function handleClick2() {
    dispatch({ type: "loading/changeIsLoading", payload: true });
    await dispatch({ type: "api/changeApi", payload: "weatherbit" });
    await dispatch(changeCityByWeatherBit(locationSelector.name));
    dispatch({ type: "loading/changeIsLoading", payload: false });
  }

  return (
    <div className={styles.container}>
      <input
        type="radio"
        checked={apiSelector.api === "openweathermap" ? true : false}
        onChange={handleClick}
        className={styles.customRadio}
        name="api"
        id="openweathermap"
      />
      <label htmlFor="openweathermap">OpenWeather</label>

      <input
        type="radio"
        checked={apiSelector.api === "weatherbit" ? true : false}
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
