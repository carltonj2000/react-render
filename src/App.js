import React from "react";
import "./App.css";
import ArrayUseState from "./components/ImutableState/ArrayUseState";
import ObjectUseState from "./components/ImutableState/ObjectUseState";
import Parent3 from "./components/IncorrectOptimaization/Parent3";
import Parent4 from "./components/IncorrectOptimaization/Parent4";
import Parent5 from "./components/IncorrectOptimaization/Parent5";
import Parent6 from "./components/IncorrectOptimaization/Parent6";
import Child1 from "./components/Optimization/Child1";
import GrandParent1 from "./components/Optimization/GrandParent";
import Parent1 from "./components/Optimization/Parent1";
import Parent2 from "./components/Optimization/Parent2";
import Parent from "./components/ParentChild/Parent";
import UseReducer from "./components/UseReducer/UseReducer";
import UseState from "./components/UseState/UseState";

function App() {
  return (
    <div className="App">
      <Parent6 />
      <Parent5 />
      <Parent4 />
      <Parent3 />
      <Parent2 />
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
