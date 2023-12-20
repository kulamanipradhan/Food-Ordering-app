import { useEffect, useState } from "react";
import { LOGO_URL } from "../utils/constant";
import { Link } from "react-router-dom";
import UseOnlineStatus from "../utils/UseOnlineStatus";

const Header = () => {
  const [BtnLoginLogout, setBtnLoginLogout] = useState("Login");
  const onlineStatus = UseOnlineStatus();
  useEffect(() => {
    console.log("UseEffect");
  }, []);
  return (
    <div className=" flex justify-between  shadow-lg">
      <div className="logo-container">
        <img className="w-40" src={LOGO_URL} />
      </div>
      <div className="flex items-center">
        <ul className="flex p-10 m-10 ">
          <li className="px-4 hover:bg-red-300">
            {" "}
            <Link to="/"> Home</Link>{" "}
          </li>
          <li className="px-4">
            <Link to="/About">About Us</Link>
          </li>
          <li className="px-4">
            {" "}
            <Link to="/Contact">Contact Us</Link>
          </li>
          <li className="px-4">
            <Link to="/Grocery">Grocery</Link>
          </li>
          <li className="px-4">Cart</li>
          <li className="px-4">
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
          <li className="px-4">{onlineStatus ? "🟢" : "🛑"}</li>
        </ul>
      </div>
    </div>
  );
};
export default Header;
