import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { IconContext } from "react-icons";
import { AiOutlineSearch } from "react-icons/ai";

import { changeCity, changeCityByWeatherBit } from "../../features/location/locationSlice";
import styles from "./LocationInput.module.css";

const LocationInput = () => {
  const [isValid, setIsValid] = useState(true)
  const apiSelector = useSelector((state) => state.api);
  const weatherSelector = useSelector((state) => state.weather);
  const dispatch = useDispatch();
  const [cityName, setCityname] = useState("");

  const getCityWeather = (e) => {
    e.preventDefault();
    const regExp = /^[а-яА-Яa-zA-Z.-]+(?:[\s-][/а-яА-Яa-zA-Z.]+)*$/gi;
    if(regExp.test(cityName.trim())) {
      setIsValid(true)
      if (apiSelector.api === "openweathermap") {
      dispatch(changeCity(cityName));
    } else {
      dispatch(changeCityByWeatherBit(cityName));
    }
    setCityname("");
    }
    else {
      setIsValid(false)
    }
  };

  return (
    <form id="locationInput" className={styles.form}>
      <input
        type="text"
        className={styles.search}
        placeholder="Search Location..."
        value={cityName}
        onChange={(e) => setCityname(e.target.value)}
        style={{borderBottom: `${isValid ? '1px #ccc solid' : '1px red solid'}`}}
      />
      <p 
        style={{display: `${isValid ? 'none' : 'block'}`}}
        className={styles.error}
        >Use letters, space, dot or dash
      </p>
      <button
        style={{ background: weatherSelector.now.btnColor }}
        className={styles.submit}
        onClick={getCityWeather}
      >
        <IconContext.Provider value={{ style: { verticalAlign: "middle" } }}>
          <AiOutlineSearch />
        </IconContext.Provider>
      </button>
    </form>
  );
};

export default LocationInput;
