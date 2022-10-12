
const moment = require('moment-timezone');


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
    case 'date/changeDateByWeatherBit': {
      return {
        ...state,
        hours: Number(moment().tz(action.payload.data[0].timezone).format().substring(11,13)),
        timeZoneOffset: Number(moment().tz(action.payload.data[0].timezone).format('Z').substring(0,3)),
        day: new Date(action.payload.data[0].ts*1000 + new Date().getTimezoneOffset()*60000 + Number(moment().tz(action.payload.data[0].timezone).format('Z').substring(0,3))*3600000).getDay(),
        date: moment().tz(action.payload.data[0].timezone).format().substring(8,10),
        month: moment().tz(action.payload.data[0].timezone).format().substring(5,7) - 1,
        year: moment().tz(action.payload.data[0].timezone).format().substring(0,4)
      }
    }
    default: 
  return state
  }
}