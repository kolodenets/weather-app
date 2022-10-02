import React from 'react';
import { useSelector } from 'react-redux';
import { addZeros, getDayofTheWeek, getMonth } from '../../helpers/helpers';
import styles from './Date.module.css'

const Date = () => {
  const dateSelector = useSelector(state => state.date)
  
  return (
    <div>
      <div className={styles.container}>
        <span className={styles.time}>
          {addZeros(dateSelector.hours)}:{addZeros(dateSelector.min)}
          </span>
        <span className={styles.date}>
          {getDayofTheWeek(dateSelector.day)}, {dateSelector.date} {getMonth(dateSelector.month)} {dateSelector.year}
          </span>
      </div>
    </div>
  );
};

export default Date;