import { createSlice } from '@reduxjs/toolkit';
import { getWeatherThunk } from './weatherThunk';
import { WeatherSchema } from '../types/type';

interface WeatherState {
    data: WeatherSchema | [];
    loading: boolean;
    error: string | null;
}

const initialState: WeatherState = {
    data: [],
    loading: false,
    error: null
};

const weatherSlice = createSlice({
    name: 'weather',
    initialState,
    extraReducers: (builder) => {
        builder
            .addCase(getWeatherThunk.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(getWeatherThunk.fulfilled, (state, action) => {
                state.loading = false;
                state.data = action.payload;
            })
            .addCase(getWeatherThunk.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message || "Failed to fetch Weather";
            })
    },
    reducers: {}
})

export default weatherSlice.reducer;
