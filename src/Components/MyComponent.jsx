import React from "react";

function MyComponent({ name }) {
  console.log("MyComponent rendered");
  return <div>Hello, {name}!</div>;
}

export default React.memo(MyComponent);
