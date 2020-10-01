import React, { useState } from "react";

function Parent1({ children }) {
  const [count, setCount] = useState(0);
  console.log("parent1 render", count);
  return (
    <div style={{ marginBottom: "20px" }}>
      <span>Parent {count}</span>
      <button onClick={() => setCount(count + 1)}>+</button>
      {children}
    </div>
  );
}

export default Parent1;
