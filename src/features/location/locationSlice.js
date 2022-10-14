
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
    case 'location/changeLocationByWeaterBit': {
      return {
        ...state,
        name: action.payload.city_name,
        country: action.payload.country_code
      }
    }
    default: 
    return state
  }
}

export function changeCity(city) {
  return async function changeCityThunk(dispatch) {
    const cityResponse = await fetch(`https://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=1&appid=b6681e3f0446bc62f33527efc7b781c5`)
    const cityData = await cityResponse.json()
    dispatch({type: 'location/changeLocation', payload: cityData[0]})
    const response = await fetch(`https://api.openweathermap.org/data/3.0/onecall?lat=${cityData[0].lat}&lon=${cityData[0].lon}&exclude=minutely,hourly,alerts&appid=b6681e3f0446bc62f33527efc7b781c5&units=metric`)
    const data = await response.json()
    dispatch({type: 'date/changeDateByOpenWeather', payload: data})
    dispatch({type: 'weather/changeWeatherForecastByOpenWeathermap', payload: data})
    if(data.current.weather[0].icon.includes('n')) {
      dispatch({type: 'weather/changeColor', payload:{btnColor: '#1b1b1b', footerBcgrColor: 'rgba(3, 3, 4, 0.7)', dayBcgrColor: 'rgba(3, 3, 4, 0.8)'} })
    } else if (data.current.weather[0].main.includes('Clear')) {
      dispatch({type: 'weather/changeColor', payload: {btnColor:'#fa6d1b', footerBcgrColor: 'rgba(124, 118, 90, 0.7)', dayBcgrColor: 'rgba(124, 118, 90, 0.8)'}})
    } else {
      dispatch({type: 'weather/changeColor', payload: {btnColor:'#695f5f', footerBcgrColor: 'rgba(34, 35, 39, 0.7)', dayBcgrColor: 'rgba(34, 35, 39, 0.8)'}})
    }
  }
}

export function changeCityByWeatherBit(city) {
  return async function changeCityThunk(dispatch) {
    try{
      const cityResponse = await fetch(`https://api.weatherbit.io/v2.0/current?city=${city}&key=a9daafad74dd41e187bc7ff21f7d074b`)
      const cityData = await cityResponse.json()
      
      const forecastResponse = await fetch(`https://api.weatherbit.io/v2.0/forecast/daily?city=${city}&key=a9daafad74dd41e187bc7ff21f7d074b`)
      const forecastData = await forecastResponse.json()
      dispatch({type: 'location/changeLocationByWeaterBit', payload: cityData.data[0]})
      dispatch({type: 'date/changeDateByWeatherBit', payload: cityData})
      dispatch({type: 'weather/changeCurrentWeatherByWeatherBit', payload: cityData})
      dispatch({type: 'weather/changeWeatherForecastByWeatherBit', payload: forecastData})
      if(cityData.data[0].weather.icon.includes('n')) {
        dispatch({type: 'weather/changeColor', payload:{btnColor: '#1b1b1b', footerBcgrColor: 'rgba(3, 3, 4, 0.7)', dayBcgrColor: 'rgba(3, 3, 4, 0.8)'} })
      } else if (cityData.data[0].weather.description.includes('Clear')) {
        dispatch({type: 'weather/changeColor', payload: {btnColor:'#fa6d1b', footerBcgrColor: 'rgba(124, 118, 90, 0.7)', dayBcgrColor: 'rgba(124, 118, 90, 0.8)'}})
      } else {
        dispatch({type: 'weather/changeColor', payload: {btnColor:'#695f5f', footerBcgrColor: 'rgba(34, 35, 39, 0.7)', dayBcgrColor: 'rgba(34, 35, 39, 0.8)'}})
      }
    } catch(err) {
      if(err.message === 'Failed to fetch') {
        alert("Your request count is over the allowed limit of 50 per day")
      } else {
        throw new Error()
      }
    }
  }
}