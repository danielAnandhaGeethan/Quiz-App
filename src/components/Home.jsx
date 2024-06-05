import React, { useState } from "react";
import Navbar from "./Navbar";
import categories from "../constants/data";
import { enqueueSnackbar, SnackbarProvider } from "notistack";
import url from "../constants/url";
import axios from "axios";

const Home = () => {
  const [num, setNum] = useState(null);
  const [category, setCategory] = useState(null);
  const [difficulty, setDifficulty] = useState(null);
  const [type, setType] = useState(null);

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
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      <SnackbarProvider />
      <Navbar />
      <div className="h-screen flex items-center justify-center">
        <div className="bg-white p-8 rounded-xl shadow-lg flex flex-col gap-4">
          <div>
            <h1>Number of Questions</h1>
            <input
              type="text"
              className="bg-gray-100 border border-gray-300 rounded-lg w-40 text-center focus:outline-none"
              value={num}
              onChange={handleQuestionsChange}
            />
          </div>
          <div>
            <h1>Category</h1>
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
            <h1>Difficulty</h1>
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
            <h1>Type</h1>
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
              <h1 className="text-lg text-white bg-[#117562] px-2 py-1 rounded-2xl">
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
