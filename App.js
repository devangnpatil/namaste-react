import React from "react";
import ReactDOM from "react-dom/client";
const heading = React.createElement(
  "h1",
  { id: "test", className: "blue" },
  "Hello World React 1"
);
console.log(heading);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);
