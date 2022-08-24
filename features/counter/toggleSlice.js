import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    toggle:false
}

export const toggleSlice = createSlice({
    name:'toggle',
    initialState,
    reducers:{
        showMovie:(state)=>{
            state.toggle = true;
        },
        removeMovie:(state)=>{
            state.toggle=false;
        }
    }
})

export const {showMovie,removeMovie} = toggleSlice.actions;

export default toggleSlice.reducer;