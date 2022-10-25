import { createSlice} from "@reduxjs/toolkit"
import { changeCity, changeCityByWeatherBit, getGeolocation } from "../location/locationSlice"

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

const weatherSlice = createSlice({
  name: 'weather',
  initialState,
  reducers: {
  
  },
  extraReducers: (builder) => {
    builder
    .addCase(changeCity.fulfilled, (state, action) => {
      state.now.temp = action.payload[1].current.temp
      state.now.icon = action.payload[1].current.weather[0].icon
      state.now.view = action.payload[1].current.weather[0].main

      state.plusdays1.weekday = action.payload[1].daily[1].dt
      state.plusdays1.temp = action.payload[1].daily[1].temp.day
      state.plusdays1.icon = action.payload[1].daily[1].weather[0].icon

      state.plusdays2.weekday = action.payload[1].daily[2].dt
      state.plusdays2.temp = action.payload[1].daily[2].temp.day
      state.plusdays2.icon = action.payload[1].daily[2].weather[0].icon

      state.plusdays3.weekday = action.payload[1].daily[3].dt
      state.plusdays3.temp = action.payload[1].daily[3].temp.day
      state.plusdays3.icon = action.payload[1].daily[3].weather[0].icon

      state.plusdays4.weekday = action.payload[1].daily[4].dt
      state.plusdays4.temp = action.payload[1].daily[4].temp.day
      state.plusdays4.icon = action.payload[1].daily[4].weather[0].icon

      state.plusdays5.weekday = action.payload[1].daily[5].dt
      state.plusdays5.temp = action.payload[1].daily[5].temp.day
      state.plusdays5.icon = action.payload[1].daily[5].weather[0].icon

      state.plusdays6.weekday = action.payload[1].daily[6].dt
      state.plusdays6.temp = action.payload[1].daily[6].temp.day
      state.plusdays6.icon = action.payload[1].daily[6].weather[0].icon

      if(action.payload[1].current.weather[0].icon.includes('n')) {
        state.now.btnColor = '#1b1b1b'
        state.now.dayBcgrColor = 'rgba(3, 3, 4, 0.8)'
        state.now.footerBcgrColor = 'rgba(3, 3, 4, 0.7)'
      } else if (action.payload[1].current.weather[0].main.includes('Clear')) {
        state.now.btnColor = '#fa6d1b'
        state.now.dayBcgrColor = 'rgba(124, 118, 90, 0.8)'
        state.now.footerBcgrColor = 'rgba(124, 118, 90, 0.7)'
      } else {
        state.now.btnColor = '#695f5f'
        state.now.dayBcgrColor = 'rgba(34, 35, 39, 0.8)'
        state.now.footerBcgrColor = 'rgba(34, 35, 39, 0.7)'
      }


    })
    .addCase(changeCityByWeatherBit.fulfilled, (state, action) => {
      state.now.temp = action.payload[0].data[0].temp
      state.now.icon = action.payload[0].data[0].weather.icon
      state.now.view = action.payload[0].data[0].weather.description

      state.plusdays1.weekday = action.payload[1].data[1].ts
      state.plusdays1.temp = action.payload[1].data[1].temp
      state.plusdays1.icon = action.payload[1].data[1].weather.icon
      
      state.plusdays2.weekday = action.payload[1].data[2].ts
      state.plusdays2.temp = action.payload[1].data[2].temp
      state.plusdays2.icon = action.payload[1].data[2].weather.icon

      state.plusdays3.weekday = action.payload[1].data[3].ts
      state.plusdays3.temp = action.payload[1].data[3].temp
      state.plusdays3.icon = action.payload[1].data[3].weather.icon

      state.plusdays4.weekday = action.payload[1].data[4].ts
      state.plusdays4.temp = action.payload[1].data[4].temp
      state.plusdays4.icon = action.payload[1].data[4].weather.icon

      state.plusdays5.weekday = action.payload[1].data[5].ts
      state.plusdays5.temp = action.payload[1].data[5].temp
      state.plusdays5.icon = action.payload[1].data[5].weather.icon

      state.plusdays6.weekday = action.payload[1].data[6].ts
      state.plusdays6.temp = action.payload[1].data[6].temp
      state.plusdays6.icon = action.payload[1].data[6].weather.icon

      if(action.payload[0].data[0].weather.icon.includes('n')) {
        state.now.btnColor = '#1b1b1b'
        state.now.dayBcgrColor = 'rgba(3, 3, 4, 0.8)'
        state.now.footerBcgrColor = 'rgba(3, 3, 4, 0.7)'
      } else if (action.payload[0].data[0].weather.description.includes('Clear')) {
        state.now.btnColor = '#fa6d1b'
        state.now.dayBcgrColor = 'rgba(124, 118, 90, 0.8)'
        state.now.footerBcgrColor = 'rgba(124, 118, 90, 0.7)'
      } else {
        state.now.btnColor = '#695f5f'
        state.now.dayBcgrColor = 'rgba(34, 35, 39, 0.8)'
        state.now.footerBcgrColor = 'rgba(34, 35, 39, 0.7)'
      }
    })
    .addCase(getGeolocation.fulfilled, (state, action) => {
      state.now.temp = action.payload[0].current.temp
      state.now.icon = action.payload[0].current.weather[0].icon
      state.now.view = action.payload[0].current.weather[0].main

      state.plusdays1.weekday = action.payload[0].daily[1].dt
      state.plusdays1.temp = action.payload[0].daily[1].temp.day
      state.plusdays1.icon = action.payload[0].daily[1].weather[0].icon

      state.plusdays2.weekday = action.payload[0].daily[2].dt
      state.plusdays2.temp = action.payload[0].daily[2].temp.day
      state.plusdays2.icon = action.payload[0].daily[2].weather[0].icon

      state.plusdays3.weekday = action.payload[0].daily[3].dt
      state.plusdays3.temp = action.payload[0].daily[3].temp.day
      state.plusdays3.icon = action.payload[0].daily[3].weather[0].icon

      state.plusdays4.weekday = action.payload[0].daily[4].dt
      state.plusdays4.temp = action.payload[0].daily[4].temp.day
      state.plusdays4.icon = action.payload[0].daily[4].weather[0].icon

      state.plusdays5.weekday = action.payload[0].daily[5].dt
      state.plusdays5.temp = action.payload[0].daily[5].temp.day
      state.plusdays5.icon = action.payload[0].daily[5].weather[0].icon

      state.plusdays6.weekday = action.payload[0].daily[6].dt
      state.plusdays6.temp = action.payload[0].daily[6].temp.day
      state.plusdays6.icon = action.payload[0].daily[6].weather[0].icon

      if(action.payload[0].current.weather[0].icon.includes('n')) {
        state.now.btnColor = '#1b1b1b'
        state.now.dayBcgrColor = 'rgba(3, 3, 4, 0.8)'
        state.now.footerBcgrColor = 'rgba(3, 3, 4, 0.7)'
      } else if (action.payload[0].current.weather[0].main.includes('Clear')) {
        state.now.btnColor = '#fa6d1b'
        state.now.dayBcgrColor = 'rgba(124, 118, 90, 0.8)'
        state.now.footerBcgrColor = 'rgba(124, 118, 90, 0.7)'
      } else {
        state.now.btnColor = '#695f5f'
        state.now.dayBcgrColor = 'rgba(34, 35, 39, 0.8)'
        state.now.footerBcgrColor = 'rgba(34, 35, 39, 0.7)'
      }
    })
  }
})

export default weatherSlice.reducer