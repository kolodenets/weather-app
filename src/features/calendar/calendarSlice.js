import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  tasks: {},
  today: new Date().toLocaleDateString()
}

const calendarSlice = createSlice({
  name: 'calendar',
  initialState,
  reducers: {
    addTask(state, action) {
      state.tasks[Object.keys(action.payload)[0]] = action.payload[Object.keys(action.payload)[0]]
    },
    getTodaysTasks(state, action) {
      state.today = action.payload
    }
  }
})

export const {addTask, getTodaysTasks} = calendarSlice.actions;
export default calendarSlice.reducer

