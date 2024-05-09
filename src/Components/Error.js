import React from "react";
import { useRouteError } from "react-router-dom";
export const Error = () => {
  const error = useRouteError();
  return (
    <div>
      <h1>Opps!</h1>
      <h2>{error.status}</h2>
      <h3>{error.statusText}</h3>
    </div>
  );
};
