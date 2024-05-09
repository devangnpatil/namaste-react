import { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { LOGO_URL } from "../utils/constants";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
const Header = () => {
  const [login, setLogin] = useState("Login");
  const [btnNameReact, setBtnNameReact] = useState("Login");
  const { loggedInUser } = useContext(UserContext);

  const onlineStatus = useOnlineStatus();
  useEffect(() => {
    console.log("useEffect called");
  }, [btnNameReact]);
  return (
    <div className="flex justify-between  mb-2 bg-pink-300 shadow-lg sm:bg-yellow-200 lg:bg-red-200">
      <div className="logo-container">
        <img className="w-56" src={LOGO_URL} alt="" title="" />
      </div>
      <div className="flex items-center">
        <ul className="flex p-4 m-4">
          <li className="px-4">
            Online Status: {onlineStatus ? "Online" : "Offline"}
          </li>
          <li className="px-4">
            <Link to="/">Home</Link>
          </li>
          <li className="px-4">
            <Link to="/about">About Us</Link>
          </li>
          <li className="px-4">
            <Link to="/contact">Contact Us</Link>
          </li>
          <li className="px-4">
            <Link to="/cart">Cart</Link>
          </li>
          <li className="px-4">
            <Link to="/grocery">Grocery</Link>
          </li>
          <li className="px-4">
            <button
              className="login"
              onClick={() => {
                btnNameReact === "Login"
                  ? setBtnNameReact("Logout")
                  : setBtnNameReact("Login");
              }}
            >
              {btnNameReact}
            </button>
          </li>
          <li>User: {loggedInUser}</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
