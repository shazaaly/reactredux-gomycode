import { createStore } from "redux"
import { createSlice, configureStore } from '@reduxjs/toolkit'
let initialState = {
    count: 0,
    showCounter: true
}

const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        increment(state) {
             state.count++

        },
        decrement(state) {
             state.count--

        },
        increase(state, action) {
            state.count = state.count + action.amount

        },
        toggle(state) {
            state.showCounter =  !state.showCounter
        },
    }

})

const store= configureStore({
    reducer: counterSlice.reducer
})
export const counterActions = counterSlice.actions

export default store

