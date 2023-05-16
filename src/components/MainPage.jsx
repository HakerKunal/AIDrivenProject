import React, { useState, useEffect } from "react";
import OptionButton from "./OptionButton";
import AdditionalOptions from "./AdditionalOptions";
import { Document, Page } from "react-pdf";

import kanoImg from "./kanoModel.png";

const MainPage = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const images = [
    "https://media.licdn.com/dms/image/C5112AQHe-rQWyp9oAQ/article-cover_image-shrink_423_752/0/1520186101455?e=1689206400&v=beta&t=E96JMEwGw-oFa_0lGYiuwWUgi3YxZnCZP_VEgujIgFQ",
    "https://emerj.com/wp-content/uploads/2020/02/The-AI-Product-Manager-A-Key-Role-for-the-Future-of-AI-Deployment-950x540-1-1-1045x594.jpg",
    "https://symphonyindustrial.ai/digital-manufacturing/wp-content/uploads/sites/3/2021/10/Careers-Banner.jpg.webp",
  ];

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImageIndex((currentImageIndex) =>
        currentImageIndex === images.length - 1 ? 0 : currentImageIndex + 1
      );
    }, 3000);
    return () => clearInterval(intervalId);
  }, []);
  const [selectedOption, setSelectedOption] = useState(null);
  const [activeSubOption, setActiveSubOption] = useState(null);

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    setActiveSubOption(null);
  };

  const handleSubOptionClick = (subOption) => {
    setActiveSubOption(subOption);
  };

  return (
    <div className="App">
      <header className="header">
        <h1 className="main-page__heading">YourHelpBot</h1>
        <div className="menu-icon">&#9776;</div>
      </header>
      <div className="image-banner">
        <img
          src={images[currentImageIndex]}
          alt="Banner"
          width={1000}
          height={400}
        />
      </div>
      <div className="prompt-box">
        <p>Hi, in which field do you need help? For Product Management.</p>
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
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default MainPage;
