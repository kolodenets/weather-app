import React from 'react';
import styles from './Date.module.css'

const Date = () => {
  return (
    <div>
      <div className={styles.container}>
        <span className={styles.time}>12:30 pm</span>
        <span className={styles.date}>Monday, 2 February 2022</span>
      </div>
    </div>
  );
};

export default Date;