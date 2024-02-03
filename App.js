const heading = React.createElement(
  "h1",
  { id: "test", class: "blue" },
  "Hello World React 1"
);
console.log(heading);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);
