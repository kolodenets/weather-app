import React from 'react';
import styles from './Location.module.css'

const Location = () => {
  return (
    <div className={styles.container}>
      <span className={styles.city}>Mozyr</span>
      <span className={styles.country}>Belarus</span>
    </div>
  );
};

export default Location;