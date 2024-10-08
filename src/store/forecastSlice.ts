import { createSlice } from '@reduxjs/toolkit';
import { getForecastThunk } from './weatherThunk';
import { ForecastSchema } from '../types/type';

interface ForecastState {
    data: ForecastSchema | [];
    loading: boolean;
    error: string | null;
}

const initialState: ForecastState = {
    data: [],
    loading: false,
    error: null
};

const forecastSlice = createSlice({
    name: 'forecast',
    initialState,
    extraReducers: (builder) => {
        builder
            .addCase(getForecastThunk.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(getForecastThunk.fulfilled, (state, action) => {
                state.loading = false;
                state.data = action.payload;
            })
            .addCase(getForecastThunk.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message || "Failed to fetch Forcast";
            })
    },
    reducers: {}
})

export default forecastSlice.reducer;
