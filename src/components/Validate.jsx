import React from "react";
import correct from "../assets/correct.png";
import wrong from "../assets/wrong.png";

const Validate = ({ prevAns, choices, answer, isSubmitted, index }) => {
  return (
    <div className="flex items-center">
      {(prevAns === choices[index] && choices[index] === answer) ||
      (prevAns !== choices[index] && choices[index] === answer) ? (
        <img
          src={correct}
          alt="correct"
          className={`${isSubmitted ? "" : "hidden"} h-8`}
        />
      ) : prevAns === choices[index] && choices[index] !== answer ? (
        <img
          src={wrong}
          alt="wrong"
          className={`${isSubmitted ? "" : "hidden"} h-6`}
        />
      ) : (
        ""
      )}
    </div>
  );
};

export default Validate;
