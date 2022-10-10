const weekDay = {
  weekday: '',
  temp: '',
  icon: ''
}
export const initialState = {
  now: {
    temp: '',
    icon: '',
    view: '',
    btnColor: '#1b1b1b',
    footerBcgrColor: 'rgba(3, 3, 4, 0.7)',
    dayBcgrColor: 'rgba(3, 3, 4, 0.8)'
  },
  plusdays1: Object.assign({}, weekDay),
  plusdays2: Object.assign({}, weekDay),
  plusdays3: Object.assign({}, weekDay),
  plusdays4: Object.assign({}, weekDay),
  plusdays5: Object.assign({}, weekDay),
  plusdays6: Object.assign({}, weekDay),
}

export default function weatherReducer(state = initialState, action) {
  switch (action.type) {
    case 'weather/changeWeatherForecastByOpenWeathermap': {
      return {
        ...state,
        now: {
          ...state.now,
          temp: action.payload.current.temp,
          icon: action.payload.current.weather[0].icon,
          view: action.payload.current.weather[0].main
        },
        plusdays1: {
          ...state.plusdays1,
          weekday: action.payload.daily[1].dt,
          temp: action.payload.daily[1].temp.day,
          icon: action.payload.daily[1].weather[0].icon
        },
        plusdays2: {
          ...state.plusdays2,
          weekday: action.payload.daily[2].dt,
          temp: action.payload.daily[2].temp.day,
          icon: action.payload.daily[2].weather[0].icon
        },
        plusdays3: {
          ...state.plusdays3,
          weekday: action.payload.daily[3].dt,
          temp: action.payload.daily[3].temp.day,
          icon: action.payload.daily[3].weather[0].icon
        },
        plusdays4: {
          ...state.plusdays4,
          weekday: action.payload.daily[4].dt,
          temp: action.payload.daily[4].temp.day,
          icon: action.payload.daily[4].weather[0].icon
        },
        plusdays5: {
          ...state.plusdays5,
          weekday: action.payload.daily[5].dt,
          temp: action.payload.daily[5].temp.day,
          icon: action.payload.daily[5].weather[0].icon
        },
        plusdays6: {
          ...state.plusdays6,
          weekday: action.payload.daily[6].dt,
          temp: action.payload.daily[6].temp.day,
          icon: action.payload.daily[6].weather[0].icon
        }
      }
    }
    case 'weather/changeCurrentWeatherByWeatherBit': {
      return {
        ...state,
        now: {
          ...state.now,
          temp: action.payload.data[0].temp,
          icon: action.payload.data[0].weather.icon,
          view: action.payload.data[0].weather.description
        }
      }
    }
    case 'weather/changeWeatherForecastByWeatherBit': {
      return {
        ...state,
        plusdays1: {
          ...state.plusdays1,
          weekday: action.payload.data[1].ts,
          temp: action.payload.data[1].temp,
          icon: action.payload.data[1].weather.icon
        },
        plusdays2: {
          ...state.plusdays2,
          weekday: action.payload.data[2].ts,
          temp: action.payload.data[2].temp,
          icon: action.payload.data[2].weather.icon
        },
        plusdays3: {
          ...state.plusdays3,
          weekday: action.payload.data[3].ts,
          temp: action.payload.data[3].temp,
          icon: action.payload.data[3].weather.icon
        },
        plusdays4: {
          ...state.plusdays4,
          weekday: action.payload.data[4].ts,
          temp: action.payload.data[4].temp,
          icon: action.payload.data[4].weather.icon
        },
        plusdays5: {
          ...state.plusdays5,
          weekday: action.payload.data[5].ts,
          temp: action.payload.data[5].temp,
          icon: action.payload.data[5].weather.icon
        },
        plusdays6: {
          ...state.plusdays6,
          weekday: action.payload.data[6].ts,
          temp: action.payload.data[6].temp,
          icon: action.payload.data[6].weather.icon
        },
      }
    }
    case 'weather/changeColor': {
      return {
        ...state,
        now: {
          ...state.now,
          btnColor: action.payload.btnColor,
          footerBcgrColor: action.payload.footerBcgrColor,
          dayBcgrColor: action.payload.dayBcgrColor
        }
      }
    }
    default:
      return state
  }
}