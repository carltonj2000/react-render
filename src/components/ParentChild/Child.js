import React, { useState } from "react";

function Child() {
  const [count, setCount] = useState(0);
  console.log("child render", count);
  return (
    <div>
      <span>{count}</span>
      <button onClick={() => setCount(count + 1)}>+</button>
      <button onClick={() => setCount(0)}>Zero</button>
      <button onClick={() => setCount(5)}>Five</button>
    </div>
  );
}

export default Child;
