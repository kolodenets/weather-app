import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  service: 'openweathermap'
}

const servicerSlice = createSlice({
  name: 'service',
  initialState,
  reducers: {
    changeService(state, action) {
      state.service = action.payload
    }
  }
})

export const { changeService } = servicerSlice.actions

export default servicerSlice.reducer

