"use client"
import {configureStore} from '@reduxjs/toolkit';
import counterReducer from './Features/counter/counterSlice';
import nameReducer from './Features/naming/nameSlice';

export const store=configureStore({
    reducer:{
        counter:counterReducer,
        nameChange:nameReducer
    }
});