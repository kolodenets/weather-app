import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { changeCity,changeCityByWeatherBit } from "./../../features/location/locationSlice";
import styles from "./ApiChoise.module.css";

const ApiChoise = () => {

  const dispatch = useDispatch();
  const apiSelector = useSelector((state) => state.api);
  const locationSelector = useSelector((state) => state.location);

  async function handleClick() {
    try {
      dispatch({ type: "loading/changeIsLoading", payload: true });
      await dispatch({ type: "api/changeApi", payload: "openweathermap" });
      await dispatch(changeCity(locationSelector.name));
    } catch(err) {
      console.log(err)
    }
    finally {
      dispatch({ type: "loading/changeIsLoading", payload: false });
    }

  }
  async function handleClick2() {
    try {
      dispatch({ type: "loading/changeIsLoading", payload: true });
      await dispatch({ type: "api/changeApi", payload: "weatherbit" });
      await dispatch(changeCityByWeatherBit(locationSelector.name));
    }catch(err) {
      console.log(err)
    }
    finally {
      dispatch({ type: "loading/changeIsLoading", payload: false });
    }
  }

  return (
    <div className={styles.container}>
      Choose your service:
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
