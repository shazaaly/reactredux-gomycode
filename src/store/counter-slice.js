import { createSlice } from "@reduxjs/toolkit"


let initialCounterState = {
    count: 0,
    showCounter: true
}

 const counterSlice = createSlice({
    name: 'counter',
    initialState : initialCounterState,
    reducers: {
        increment(state) {
             state.count++

        },
        decrement(state) {
             state.count--

        },
        increase(state, action) {
            state.count = state.count + action.payload

        },
        toggle(state) {
            state.showCounter =  !state.showCounter
        },
    }

})
export const counterActions = counterSlice.actions

export default counterSlice.reducer

