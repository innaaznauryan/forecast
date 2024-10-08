import { createSlice } from '@reduxjs/toolkit';

const tempFormatSlice = createSlice({
    name: 'tempFormat',
    initialState: {
        'tempFormat': 'celsius'
    },
    reducers: {
        setTempFormat(state, { payload }) {
            state.tempFormat = payload;
        }
    }
})

export default tempFormatSlice.reducer;
export const { setTempFormat } = tempFormatSlice.actions;