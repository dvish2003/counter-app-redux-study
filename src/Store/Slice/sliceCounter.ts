import {createSlice, type PayloadAction} from "@reduxjs/toolkit";

interface CounterState {
    counter: number
}

const initialState: CounterState = {
    counter: 0
}

export const counterSlice = createSlice({
    name: "count",
    initialState,
    reducers: {
        increment (state) {
            state.counter += 1
        },
        decrement (state) {
            state.counter -= 1
        },
        reset (state) {
            state.counter = 0
        },
        incrementByAmount:(state,action:PayloadAction<number>) => {
            state.counter += action.payload
        },
        decrementByAmount:(state,action:PayloadAction<number>) => {
            state.counter -= action.payload
        }
    }
})

export default counterSlice.reducer;
export const {increment,decrement,reset,incrementByAmount,decrementByAmount} = counterSlice.actions;