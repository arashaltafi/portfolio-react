import { configureStore } from '@reduxjs/toolkit';
import locationSlice from './locationSlice';

export const store = configureStore({
    reducer: {
        location: locationSlice.reducer
    },
    devTools: process.env.NODE_ENV !== 'production'
});