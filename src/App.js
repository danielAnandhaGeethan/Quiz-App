import React, { useState } from "react";
import Home from "./components/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Quiz from "./components/Quiz";

const App = () => {
  const [quizData, setQuizData] = useState([]);
  const [isLightTheme, setIsLightTheme] = useState(true);

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <Home
              setQuizData={setQuizData}
              isLightTheme={isLightTheme}
              setIsLightTheme={setIsLightTheme}
            />
          }
        />
        <Route
          path="/quiz"
          element={
            <Quiz
              quizData={quizData}
              isLightTheme={isLightTheme}
              setIsLightTheme={setIsLightTheme}
            />
          }
        />
      </Routes>
    </Router>
  );
};

export default App;
