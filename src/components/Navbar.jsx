import React, { useState } from "react";
import logo from "../assets/logo.png";
import dark from "../assets/dark.png";
import light from "../assets/light.png";

const Navbar = ({ isLightTheme, setIsLightTheme }) => {
  return (
    <div className="h-[72px] flex items-center justify-center fixed w-full">
      <img src={logo} alt="Qwiz" className="h-[40px]" />
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
