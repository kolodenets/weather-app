import React from 'react';
import { IconContext } from "react-icons";
import { AiOutlineSearch } from "react-icons/ai"
import styles from './LocationInput.module.css'

const LocationInput = () => {
  return (
    <form id='locationInput' className={styles.form}>
      <input 
        type="text"
        className={styles.search} 
        placeholder='Search Location...'
      />
      <button type='submit' className={styles.submit}>
        <IconContext.Provider value={{ style: { verticalAlign: 'middle' } }}>
          <AiOutlineSearch/>
        </IconContext.Provider>
      </button>
    </form>
  );
};

export default LocationInput;