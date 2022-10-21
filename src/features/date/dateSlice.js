import { createSlice } from "@reduxjs/toolkit";
import { changeCity, changeCityByWeatherBit } from "../location/locationSlice";

const moment = require("moment-timezone");

const initialState = {
  hours: 10,
  min: 20,
  timeZoneOffset: 0,
  day: "Monday",
  date: 2,
  month: "February",
  year: 2022,
};

const dateSlice = createSlice({
  name: "date",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(changeCity.fulfilled, (state, action) => {
        state.hours =
          (new Date().getUTCHours() +
            Math.floor(action.payload[1].timezone_offset / 3600)) %
          24;
        state.timeZoneOffset = action.payload[1].timezone_offset / 3600;
        state.day = new Date(action.payload[1].daily[0].dt * 1000).getDay();
        state.date = new Date(action.payload[1].daily[0].dt * 1000).getDate();
        state.month = new Date(action.payload[1].daily[0].dt * 1000).getMonth();
        state.year = new Date(
          action.payload[1].daily[0].dt * 1000
        ).getFullYear();
      })
      .addCase(changeCityByWeatherBit.fulfilled, (state, action) => {
        state.hours = Number(
          moment()
            .tz(action.payload[0].data[0].timezone)
            .format()
            .substring(11, 13)
        );
        state.timeZoneOffset = Number(
          moment()
            .tz(action.payload[0].data[0].timezone)
            .format("Z")
            .substring(0, 3)
        );
        state.day = new Date(
          action.payload[0].data[0].ts * 1000 +
            new Date().getTimezoneOffset() * 60000 +
            Number(
              moment()
                .tz(action.payload[0].data[0].timezone)
                .format("Z")
                .substring(0, 3)
            ) *
              3600000
        ).getDay();
        state.date = moment()
          .tz(action.payload[0].data[0].timezone)
          .format()
          .substring(8, 10);
        state.month =
          moment()
            .tz(action.payload[0].data[0].timezone)
            .format()
            .substring(5, 7) - 1;
        state.year = moment()
          .tz(action.payload[0].data[0].timezone)
          .format()
          .substring(0, 4);
      });
  },
});

export default dateSlice.reducer;
