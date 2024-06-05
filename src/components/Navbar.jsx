import React from "react";
import logo from "../assets/logo.png";

const Navbar = () => {
  return (
    <div className="h-[72px] flex items-center justify-center fixed w-full">
      <img src={logo} alt="Qwiz" className="h-[40px] m-auto" />
    </div>
  );
};

export default Navbar;
