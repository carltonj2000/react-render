import React, { useState } from "react";

const initialState = ["Bruce", "Wayne"];

function ArrayUseState() {
  const [persons, setPersons] = useState(initialState);

  const changeName2 = () => {
    setPersons([...persons, ...["Cheryl", "Joseph"]]);
  };

  const changeName1 = () => {
    persons.push("Carlton");
    persons.push("Joseph");
    setPersons(persons);
  };

  console.log(persons);
  return (
    <div style={{ marginBottom: "10px" }}>
      <span>{JSON.stringify(persons)}</span>
      <button onClick={changeName1}>mutate state</button>
      <button onClick={changeName2}>new state</button>
    </div>
  );
}

export default ArrayUseState;
