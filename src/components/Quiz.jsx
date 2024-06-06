import React from "react";
import Navbar from "./Navbar";
import Multiple from "./Multiple";
import Boolean from "./Boolean";

const Quiz = ({ quizData, isLightTheme, setIsLightTheme }) => {
  return (
    <div className={`${isLightTheme ? "bg-[#F4F6F5]" : "bg-[#323E48]"}`}>
      <Navbar isLightTheme={isLightTheme} setIsLightTheme={setIsLightTheme} />
      <div className="py-28 h-screen lg:px-64 md:px-28 px-10 h-full">
        <div className="flex flex-col gap-5">
          {quizData.map((item, index) =>
            item.type === "multiple" ? (
              <Multiple item={item} key={index} isLightTheme={isLightTheme} />
            ) : (
              <Boolean item={item} key={index} />
            )
          )}
        </div>
      </div>
    </div>
  );
};

export default Quiz;
