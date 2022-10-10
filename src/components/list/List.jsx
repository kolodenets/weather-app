import React from "react";
import { useSelector } from "react-redux";
import { isTaskDateEqualToday } from "../../helpers/helpers";
// import styles from "./List.module.css";

const List = () => {
  const tasksSelector = useSelector(state => state.calendar)
  const tasks = tasksSelector.tasks;
  const tasksKeys = Object.keys(tasks).sort()

  return (
    <>
      {tasksKeys.map(key => {
        if(isTaskDateEqualToday(key)) {
          return (
            <div key={key}>{key.substring(11,16)} : {tasksSelector.tasks[key]}</div>
          )
        }
      })}
    </>
  )
};

export default List;
