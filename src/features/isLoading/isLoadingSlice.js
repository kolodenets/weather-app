import { createSlice } from "@reduxjs/toolkit"
import { changeCity, changeCityByWeatherBit } from "../location/locationSlice"

const initialState = {
  isLoading: false
}

const isLoadingSliace = createSlice({
  name: 'isLoading',
  initialState,
  reducers: {
  
  },
  extraReducers: (builder) => {
    builder
      .addCase(changeCity.pending, (state) => {
        state.isLoading = true
      })
      .addCase(changeCity.fulfilled, (state) => {
        state.isLoading = false
      })
      .addCase(changeCityByWeatherBit.pending, (state) => {
        state.isLoading = true
      })
      .addCase(changeCityByWeatherBit.fulfilled, (state) => {
        state.isLoading = false
      })
  }
})

export default isLoadingSliace.reducer
