import React, { useState } from "react";
import Home from "./components/Home";

const App = () => {
  const [quizData, setQuizData] = useState([]);
  const [isLightTheme, setIsLightTheme] = useState(true);

  return (
    <div
      className={`${isLightTheme ? "bg-[#F4F6F5]" : "bg-[#323E48]"} h-screen`}
    >
      <Home
        setQuizData={setQuizData}
        isLightTheme={isLightTheme}
        setIsLightTheme={setIsLightTheme}
      />
    </div>
  );
};

export default App;
