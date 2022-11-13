import { createSlice, configureStore } from '@reduxjs/toolkit'
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



const initialAuthState = {
    isAuth : false
}

const authSlice = createSlice({
    name:'authentication',
    initialState : initialAuthState,
    reducers:{
        login(state){
            state.isAuth = true
        },
        logout(state){
            state.isAuth = false
        }
    }

})

const store= configureStore({
    reducer: {
        counter : counterSlice.reducer,
        auth : authSlice.reducer
    
    }
})
export const counterActions = counterSlice.actions
export const authActions = authSlice.actions

export default store

