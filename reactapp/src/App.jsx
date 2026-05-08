import React from "react";
import ChildComponent from "./ChildComponent";

function ParentComponent() {
  const name = "Alice";
  const age = 22;

  return (
    <div>
      <h1>Parent Component</h1>

      <ChildComponent name={name} age={age} />
    </div>
  );
}

export default ParentComponent;