import { configureStore } from "@reduxjs/toolkit";
import {
  counterReducer,
  increment,
  decrement,
  reset,
} from "./counterSlice.exmple";

const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
});

export { store, increment, decrement, reset };
