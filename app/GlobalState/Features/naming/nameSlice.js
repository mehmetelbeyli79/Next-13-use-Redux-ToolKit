"use client"
import { createSlice } from "@reduxjs/toolkit";
export const nameSlice = createSlice({
    name: "nameChange",
    initialState:{value:"Mehmet"},
    reducers: {
        nameChange: (state, action) => {
            state.value = action.payload;
        }
    }});
export const { nameChange } = nameSlice.actions;
export const selectName = (state) => state.nameChange.value;
export default nameSlice.reducer;