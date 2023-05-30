import React, { useState, useEffect } from "react";
import OptionButton from "./OptionButton";
import AdditionalOptions from "./AdditionalOptions";

const MainPage = () => {
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
        <h1 className="main-page__heading">Product Prompter</h1>
        <div className="menu-icon">&#9776;</div>
      </header>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          marginTop: "40px",
        }}
      >
        <div
          class="typewriter"
          style={{
            border: "1px solid white",
            paddingLeft: "40px",
            paddingRight: "40px",
          }}
        >
          <h1 style={{ color: "white" }}>
            AI-Powered Product Management Assistant
          </h1>
        </div>
      </div>
      <div className="prompt-box">
        <p className="prompt-text">
          Hey there, <br />
          I'm your personal PM assistant{" "}
          <span style={{ fontSize: "30px" }}>🤖</span>. Please choose the field
          where you need guidance.
        </p>
        <div className="options-container">
          <div className="option-box">
            <OptionButton
              option="Product Strategy"
              onClick={handleOptionClick}
              selectedOption={selectedOption}
            />
            <OptionButton
              option="Product Planning"
              onClick={handleOptionClick}
              selectedOption={selectedOption}
            />
            <OptionButton
              option="Product Development"
              onClick={handleOptionClick}
              selectedOption={selectedOption}
            />
            <OptionButton
              option="Product Launch"
              onClick={handleOptionClick}
              selectedOption={selectedOption}
            />
            <OptionButton
              option="Product Lifecycle Management"
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
