import React from "react";
import Header from "./Header";
import Body from "./Body";
export default function AppLayout() {
  return (
    <div className="app">
      <Header></Header>
      <Body></Body>
    </div>
  );
}
