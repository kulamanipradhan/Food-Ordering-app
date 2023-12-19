import { useEffect, useState } from "react";
import { LOGO_URL } from "../utils/constant";
import { Link } from "react-router-dom";

const Header = () => {
  const [BtnLoginLogout, setBtnLoginLogout] = useState("Login");
  useEffect(() => {
    console.log("UseEffect");
  }, []);
  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={LOGO_URL} />
      </div>
      <div className="nav-items">
        <ul>
          <li>
            {" "}
            <Link to="/"> Home</Link>{" "}
          </li>
          <li>
            <Link to="/About">About Us</Link>
          </li>
          <li>
            {" "}
            <Link to="/Contact">Contact Us</Link>
          </li>
          <li>Cart</li>
          <li>
            <button
              className="login"
              onClick={() => {
                BtnLoginLogout === "Login"
                  ? setBtnLoginLogout("Logout")
                  : setBtnLoginLogout("Login");
              }}
            >
              {BtnLoginLogout}
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};
export default Header;
