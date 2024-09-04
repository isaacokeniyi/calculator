import { createSlice } from "@reduxjs/toolkit";

export const calcSlice = createSlice({
  name: "calcInput",
  initialState: {
    value: "",
  },
  reducers: {
    addInput: (state, action) => {
      if (action.payload === null) {
        state.value = state.value.substring(0, state.value.length - 1);
        return;
      }
      if (state.value.length >= 18) {
        return;
      }
      if (action.payload === ".") {
        if (
          state.value.substring(state.value.length - 1, state.value.length) !==
          "."
        ) {
          state.value += action.payload;
          return;
        }
        return;
      }

      const validInput = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
      if (!validInput.includes(action.payload)) {
        return;
      }

      if (action.payload !== "0" || state.value.length > 0) {
        state.value += action.payload;
        return;
      }
    },
    addOperator: (state, action) => {
      if (action.payload === "<") {
        state.value = state.value.substring(0, state.value.length - 1);
        return;
      }
      if (action.payload === "cls") {
        state.value = "";
        return;
      }
      if (action.payload === "sqrt (") {
        state.value += "(";
        return;
      }
      if (action.payload === ") squ") {
        state.value += ")";
        return;
      }
      if (action.payload === "=") {
        state.value = String(eval(state.value));
        return;
      }

      const validInput = ["+", "-", "*", "/"];

      if (!validInput.includes(action.payload)) {
        return;
      }

      if (action.payload !== "=") {
        state.value += action.payload;
        return;
      }
    },
    specialOp: (state, action) => {
      if (action.payload === "sqrt (") {
        state.value = state.value.substring(0, state.value.length - 1);
        state.value = state.value.substring(0, state.value.length - 1);
        state.value = String(Math.sqrt(eval(state.value)));
        return;
      }
      if (action.payload === ") squ") {
        state.value = state.value.substring(0, state.value.length - 1);
        state.value = state.value.substring(0, state.value.length - 1);
        state.value = String(Math.pow(eval(state.value), 2));
        return;
      }
    },
  },
});

export const { addInput, addOperator, specialOp } = calcSlice.actions;
export default calcSlice.reducer;
