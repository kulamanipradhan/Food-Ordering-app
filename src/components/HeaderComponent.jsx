import { useState } from "react";
import { LOGO_URL } from "../utils/constant";

const Header = () => {
  const [BtnLoginLogout, setBtnLoginLogout] = useState("Login");
  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={LOGO_URL} />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home </li>
          <li>About Us</li>
          <li>contact us</li>
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
