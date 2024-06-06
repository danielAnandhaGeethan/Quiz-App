import React, { useEffect, useState } from "react";
import Difficulty from "./Difficulty";

const Multiple = ({ item, isLightTheme }) => {
  const [choices, setChoices] = useState([]);
  const [answer, setAnswer] = useState("");

  useEffect(() => {
    setChoices([...item.incorrect_answers, item.correct_answer]);
    setAnswer(item.correct_answer);
    console.log(choices);
  }, [item]);

  return (
    <div
      className={`${
        isLightTheme ? "bg-white" : "bg-white/10"
      } px-5 py-2 rounded-lg shadow-lg flex flex-col gap-1`}
    >
      <h1 className={`${isLightTheme ? "" : "text-white/70"} font-semibold`}>
        {item.question}
      </h1>
      <div className="flex justify-between">
        <h1 className={`${isLightTheme ? "" : "text-white/40"}`}>
          <span>Category : </span>
          {item.category}
        </h1>
        <Difficulty difficulty={item.difficulty} isLightTheme={isLightTheme} />
      </div>
      <div>
        {choices.map((choice, index) => (
          <div>
            <input type="radio" value={choice} key={index} />
            <label for={choice}>{choice}</label>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Multiple;
