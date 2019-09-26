import React from "react";
import "./App.css";
import { createStore, combineReducers, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import { createLogger } from "redux-logger";
import Button from "./component/Button";
//reducer
function toggleSwitch(state = "false", action) {
  switch (action.type) {
    case "TOGGLE CHECKED":
      return "true";
    case "TOGGLE UNCHECKED":
      return "false";
    default:
      return state;
  }
}
function todo(state = 1, action) {
  switch (action.type) {
    case "INCREMENT":
      return state + 1;
    case "DECREMENT":
      return state - 1;
    default:
      return state;
  }
}

//store
const store = createStore(
  combineReducers({ toggleSwitch, todo }),
  applyMiddleware(createLogger())
);

function App() {
  return (
    <Provider store={store}>
      <Button />
    </Provider>
  );
}

export default App;
