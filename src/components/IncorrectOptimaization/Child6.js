import React from "react";

function Child6({ name, person, handleClick }) {
  console.log("Child6 render", handleClick ? " hc" : person ? " person" : "");
  return (
    <div>
      Hello {name}
      {person && (
        <span>
          and {person.fname} {person.lname}
        </span>
      )}
      {handleClick && <span>handleClick</span>}
    </div>
  );
}

export default React.memo(Child6);
