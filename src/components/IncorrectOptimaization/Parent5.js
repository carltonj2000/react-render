import React, { useState } from "react";
import Child5 from "./Child5";

function Parent5() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("Carlton");

  const person = {
    fname: "Bruce",
    lname: "Wayne",
  };

  const handleClick = () => {};

  console.log("parent5 render", count);
  return (
    <div style={{ marginBottom: "20px" }}>
      <span>Parent {count}</span>
      <button onClick={() => setCount(count + 1)}>+</button>
      <button onClick={() => setName("Joseph")}>Change name</button>
      <Child5 {...{ name, person }} />
      <Child5 {...{ name, handleClick }} />
    </div>
  );
}

export default Parent5;
