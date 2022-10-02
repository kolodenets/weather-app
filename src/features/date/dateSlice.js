const initialState = {
  hours: 10,
  min: 20,
  day: 'Monday',
  date: 2,
  month: 'February',
  year: 2022
}

export default function dateReducer(state = initialState, action) {
  switch (action.type) {
    case 'date/timeChanged': {
      return {
        ...state,
        hours: (new Date().getUTCHours() + (action.payload.timezone_offset / 3600))%24,
        day: new Date(action.payload.daily[0].dt*1000).getDay(),
        date: new Date(action.payload.daily[0].dt*1000).getDate(),
        month: new Date(action.payload.daily[0].dt*1000).getMonth(),
        year: new Date(action.payload.daily[0].dt*1000).getFullYear()
      }
    }
    default: 
  return state
  }
}