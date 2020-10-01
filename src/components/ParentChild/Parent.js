import React, { useState } from "react";

import Child from "./Child";

function Parent() {
  const [count, setCount] = useState(0);
  console.log("parent render", count);
  return (
    <div style={{ marginBottom: "10px" }}>
      <span>{count}</span>
      <button onClick={() => setCount(count + 1)}>+</button>
      <button onClick={() => setCount(0)}>Zero</button>
      <button onClick={() => setCount(5)}>Five</button>
      <Child />
    </div>
  );
}

export default Parent;
