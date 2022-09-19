import React from 'react';
import styles from './Weather.module.css'

const Weather = () => {
  return (
    <div className={styles.container}>
      <div style={{display: 'flex'}}>
        <img src='./../../../public/113.png'
          alt="icon"
          width='64px'
          height='64px' />
      </div>
    </div>
  );
};

export default Weather;