import { createStore } from "redux";

const initialState = { counter: 0, showCounter: true };

const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case "INCREMENT":
      return { ...initialState, counter: state.counter + 1 };
    case "DECREMENT":
      return { ...initialState, counter: state.counter - 1 };
    case "INCREASE":
      return {
        ...initialState,
        counter: state.counter + action.payload.amount,
      };
    case "TOGGLE":
      return { ...initialState, showCounter: !state.showCounter };
    default:
      return state;
  }
};

const store = createStore(counterReducer);

export default store;
