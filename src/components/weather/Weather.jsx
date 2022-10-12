import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import DayForecast from "../dayForecast/DayForecast";
import styles from "./Weather.module.css";

const Weather = () => {
  const apiSelector = useSelector((state) => state.api);
  const weatherSelector = useSelector((state) => state.weather);
  const dispatch = useDispatch();

  useEffect(() => {
    if (sessionStorage.getItem("persist:root")) {
      return;
    }

    fetch(
      `https://api.openweathermap.org/data/3.0/onecall?lat=${localStorage.getItem("lat")}&lon=${localStorage.getItem("lon")}&exclude=minutely,hourly,alerts&appid=b6681e3f0446bc62f33527efc7b781c5&units=metric`)
      .then((response) => response.json())
      .then((data) =>
        dispatch({
          type: "weather/changeWeatherForecastByOpenWeathermap",
          payload: data,
        })
      );
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.now}>
        <img
          src={
            apiSelector.api === "openweathermap"
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
