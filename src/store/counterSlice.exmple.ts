import { createSlice } from "@reduxjs/toolkit";

export interface actionType {
  payload: number | undefined;
  type: string;
}

const counterSlice = createSlice({
  name: "counter",
  initialState: { count: 0 },
  reducers: {
    increment(state, action: actionType) {
      if (action.payload) state.count += action.payload;
      else state.count += 1;
    },
    decrement(state, action: actionType) {
      if (action.payload) state.count -= action.payload;
      else state.count -= 1;
    },
    reset(state) {
      state.count = 0;
    },
  },
});

export const { increment, decrement, reset } = counterSlice.actions;
export const counterReducer = counterSlice.reducer;
