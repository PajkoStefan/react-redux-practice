import { useDispatch, useSelector } from "react-redux";

import { counterActions } from "../../store/slices/counterSlice";

import classes from "./Counter.module.css";

const Counter = () => {
  const dispetch = useDispatch();

  const counter = useSelector((state) => state.counter.counter);
  const showCounter = useSelector((state) => state.counter.showCounter);

  const increaseByAmount = 5;

  const toggleCounterHandler = () => {
    dispetch(counterActions.toggleCounter());
  };

  const incrementHandler = () => {
    dispetch(counterActions.increment());
  };

  const decrementHandler = () => {
    dispetch(counterActions.decrement());
  };

  const increaseHandler = () => {
    dispetch(counterActions.increase({ amount: increaseByAmount }));
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {showCounter && <div className={classes.value}>{counter}</div>}
      <div>
        <button onClick={decrementHandler}>DECREMENT</button>
        <button onClick={increaseHandler}>
          INCREASE BY {increaseByAmount}
        </button>
        <button onClick={incrementHandler}>INCREMENT</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
