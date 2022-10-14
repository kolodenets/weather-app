import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from "prop-types";

import styles from './CalendarForm.module.css'

const CalendarForm = ({closeForm}) => {
  const dispatch = useDispatch()
  const [dateValue, setDateValue] = useState('')
  const [taskValue, setTaskValue] = useState('')

  const createTask = (e) => {
    e.preventDefault()
    const date = e.target[0].value
    const task = e.target[1].value
    const taskObj = {}
    taskObj[date] = task;

    if(!localStorage.getItem('tasks')) {
      localStorage.tasks = JSON.stringify(taskObj)
    } else {
      let localTasks = JSON.parse(localStorage.tasks)
      localTasks[date] = task
      localStorage.tasks = JSON.stringify(localTasks)
    }

    dispatch({type: 'calendar/addTask', payload: taskObj})
    setDateValue('')
    setTaskValue('')
  }

  const canCreate = Boolean(dateValue) && Boolean(taskValue)

  return (
    <form className={styles.form} onSubmit={createTask}>
      <label htmlFor="Date">Enter date and time:</label>
      <input  type="datetime-local" 
              id="Date" 
              name="todoDate" 
              value={dateValue} 
              onChange={(e) => setDateValue(e.target.value)} 
              min={new Date().toISOString().substring(0, 16)}/>

      <label htmlFor="todo">Enter task:</label>
      <textarea type="textarea" 
                id="todo"  
                name="todoDate" 
                value={taskValue} 
                onChange={(e) => setTaskValue(e.target.value)} 
                rows="5" 
                cols="33" 
                max={500}
                className={styles.text}/>

      <input disabled={!canCreate} type="submit" className={styles.submit} value="Create"/>
      <button onClick={closeForm} className={styles.closeBtn}>Close</button>
    </form>

  );
};

CalendarForm.propTypes = {
  closeForm: PropTypes.func,
};

export default CalendarForm;