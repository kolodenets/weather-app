import React from "react";
import { useSelector } from "react-redux";

import { isTaskDateEqualToday } from "../../helpers/helpers";
import Task from "../task/Task";
import styles from './List.module.css'


const List = () => {
  const tasksSelector = useSelector(state => state.calendar)
  const tasks = tasksSelector.tasks;
  const tasksKeys = Object.keys(tasks).sort()

  return (
    <div className={styles.listWrapper}>
      {tasksKeys.map(key => {
        if(isTaskDateEqualToday(key)) {
          return (
            <Task key={key} time={key.substring(11,16)} task={tasksSelector.tasks[key]}/>
          )
        }
      })}
    </div>
  )
};

export default List;
