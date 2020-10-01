import React, { useState } from "react";
import Child2 from "./Child2";

function Parent2() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("Carlton");

  console.log("parent2 render", count);
  return (
    <div style={{ marginBottom: "20px" }}>
      <span>Parent {count}</span>
      <button onClick={() => setCount(count + 1)}>+</button>
      <button onClick={() => setName("Joseph")}>Change name</button>
      <Child2 {...{ name }} />
    </div>
  );
}

export default Parent2;
