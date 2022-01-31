import { createSlice } from '@reduxjs/toolkit';

export const sessionSlice = createSlice({
    name: 'session',
    initialState: {
        value: 0,
    },
    reducers: {
        login: (state) => {
            state.value = 1
        },
        logout: (state) => {
            state.value = 0
        }
    }
});

export const {login, logout} = sessionSlice.actions;

export default sessionSlice.reducer;
