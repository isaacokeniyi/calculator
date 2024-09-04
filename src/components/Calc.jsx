import React, { useState } from "react";
import { addInput, addOperator, specialOp } from "../store/calcSlice";
import { useSelector, useDispatch } from "react-redux";

const Calc = () => {
  const calcValue = useSelector((state) => state.calc.value);
  const dispatch = useDispatch();

  const handleInput = (e) => {
    const value = e.target.value;
    dispatch(addInput(value));
  };

  const handleOperator = (e) => {
    const value = e.target.value;
    dispatch(addOperator(value));
  };

  const handleSpecialOp = (e) => {
    const value = e.target.value;
    dispatch(specialOp(value));
  };

  const keys = [
    { value: 9 },
    { value: 8 },
    { value: 7 },
    { value: 6 },
    { value: 5 },
    { value: 4 },
    { value: 3 },
    { value: 2 },
    { value: 1 },
    { value: 0 },
    { value: "." },
  ];
  const operations = [
    { value: "<" },
    { value: "cls" },
    { value: "sqrt (" },
    { value: ") squ" },
    { value: "+" },
    { value: "-" },
    { value: "/" },
    { value: "*" },
    { value: "=" },
  ];

  return (
    <div className="flex justify-center items-center w-full h-[100vh]">
      <div className="bg-gray-400 w-2/5 h-4/5 rounded-sm flex flex-col">
        <input
          name="screen"
          className="h-1/3 w-full outline-none text-6xl border-8 border-gray-400 rounded"
          type="text"
          value={calcValue}
          onInput={(e) => {
            dispatch(addInput(e.nativeEvent.data));
            dispatch(addOperator(e.nativeEvent.data));
          }}
        />
        <div className="flex flex-wrap justify-center items-center h-2/3 pb-3 gap-4">
          {keys.map((key) => (
            <button
              key={key.value}
              className="text-3xl p-4 w-1/6 h-1/5 bg-slate-500 hover:bg-slate-400 active:bg-slate-300 rounded text-white"
              onClick={(e) => handleInput(e)}
              value={key.value}
            >
              {key.value}
            </button>
          ))}
          {operations.map((operation) => (
            <button
              key={operation.value}
              className="text-3xl p-4 w-1/6 h-1/5 bg-yellow-500 hover:bg-yellow-400 active:bg-yellow-300 rounded"
              onClick={(e) => handleOperator(e)}
              onDoubleClick={(e) => handleSpecialOp(e)}
              value={operation.value}
            >
              {operation.value}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Calc;
