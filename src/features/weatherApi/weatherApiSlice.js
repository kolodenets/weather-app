import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const OPENWEATHERMAP_API_KEY = 'b6681e3f0446bc62f33527efc7b781c5';

export const openweatherApiSlice = createApi({
  reducerPath: 'openweatherApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://api.openweathermap.org/',
    prepareHeaders(headers) {
      headers.set('appid', OPENWEATHERMAP_API_KEY)
      
      return headers;
    }
  }),
  endpoints(builder) {
    return {
      fetchOpenweather: builder.query({
        query(city) {
          return `geo/1.0/direct?q=${city}&limit=1`
        }
      })
    }
  }
})

export const { useFetchOpenweatherQuery } = openweatherApiSlice

