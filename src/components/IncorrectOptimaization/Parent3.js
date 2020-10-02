import React, { useState } from "react";
import Child3 from "./Child3";

function Parent3() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("Carlton");

  console.log("parent3 render", count);
  return (
    <div style={{ marginBottom: "20px" }}>
      <span>Parent {count}</span>
      <button onClick={() => setCount(count + 1)}>+</button>
      <button onClick={() => setName("Joseph")}>Change name</button>
      <Child3 {...{ name }}>
        <strong>Hello</strong>
      </Child3>
    </div>
  );
}

export default Parent3;
