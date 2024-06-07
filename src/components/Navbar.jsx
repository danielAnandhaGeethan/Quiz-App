import React from "react";
import logo from "../assets/logo.png";
import dark from "../assets/dark.png";
import light from "../assets/light.png";
import home_black from "../assets/home_black.png";
import home_white from "../assets/home_white.png";
import reload_black from "../assets/reload_black.png";
import reload_white from "../assets/reload_white.png";
import { useNavigate } from "react-router-dom";

const Navbar = ({ isLightTheme, setIsLightTheme, isHome, handleRetry }) => {
  const navigate = useNavigate();

  const handleHomeClick = () => {
    localStorage.removeItem("quizData");
    navigate("/");
  };

  const handleRetryClick = () => {
    handleRetry();
    navigate("/quiz");
  };

  return (
    <div className="h-[72px] flex items-center justify-center fixed w-full">
      <img
        src={isLightTheme ? home_black : home_white}
        alt="Home"
        className={`h-7 ${
          isHome ? "hidden" : ""
        } left-10 cursor-pointer absolute hover:scale-105`}
        onClick={handleHomeClick}
      />
      <img
        src={isLightTheme ? reload_black : reload_white}
        alt="Reload"
        className={`h-7 ${
          isHome ? "hidden" : ""
        } left-24 cursor-pointer absolute hover:scale-105`}
        onClick={handleRetryClick}
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
