import React, { useState } from "react";
import Child4 from "./Child4";

function Parent4() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("Carlton");

  console.log("parent4 render", count);
  return (
    <div style={{ marginBottom: "20px" }}>
      <span>Parent {count}</span>
      <button onClick={() => setCount(count + 1)}>+</button>
      <button onClick={() => setName("Joseph")}>Change name</button>
      <Child4 {...{ name }} />
    </div>
  );
}

export default Parent4;
