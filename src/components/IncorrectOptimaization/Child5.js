import React from "react";

function Child5({ name, person: { fname, lname } }) {
  console.log("Child5 render");
  return (
    <div>
      Hello {name} and {fname} {lname}
    </div>
  );
}

export default React.memo(Child5);
