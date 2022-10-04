import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { addZeros, getDayofTheWeek, getMonth } from "../../helpers/helpers";
import styles from "./Date.module.css";

const DateInfo = () => {
  const [mins, setMins] = useState(new Date().getMinutes())
  const dateSelector = useSelector((state) => state.date);
  const interval = setInterval(() => {
    setMins(new Date().getMinutes())
  }, 1000);
  useEffect(() => {
    interval;
    return clearInterval(interval);
  }, []);
  
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
