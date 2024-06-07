import React, { useEffect, useState } from "react";
import Difficulty from "./Difficulty";
import Validate from "./Validate";

const Multiple = ({ item, isLightTheme, score, setScore, isSubmitted }) => {
  const [choices, setChoices] = useState([]);
  const [answer, setAnswer] = useState("");
  const [prevAns, setPrevAns] = useState("");

  const shuffleArray = (array) => {
    const shuffledArray = [...array];

    for (let i = shuffledArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffledArray[i], shuffledArray[j]] = [
        shuffledArray[j],
        shuffledArray[i],
      ];
    }

    return shuffledArray;
  };

  useEffect(() => {
    setChoices(shuffleArray([...item.incorrect_answers, item.correct_answer]));
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
            disabled={isSubmitted}
          />
          <label className={`${isLightTheme ? "" : "text-white/70"}`}>
            {choices[0]}
          </label>
          <Validate
            prevAns={prevAns}
            choices={choices}
            answer={answer}
            isSubmitted={isSubmitted}
            index={0}
          />
        </div>
        <div className="flex items-center gap-1">
          <input
            type="radio"
            value={choices[1]}
            onChange={handleRadioChange}
            checked={choices[1] === prevAns}
            disabled={isSubmitted}
          />
          <label className={`${isLightTheme ? "" : "text-white/70"}`}>
            {choices[1]}
          </label>
          <Validate
            prevAns={prevAns}
            choices={choices}
            answer={answer}
            isSubmitted={isSubmitted}
            index={1}
          />
        </div>
        <div className="flex items-center gap-1">
          <input
            type="radio"
            value={choices[2]}
            onChange={handleRadioChange}
            checked={choices[2] === prevAns}
            disabled={isSubmitted}
          />
          <label className={`${isLightTheme ? "" : "text-white/70"}`}>
            {choices[2]}
          </label>
          <Validate
            prevAns={prevAns}
            choices={choices}
            answer={answer}
            isSubmitted={isSubmitted}
            index={2}
          />
        </div>
        <div className="flex items-center gap-1">
          <input
            type="radio"
            value={choices[3]}
            onChange={handleRadioChange}
            checked={choices[3] === prevAns}
            disabled={isSubmitted}
          />
          <label className={`${isLightTheme ? "" : "text-white/70"}`}>
            {choices[3]}
          </label>
          <Validate
            prevAns={prevAns}
            choices={choices}
            answer={answer}
            isSubmitted={isSubmitted}
            index={3}
          />
        </div>
      </div>
    </div>
  );
};

export default Multiple;
