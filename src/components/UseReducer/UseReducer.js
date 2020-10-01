import React, { useReducer } from "react";

const initialState = 0;

const reducer = (state, action) => {
  switch (action) {
    case "increment":
      return state + 1;
    case "decrement":
      return state - 1;
    case "reset":
      return initialState;
    default:
      return state;
  }
};

function UseReducer() {
  const [state, dispatch] = useReducer(reducer, initialState);

  console.log("reducer state", state);
  return (
    <div style={{ marginBottom: "10px" }}>
      <span>{state}</span>
      <button onClick={() => dispatch("increment")}>+</button>
      <button onClick={() => dispatch("decrement")}>-</button>
      <button onClick={() => dispatch("reset")}>reset</button>
    </div>
  );
}

export default UseReducer;
