import React from "react";

function Child4({ name }) {
  const date = new Date();
  console.log("Child4 render");
  return (
    <div>
      Hello {name}. It is currently {date.getHours()}:{date.getMinutes()}:
      {date.getSeconds()}
    </div>
  );
}

export default React.memo(Child4);
