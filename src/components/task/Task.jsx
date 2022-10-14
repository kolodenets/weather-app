import React from 'react';
import { useSelector } from 'react-redux';

import PropTypes from "prop-types";
import styles from './Task.module.css'

const Task = ({time, task}) => {
  const weatherSelector = useSelector(state => state.weather)
  return (
    <div className={styles.wrapper}>
      <div style={{backgroundColor: `${weatherSelector.now.dayBcgrColor}`}} className={styles.time}>{time}</div>
      <div className={styles.task}><p>{task}</p></div>
    </div>
  );
};

Task.propTypes = {
  time: PropTypes.string,
  task: PropTypes.any,
};

export default Task;