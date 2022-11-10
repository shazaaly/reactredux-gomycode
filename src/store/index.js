import { createStore } from "redux"
const counterReducer = (state = { count: 0 }, action) => {

    switch (action.type) {
        case 'INCREMENT':
            return {
                count: state.count + 1
            }

        case 'DECREMENT':
            return {
                count: state.count - 1
            }

        case 'INCREASEAMOUNT':
            return {
                count: state.count + action.amount
            }

        default:
            return state;
    }

}
const store = createStore(counterReducer)

export default store

