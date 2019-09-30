import React from "react";
import { useSelector, useDispatch } from "react-redux";
const TOGGLE_CHECKED = "TOGGLE CHECKED";
const TOGGLE_UNCHECKED = "TOGGLE UNCHECKED";

const Button = () => {
  const currentState = useSelector(state => {
    return {
      toggleSwitch: state.toggleSwitch,
      todo: state.todo
    };
  });
  const dispatch = useDispatch();
  return (
    <div>
      <h1 style={{ textDecoration: "underline", color: "green" }}>
        hook with Redux App Example
      </h1>
      <h3>Check Value : {currentState.toggleSwitch}</h3>
      <button
        onClick={() => {
          if (currentState.toggleSwitch === "true") {
            dispatch({ type: TOGGLE_UNCHECKED });
          } else {
            dispatch({ type: TOGGLE_CHECKED });
          }
        }}
      >
        Testing
      </button>
      <br />
      <br />
      <h3>Counting : {currentState.todo}</h3>
      <button
        onClick={() => {
          dispatch({ type: "INCREMENT" });
        }}
      >
        +
      </button>
      <button
        onClick={() => {
          dispatch({ type: "DECREMENT" });
        }}
      >
        -
      </button>
    </div>
  );
};

export default Button;
