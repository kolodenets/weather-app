import React from "react";
import { useSelector } from "react-redux";
import PropTypes from "prop-types";

import styles from "./../weather/Weather.module.css";
import { getDayofTheWeek } from "../../helpers/helpers";

const DayForecast = ({ day }) => {
  const dateSelector = useSelector((state) => state.date);
  const serviceSelector = useSelector((state) => state.service);
  const daySelector = useSelector((state) => state.weather);
  return (
    <div className={styles.dayForecast}>
      <p
        style={{ backgroundColor: daySelector.now.dayBcgrColor }}
        className={styles.day}
      >
        {getDayofTheWeek(
          new Date(
            daySelector[day].weekday * 1000 +
            dateSelector.timeZoneOffset * 3600000
          ).getDay()
        )}
      </p>
      <img
        src={
          serviceSelector.service === "openweathermap"
            ? `https://openweathermap.org/img/wn/${daySelector[day].icon}@2x.png`
            : `https://www.weatherbit.io/static/img/icons/${daySelector[day].icon}.png`
        }
        alt="icon"
      />
      <p className={styles.degrees}>
        {Math.round(daySelector[day].temp)}&#176;
      </p>
    </div>
  );
};

DayForecast.propTypes = {
  day: PropTypes.string.isRequired,
};

export default DayForecast;
