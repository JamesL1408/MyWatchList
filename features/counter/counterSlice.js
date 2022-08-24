import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    count:0
}

export const counterSlice = createSlice({
    name:'counter',
    initialState,
    reducers:{
        increment:(state)=>{
            state.count= state.count+1;
        },
        incrementByThree:(state)=>{
            state.count=state.count+3;
        }
    }
})

export const {increment, incrementByThree} = counterSlice.actions;

export default counterSlice.reducer;