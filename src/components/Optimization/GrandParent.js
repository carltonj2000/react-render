import React, { useState } from "react";

import Child1 from "./Child1";
import Parent1 from "./Parent1";

function GrandParent1() {
  const [count, setCount] = useState(0);
  console.log("Grandparent1 render", count);
  return (
    <div style={{ marginBottom: "20px" }}>
      <span>Grand Parent {count}</span>
      <button onClick={() => setCount(count + 1)}>+</button>
      <Parent1 newCount={count}>
        <Child1 />
      </Parent1>
    </div>
  );
}

export default GrandParent1;
