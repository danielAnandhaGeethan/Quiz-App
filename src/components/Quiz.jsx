import React, { useState } from "react";
import Navbar from "./Navbar";
import Multiple from "./Multiple";
import Boolean from "./Boolean";
import close from "../assets/close.png";
import sad from "../assets/sad.png";
import smile from "../assets/smile.png";
import happy from "../assets/happy.png";

const Quiz = ({ quizData, isLightTheme, setIsLightTheme }) => {
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = () => {
    setShowScore(true);
    setIsSubmitted(true);
    window.scrollTo({ top: 0 });
  };

  return (
    <div className={`${isLightTheme ? "bg-[#F4F6F5]" : "bg-[#323E48]"}`}>
      <Navbar
        isLightTheme={isLightTheme}
        setIsLightTheme={setIsLightTheme}
        isHome={false}
      />
      <div className="py-28 lg:px-64 md:px-28 px-10">
        <div className="flex flex-col gap-5">
          {quizData.map((item, index) =>
            item.type === "multiple" ? (
              <Multiple
                item={item}
                key={index}
                isLightTheme={isLightTheme}
                score={score}
                setScore={setScore}
                isSubmitted={isSubmitted}
              />
            ) : (
              <Boolean
                item={item}
                key={index}
                isLightTheme={isLightTheme}
                score={score}
                setScore={setScore}
                isSubmitted={isSubmitted}
              />
            )
          )}
        </div>
        <div className="mt-10 flex justify-center">
          <button onClick={handleSubmit}>
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
            isLightTheme ? "bg-gray-200" : "bg-gray-500"
          } w-[250px] rounded-xl flex flex-col gap-8 py-5`}
        >
          <div className="flex justify-end">
            <img
              src={close}
              alt="Close"
              className="h-5 cursor-pointer pr-4"
              onClick={() => setShowScore(false)}
            />
          </div>
          <h1 className="text-center">
            <span className="font-semibold">Score : </span>
            {score} / {quizData.length}
          </h1>
          <div className="flex justify-center">
            <img
              src={
                score / quizData.length < 50
                  ? sad
                  : score / quizData.length < 75
                  ? smile
                  : happy
              }
              alt="Emoji"
              className="h-10 w-10"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Quiz;
