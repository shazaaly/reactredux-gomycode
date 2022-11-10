 const redux = require('redux');

 const counterReducer = (state={count : 0}, action)=>{
    return {
        count : state.count + 1
    }

 }

 const store = redux.createStore(counterReducer)

 const subscriber = ()=>{
    const latestState = store.getState()
 }

 store.subscribe(subscriber)


