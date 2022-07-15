import { useDispatch, useSelector } from "react-redux";

import classes from "./Counter.module.css";

const Counter = () => {
  const dispetch = useDispatch();

  const toggleCounterHandler = () => {};

  const counter = useSelector((state) => state.counter);

  const incrementHandler = () => {
    dispetch({ type: "INCREMENT" });
  };

  const decrementHandler = () => {
    dispetch({ type: "DECREMENT" });
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      <div className={classes.value}>{counter}</div>
      <div>
        <button onClick={decrementHandler}>DECREMENT</button>
        <button onClick={incrementHandler}>INCREMENT</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
