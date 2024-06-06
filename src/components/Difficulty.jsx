import React from "react";

const Difficulty = ({ difficulty, isLightTheme }) => {
  return isLightTheme ? (
    <div
      className={`${
        difficulty === "easy"
          ? "bg-green-600"
          : difficulty === "medium"
          ? "bg-yellow-500"
          : "bg-red-600"
      } px-2 rounded-xl`}
    >
      <h1
        className={`${
          difficulty === "easy"
            ? "text-green-200"
            : difficulty === "medium"
            ? "text-yellow-100"
            : "text-red-200"
        } text-sm`}
      >
        {difficulty}
      </h1>
    </div>
  ) : (
    <div
      className={`${
        difficulty === "easy"
          ? "bg-green-800"
          : difficulty === "medium"
          ? "bg-yellow-600"
          : "bg-red-700"
      } px-2 rounded-xl`}
    >
      <h1
        className={`${
          difficulty === "easy"
            ? "text-green-300"
            : difficulty === "medium"
            ? "text-yellow-300"
            : "text-red-300"
        } text-sm`}
      >
        {difficulty}
      </h1>
    </div>
  );
};

export default Difficulty;
