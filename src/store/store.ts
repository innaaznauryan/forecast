import { configureStore } from '@reduxjs/toolkit';
import weatherSlice from './weatherSlice';
import forecastSlice from './forecastSlice';
import tempFormatSlice from "./tempFormatSlice";
import searchSlice from "./searchSlice";

export const store = configureStore({
  reducer: {
    weather: weatherSlice,
    forecast: forecastSlice,
    tempFormat: tempFormatSlice,
    search: searchSlice,
  },
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;