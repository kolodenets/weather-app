const initialState = {
  tasks: {},
  today: new Date().toLocaleDateString()
}

export default function calendarReducer(state = initialState, action) {
  switch (action.type) {
    case 'calendar/addTask': {
      return {
        ...state,
        tasks: {
          ...state.tasks,
          [Object.keys(action.payload)[0]]: action.payload[Object.keys(action.payload)[0]]
        }
      }
    }
    case 'calendar/getTodaysTasks': {
      return {
        ...state,
        today: action.payload
      }
    }
    default: 
  return state
  }
}