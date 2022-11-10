import classes from './Counter.module.css';
import { useSelector, useDispatch } from 'react-redux'

const Counter = () => {

  let count = useSelector(state => state.count)
  let toggle = useSelector(state=> state.showCounter)

  const dispatch = useDispatch()
  const incrementHandler = () => dispatch({ type: 'INCREMENT' })
  const decrementHandler = () => dispatch({ type: 'DECREMENT' })
  const IncAmountHandler = (amount) => dispatch({ type: 'INCREASEAMOUNT', amount: 5 })
  const toggleCounterHandler=()=>dispatch({type:'TOGGLE'})

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      { toggle && <div className={classes.value}>{count}</div>}
      
      <button onClick={incrementHandler}> Increment </button>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
      <button onClick={decrementHandler}> Decrement </button>
      <button onClick={IncAmountHandler}> Increase </button>

    </main>
  );
};

export default Counter;
