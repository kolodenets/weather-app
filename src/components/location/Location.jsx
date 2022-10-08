import React from 'react';
import { useSelector } from 'react-redux';
import styles from './Location.module.css';
import countryCodes from '../../helpers/countries';


const Location = () => {
  const locationSelector = useSelector(state => state.location)
  return (
    <div className={styles.container}>
      <span className={styles.city} id='city'>{locationSelector.name}</span>
      <span className={styles.country} id='country'>{countryCodes[locationSelector.country]}</span>
    </div>
  );
};

export default Location;