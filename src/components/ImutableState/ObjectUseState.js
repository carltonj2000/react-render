import React, { useState } from "react";

const initialState = { fname: "Bruce", lname: "Wayne" };

function ObjectUseState() {
  const [person, setPerson] = useState(initialState);

  const changeName2 = () => {
    setPerson({ fname: "Cheryl", lname: "Joseph" });
  };

  const changeName1 = () => {
    person.fname = "Carlton";
    person.lname = "Joseph";
    setPerson(person); // will not re-render due to same object
  };

  console.log(person);
  return (
    <div style={{ marginBottom: "10px" }}>
      <span>{JSON.stringify(person)}</span>
      <button onClick={changeName1}>mutate state</button>
      <button onClick={changeName2}>new state</button>
    </div>
  );
}

export default ObjectUseState;
