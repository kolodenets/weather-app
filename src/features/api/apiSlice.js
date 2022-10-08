const initialState = {
  api: 'openweathermap'
}

export default function apiReducer(state = initialState, action) {
  switch (action.type) {
    case 'api/changeApi': {
      return {
        ...state,
        api: action.payload
      }
    }
    default: return state
  }
}