import React, { useState, useMemo, useCallback } from "react";
import Child6 from "./Child6";

function Parent6() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("Carlton");

  const person = useMemo(
    () => ({
      fname: "Bruce",
      lname: "Wayne",
    }),
    []
  );

  const handleClick = useCallback(() => {}, []);

  console.log("parent6 render", count);
  return (
    <div style={{ marginBottom: "20px" }}>
      <span>Parent {count}</span>
      <button onClick={() => setCount(count + 1)}>+</button>
      <button onClick={() => setName("Joseph")}>Change name</button>
      <Child6 {...{ name, person }} />
      <Child6 {...{ name, handleClick }} />
    </div>
  );
}

export default Parent6;
