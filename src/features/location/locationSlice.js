const initialState = {
  name: '',
  country: ''
}

export default function locationReducer(state=initialState, action) {
  switch (action.type) {
    case 'location/changeLocation': {
      return {
        ...state,
        name: action.payload.name,
        country: action.payload.country
      }
    }
    default: 
    return state
  }
}

export function changeCity(city) {
  return async function changeCityThunk(dispatch, getState) {
    console.log(getState())
    const cityResponse = await fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=1&appid=b6681e3f0446bc62f33527efc7b781c5`)
    const cityData = await cityResponse.json()
    dispatch({type: 'location/changeLocation', payload: cityData[0]})
    const response = await fetch(`https://api.openweathermap.org/data/3.0/onecall?lat=${cityData[0].lat}&lon=${cityData[0].lon}&exclude=minutely,hourly,alerts&appid=b6681e3f0446bc62f33527efc7b781c5&units=metric`)
    const data = await response.json()
    dispatch({type: 'date/timeChanged', payload: data})
    dispatch({type: 'weather/changeWeatherForecast', payload: data})
    console.log(getState())
  }
}