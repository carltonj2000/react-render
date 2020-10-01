import React from "react";
import "./App.css";
import ArrayUseState from "./components/ImutableState/ArrayUseState";
import ObjectUseState from "./components/ImutableState/ObjectUseState";
import Child1 from "./components/Optimization/Child1";
import GrandParent1 from "./components/Optimization/GrandParent";
import Parent1 from "./components/Optimization/Parent1";
import Parent from "./components/ParentChild/Parent";
import UseReducer from "./components/UseReducer/UseReducer";
import UseState from "./components/UseState/UseState";

function App() {
  return (
    <div className="App">
      <GrandParent1 />
      <Parent1>
        <Child1 />
      </Parent1>
      <Parent />
      <ArrayUseState />
      <ObjectUseState />
      <UseReducer />
      <UseState />
    </div>
  );
}

export default App;
