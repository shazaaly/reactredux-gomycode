import { createSlice } from "@reduxjs/toolkit"

export const initialAuthState = {
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
export const authActions = authSlice.actions
export default authSlice.reducer
