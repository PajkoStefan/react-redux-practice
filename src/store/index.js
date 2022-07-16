import { configureStore } from "@reduxjs/toolkit";
import { cartReducer } from "./slices/cartSlice";
import { uiReducer } from "./slices/uiSlice";

const store = configureStore({
  reducer: { ui: uiReducer, cart: cartReducer },
});

export default store;
