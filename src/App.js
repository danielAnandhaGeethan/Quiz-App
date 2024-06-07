import React, { useState } from "react";
import Home from "./components/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Quiz from "./components/Quiz";

const App = () => {
  const [isLightTheme, setIsLightTheme] = useState(true);

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <Home
              isLightTheme={isLightTheme}
              setIsLightTheme={setIsLightTheme}
            />
          }
        />
        <Route
          path="/quiz"
          element={
            <Quiz
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
