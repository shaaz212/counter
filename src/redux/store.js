import { configureStore } from '@reduxjs/toolkit';
import counterSlice from './counterSlice';

export const store = configureStore({
    reducer:{
        // define different reducer as key-value pair
        counterSlice
    }
 })