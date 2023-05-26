import React, { useState, useEffect } from "react";
import OptionButton from "./OptionButton";
import AdditionalOptions from "./AdditionalOptions";
import logo from "../images/productprompter-logo-zip-file/png/logo-no-background.png";

import banner from "../images/pic4.jpg";

const MainPage = () => {
  const images = [
    "https://media.licdn.com/dms/image/C5112AQHe-rQWyp9oAQ/article-cover_image-shrink_423_752/0/1520186101455?e=1689206400&v=beta&t=E96JMEwGw-oFa_0lGYiuwWUgi3YxZnCZP_VEgujIgFQ",
  ];

  const [selectedOption, setSelectedOption] = useState(null);
  const [activeSubOption, setActiveSubOption] = useState(null);
  const [pdfUrl, setPdfUrl] = useState(""); // State

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    setActiveSubOption(null);
    setPdfUrl("");
  };

  const handleSubOptionClick = (subOption) => {
    setActiveSubOption(subOption);
  };

  return (
    <div className="App">
      <div class="matrix-text" id="matrixText"></div>
      <header className="header">
        <h1 className="main-page__heading">
          <img src={logo} width={250} />
        </h1>
        <div className="menu-icon">&#9776;</div>
      </header>
      <div className="image-banner">
        {/* <img src={banner} alt="Banner" width={1000} height={500} /> */}
      </div>
      <div className="prompt-box">
        <p className="prompt-text">
          Hey there, <br />
          I'm your personal PM assistant{" "}
          <span style={{ fontSize:"30px" }}>🤖</span>. Please
          choose the field where you need guidance.
        </p>
        <div className="options-container">
          <div className="option-box">
            <OptionButton
              option="Problem Identification"
              onClick={handleOptionClick}
              selectedOption={selectedOption}
            />
            <OptionButton
              option="Prioritization"
              onClick={handleOptionClick}
              selectedOption={selectedOption}
            />
            <OptionButton
              option="Research Phase"
              onClick={handleOptionClick}
              selectedOption={selectedOption}
            />
            <OptionButton
              option="Product Ideation"
              onClick={handleOptionClick}
              selectedOption={selectedOption}
            />
            <OptionButton
              option="Buisness Outcome"
              onClick={handleOptionClick}
              selectedOption={selectedOption}
            />

            <OptionButton
              option="Evaluation / Validation"
              onClick={handleOptionClick}
              selectedOption={selectedOption}
            />

            <OptionButton
              option="Excecution"
              onClick={handleOptionClick}
              selectedOption={selectedOption}
            />
          </div>

          {selectedOption && (
            <AdditionalOptions
              selectedOption={selectedOption}
              activeSubOption={activeSubOption}
              onSubOptionClick={handleSubOptionClick}
              setPdfUrl={setPdfUrl}
              pdfUrl={pdfUrl}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default MainPage;
