import React, { useEffect, useState } from "react";
import Difficulty from "./Difficulty";

const Boolean = ({ item, isLightTheme, score, setScore }) => {
  const [choices, setChoices] = useState(["True", "False"]);
  const [answer, setAnswer] = useState("");
  const [prevAns, setPrevAns] = useState("");

  useEffect(() => {
    setAnswer(item.correct_answer);
  }, [item]);

  const handleRadioChange = (event) => {
    if (prevAns !== "") {
      if (prevAns === event.target.value) {
        //do nothing
      } else {
        if (prevAns === answer) {
          setScore(score - 1);
        } else if (event.target.value === answer) {
          setScore(score + 1);
        }
      }
    } else {
      if (event.target.value === answer) setScore(score + 1);
    }

    setPrevAns(prevAns !== event.target.value ? event.target.value : "");

    console.log(score);
  };

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
      <div className="grid grid-cols-2 pt-5 pb-2">
        <div className="flex items-center gap-1">
          <input
            type="radio"
            value={choices[0]}
            onChange={handleRadioChange}
            checked={choices[0] === prevAns}
          />
          <label className={`${isLightTheme ? "" : "text-white/70"}`}>
            {choices[0]}
          </label>
        </div>
        <div className="flex items-center gap-1">
          <input
            type="radio"
            value={choices[1]}
            onChange={handleRadioChange}
            checked={choices[1] === prevAns}
          />
          <label className={`${isLightTheme ? "" : "text-white/70"}`}>
            {choices[1]}
          </label>
        </div>
      </div>
    </div>
  );
};

export default Boolean;
