import classes from './Counter.module.css';
import { useSelector, useDispatch } from 'react-redux'
import { counterActions } from '../store';

const Counter = () => {

  let count = useSelector(state => state.count)
  let toggle = useSelector(state=> state.showCounter)

  const dispatch = useDispatch()
  const incrementHandler = () => dispatch(counterActions.increment())
  const decrementHandler = () => dispatch(counterActions.decrement())
  const IncAmountHandler = (amount) => dispatch(counterActions.increase(5))
  const toggleCounterHandler=()=>dispatch(counterActions.toggle())

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
