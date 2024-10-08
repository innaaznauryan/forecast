import { createSlice } from '@reduxjs/toolkit';

const searchSlice = createSlice({
    name: 'search',
    initialState: {
        'search': 'Yerevan'
    },
    reducers: {
        setSearch(state, { payload }) {
            state.search = payload || 'Yerevan';
        }
    }
})

export default searchSlice.reducer;
export const { setSearch } = searchSlice.actions;