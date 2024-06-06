import React, { useState } from "react";
import Navbar from "./Navbar";
import Multiple from "./Multiple";
import Boolean from "./Boolean";
import close from "../assets/close.png";

const Quiz = ({ quizData, isLightTheme, setIsLightTheme }) => {
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);

  return (
    <div className={`${isLightTheme ? "bg-[#F4F6F5]" : "bg-[#323E48]"}`}>
      <Navbar isLightTheme={isLightTheme} setIsLightTheme={setIsLightTheme} />
      <div className="py-28 h-screen lg:px-64 md:px-28 px-10 h-[100%]">
        <div className="flex flex-col gap-5">
          {quizData.map((item, index) =>
            item.type === "multiple" ? (
              <Multiple
                item={item}
                key={index}
                isLightTheme={isLightTheme}
                score={score}
                setScore={setScore}
              />
            ) : (
              <Boolean
                item={item}
                key={index}
                isLightTheme={isLightTheme}
                score={score}
                setScore={setScore}
              />
            )
          )}
        </div>
        <div className="mt-10 flex justify-center">
          <button onClick={() => setShowScore(true)}>
            <h1
              className={`${
                isLightTheme ? "text-white" : "text-white/70"
              } text-lg bg-[#117562] px-2 py-1 rounded-2xl`}
            >
              Submit
            </h1>
          </button>
        </div>
      </div>
      <div
        className={`absolute z-10 top-0 left-0 flex justify-center items-center h-full w-full ${
          showScore ? "" : "hidden"
        }`}
      >
        <div
          className={`${
            isLightTheme ? "bg-gray-300" : "bg-gray-500"
          } w-[250px] rounded-xl flex flex-col gap-8`}
        >
          <div className="flex justify-end">
            <img
              src={close}
              alt="Close"
              className="h-8 cursor-pointer pr-4 pt-4"
              onClick={() => setShowScore(false)}
            />
          </div>
          <h1 className="text-center">
            <span className="font-semibold">Score : </span>
            {score} / {quizData.length}
          </h1>
          <img src="" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Quiz;
