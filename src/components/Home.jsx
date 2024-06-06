import React, { useState } from "react";
import Navbar from "./Navbar";
import categories from "../constants/data";
import { enqueueSnackbar, SnackbarProvider } from "notistack";
import url from "../constants/url";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Home = ({ setQuizData, isLightTheme, setIsLightTheme }) => {
  const [num, setNum] = useState("");
  const [category, setCategory] = useState("");
  const [difficulty, setDifficulty] = useState("");
  const [type, setType] = useState("");
  const navigate = useNavigate();

  const handleQuestionsChange = (event) => {
    const temp = event.target.value;

    setNum(temp);
    if (temp === null || temp === "") return;

    if (temp > 50)
      enqueueSnackbar("Max : 50", {
        variant: "error",
        autoHideDuration: "3000",
      });
    else if (temp < 1)
      enqueueSnackbar("Min : 1", {
        variant: "error",
        autoHideDuration: "3000",
      });
  };

  const handleCategoryChange = (event) => {
    setCategory(event.target.value);
  };

  const handleDifficultyChange = (event) => {
    setDifficulty(event.target.value);
  };

  const handleTypeChange = (event) => {
    setType(event.target.value);
  };

  const handleGenerate = async () => {
    let one = "",
      two = "",
      three = "",
      four = "";

    if (num !== null && num !== "") one = "amount=" + num;
    else one = "amount=10";

    if (category !== 1 && category !== null) two = "&cateogory=" + category;

    if (difficulty !== null && difficulty !== "any")
      three = "&difficulty=" + difficulty;

    if (type !== null && type !== "any") four = "&type=" + type;

    await axios
      .get(url + one + two + three + four)
      .then((res) => {
        console.log(res.data.results);
        setQuizData(res.data.results);
        navigate("/quiz");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div
      className={`${isLightTheme ? "bg-[#F4F6F5]" : "bg-[#323E48]"} h-screen`}
    >
      <SnackbarProvider />
      <Navbar
        isLightTheme={isLightTheme}
        setIsLightTheme={setIsLightTheme}
        isHome={true}
      />
      <div className="h-screen flex items-center justify-center">
        <div
          className={`${
            isLightTheme ? "bg-white" : "bg-white/10"
          } p-8 rounded-xl shadow-lg flex flex-col gap-4`}
        >
          <div className="text-center">
            <h1
              className={`${
                isLightTheme ? "text-[#2A333C]" : "text-white/80"
              } font-semibold text-lg`}
            >
              Fill Parameters and Generate Quiz
            </h1>
          </div>
          <div>
            <h1 className={`${isLightTheme ? "text-black" : "text-white/80"}`}>
              Number of Questions
            </h1>
            <input
              type="text"
              className="bg-gray-100 border border-gray-300 rounded-lg w-40 text-center focus:outline-none"
              value={num}
              onChange={handleQuestionsChange}
            />
          </div>
          <div>
            <h1 className={`${isLightTheme ? "text-black" : "text-white/80"}`}>
              Category
            </h1>
            <select
              onChange={handleCategoryChange}
              className="block bg-gray-100 border border-gray-300 rounded-lg py-0.5 w-80 focus:outline-none"
            >
              {categories.map((category) => (
                <option
                  key={category.id}
                  value={category.id}
                  className="text-sm"
                >
                  {category.name}
                </option>
              ))}
            </select>
          </div>
          <div>
            <h1 className={`${isLightTheme ? "text-black" : "text-white/80"}`}>
              Difficulty
            </h1>
            <select
              onChange={handleDifficultyChange}
              className="block bg-gray-100 border border-gray-300 rounded-lg py-0.5 w-40 focus:outline-none"
            >
              <option value="any" className="text-sm">
                Any
              </option>
              <option value="easy" className="text-sm">
                Easy
              </option>
              <option value="medium" className="text-sm">
                Medium
              </option>
              <option value="hard" className="text-sm">
                Hard
              </option>
            </select>
          </div>
          <div>
            <h1 className={`${isLightTheme ? "text-black" : "text-white/80"}`}>
              Type
            </h1>
            <select
              onChange={handleTypeChange}
              className="block bg-gray-100 border border-gray-300 rounded-lg py-0.5 w-40 focus:outline-none"
            >
              <option value="any" className="text-sm">
                Any
              </option>
              <option value="multiple" className="text-sm">
                Multiple
              </option>
              <option value="boolean" className="text-sm">
                True / False
              </option>
            </select>
          </div>
          <div className="flex justify-center mt-3">
            <button
              onClick={handleGenerate}
              className="transform transition duration-300 ease-in-out hover:scale-95"
            >
              <h1
                className={`${
                  isLightTheme ? "text-white" : "text-white/70"
                } text-lg bg-[#117562] px-2 py-1 rounded-2xl`}
              >
                Generate Quiz
              </h1>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
