import React from "react";

function Child3({ children, name }) {
  console.log("Child3 render");
  return (
    <div>
      {/* children is always a new reference causing a re-render */}
      {/* no need for memo just adding calculation for always re-rendering */}
      {children} {name}
    </div>
  );
}

export default React.memo(Child3);
