import React from "react";

function Child2() {
  console.log("Child2 render");
  return <div>Child</div>;
}

export default React.memo(Child2);
