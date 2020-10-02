import React from "react";

function Child5({ name, person, handleClick }) {
  console.log("Child5 render");
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

export default React.memo(Child5);
