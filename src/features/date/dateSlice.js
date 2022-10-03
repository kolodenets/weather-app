const initialState = {
  hours: 10,
  min: 20,
  timeZoneOffset: 0,
  day: 'Monday',
  date: 2,
  month: 'February',
  year: 2022
}

export default function dateReducer(state = initialState, action) {
  switch (action.type) {
    case 'date/changeDate': {
      return {
        ...state,
        hours: (new Date().getUTCHours() + (action.payload.timezone_offset / 3600))%24,
        timeZoneOffset: action.payload.timezone_offset / 3600,
        day: new Date(action.payload.daily[0].dt*1000).getDay(),
        date: new Date(action.payload.daily[0].dt*1000).getDate(),
        month: new Date(action.payload.daily[0].dt*1000).getMonth(),
        year: new Date(action.payload.daily[0].dt*1000).getFullYear()
      }
    }
    case 'date/changeTime': {
      return {
        ...state,
        hours:(new Date().getUTCHours() + state.timeZoneOffset)%24, 
        min: new Date().getMinutes()
      }
    }
    default: 
  return state
  }
}