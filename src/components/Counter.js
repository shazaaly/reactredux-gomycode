import classes from './Counter.module.css';
import { useSelector, useDispatch } from 'react-redux'

const Counter = () => {

  let count = useSelector(state => state.count)
  const dispatch = useDispatch()
  const incrementHandler = () => dispatch({ type: 'INCREMENT' })
  const decrementHandler = () => dispatch({ type: 'DECREMENT' })

  const toggleCounterHandler = () => { };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      <div className={classes.value}>{count}</div>
      <button onClick={incrementHandler}> Increment </button>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
      <button onClick={decrementHandler}> Decrement </button>

    </main>
  );
};

export default Counter;
