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

// const counterReducer = (state = initialState, action) => {

//     switch (action.type) {
//         case 'INCREMENT':
//             return {
//                 count: state.count + 1,
//                 showCounter: state.showCounter
//             }

//         case 'DECREMENT':
//             return {
//                 count: state.count - 1,
//                 showCounter: state.showCounter

//             }

//         case 'INCREASEAMOUNT':
//             return {
//                 count: state.count + action.amount,
//                 showCounter: state.showCounter

//             }
//         case 'TOGGLE':
//             return {
//                 count: state.count,
//                 showCounter: !state.showCounter

//             }

//         default:
//             return state;
//     }

// }
// const store = createStore(counterReducer)
const store= configureStore({
    reducer: counterSlice.reducer
})

export default store

