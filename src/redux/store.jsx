import { configureStore } from "@reduxjs/toolkit";
import calcReducer from "../store/calcSlice";

export const store = configureStore({
  reducer: {
    calc: calcReducer,
  },
});
