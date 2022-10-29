import { createSlice, createAsyncThunk  } from "@reduxjs/toolkit"

const initialState = {
  name: '',
  country: ''
}

const locationSlice = createSlice({
  name: 'location',
  initialState,
  reducers: {
    
  },
  extraReducers: (builder) => {
    builder
      .addCase(changeCity.fulfilled, (state, action) => {
        state.name = action.payload[0][0].name
        state.country = action.payload[0][0].country
      })
      .addCase(changeCityByWeatherBit.fulfilled, (state, action) => {
        state.name = action.payload[0].data[0].city_name
        state.country = action.payload[0].data[0].country_code
      })
      .addCase(getGeolocation.fulfilled, (state, action) => {
        state.name = action.payload[1][0].name
        state.country = action.payload[1][0].country
      })
  }
})
export const {changeLocation, changeLocationByWeaterBit} = locationSlice.actions

export default locationSlice.reducer

export const changeCity = createAsyncThunk('location/changeCity', async (city) => {
  const cityResponse = await fetch(`https://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=1&appid=b6681e3f0446bc62f33527efc7b781c5`)
  const cityData = await cityResponse.json()
  const response = await fetch(`https://api.openweathermap.org/data/3.0/onecall?lat=${cityData[0].lat}&lon=${cityData[0].lon}&exclude=minutely,hourly,alerts&appid=b6681e3f0446bc62f33527efc7b781c5&units=metric`)
  const data = await response.json()
  return [cityData, data]
})


export const changeCityByWeatherBit = createAsyncThunk('location/changeCityByWeatherBit', async (city) => {
  const cityResponse = await fetch(`https://api.weatherbit.io/v2.0/current?city=${city}&key=a9daafad74dd41e187bc7ff21f7d074b`)
  const cityData = await cityResponse.json()
  const forecastResponse = await fetch(`https://api.weatherbit.io/v2.0/forecast/daily?city=${city}&key=a9daafad74dd41e187bc7ff21f7d074b`)
  const forecastData = await forecastResponse.json()
  return [cityData, forecastData]
})

export const getGeolocation = createAsyncThunk('location/getGeolocation', async (position) => {
  const response = await fetch(`https://api.openweathermap.org/data/3.0/onecall?lat=${position.coords.latitude}&lon=${position.coords.longitude}&exclude=minutely,hourly,alerts&appid=b6681e3f0446bc62f33527efc7b781c5&units=metric`)
  const data = await response.json()
  const locationResponse = await fetch(`https://api.openweathermap.org/geo/1.0/reverse?lat=${position.coords.latitude}&lon=${position.coords.longitude}&limit=1&appid=b6681e3f0446bc62f33527efc7b781c5`)
  const location = await locationResponse.json()
  return [data, location]
})
