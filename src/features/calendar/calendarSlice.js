const initialState = {
  tasks: {}
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
    default: 
  return state
  }
}