import React, { useEffect, useState } from "react";
import Header from "./Header";
import { Outlet } from "react-router-dom";
import UserContext from "../utils/UserContext";
import { Provider } from "react-redux";
import appStore from "../utils/appStore.js";
export default function AppLayout() {
  const [userName, setUserName] = useState();

  useEffect(() => {
    const data = {
      name: "Devang",
    };
    setUserName(data.name);
  }, []);

  return (
    <Provider store={appStore}>
      <UserContext.Provider value={{ loggedInUser: userName, setUserName }}>
        <div className="app">
          <Header></Header>
          <Outlet></Outlet>
        </div>
      </UserContext.Provider>
    </Provider>
  );
}
