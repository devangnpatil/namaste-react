import React, { useEffect, useState } from "react";
import Header from "./Header";
import { Outlet } from "react-router-dom";
import UserContext from "../utils/UserContext";
export default function AppLayout() {
  const [userName, setUserName] = useState();

  useEffect(() => {
    const data = {
      name: "Devang",
    };
    setUserName(data.name);
  }, []);

  return (
    <UserContext.Provider value={{ loggedInUser: userName, setUserName }}>
      <div className="app">
        <Header></Header>
        <Outlet></Outlet>
      </div>
    </UserContext.Provider>
  );
}
