import { useState } from "react";
import { LOGO_URL } from "../utils/constants";
const Header = () => {
  const [login, setLogin] = useState("Login");
  const clickHandler = () => {
    login === "Logout" ? setLogin("Login") : setLogin("Logout");
  };
  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={LOGO_URL} alt="" title="" />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
          <button className="login" onClick={() => clickHandler()}>
            {login}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
