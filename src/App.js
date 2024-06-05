import React, { useState } from "react";
import Home from "./components/Home";

const App = () => {
  const [quizData, setQuizData] = useState([]);

  return (
    <div className="bg-[#F4F6F5] h-screen">
      <Home setQuizData={setQuizData} />
    </div>
  );
};

export default App;
