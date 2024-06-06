import React from "react";
import logo from "../assets/logo.png";
import dark from "../assets/dark.png";
import light from "../assets/light.png";
import home from "../assets/home.png";
import reload from "../assets/reload.png";
import { useNavigate } from "react-router-dom";

const Navbar = ({ isLightTheme, setIsLightTheme, isHome }) => {
  const navigate = useNavigate();

  return (
    <div className="h-[72px] flex items-center justify-center fixed w-full">
      <img
        src={home}
        alt="Home"
        className={`h-8 ${
          isHome ? "hidden" : ""
        } left-10 cursor-pointer absolute`}
        onClick={() => {
          navigate("/");
        }}
      />
      <img
        src={reload}
        alt="Reload"
        className={`h-8 ${
          isHome ? "hidden" : ""
        } left-24 cursor-pointer absolute`}
        onClick={() => {
          navigate("/");
        }}
      />
      <img src={logo} alt="Qwiz" className="h-[40px] cursor-pointer" />
      <img
        src={isLightTheme ? dark : light}
        alt="Theme"
        className="h-8 cursor-pointer right-10 absolute"
        onClick={() => setIsLightTheme(!isLightTheme)}
      />
    </div>
  );
};

export default Navbar;
