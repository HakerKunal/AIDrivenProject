import React, { useState, useEffect } from "react";
import { Document, Page } from "react-pdf";

import kanoImg from "./kanoModel.png";

const MainPage = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [showPrioritizationSubOptions, setShowPrioritizationSubOptions] =
    useState(false);
  const [
    showProblemIdentifiactionSubOptions,
    setshowProblemIdentifiactionSubOptions,
  ] = useState(false);
  const [showResearchPhaseSubOptions, setshowResearchPhaseSubOptions] =
    useState(false);
  const [showPrioritizationSchemeText, setShowPrioritizationSchemeText] =
    useState(false);

  const [prioritizationText, setPrioritizationText] = useState("");
  const [prioritizationModel, setPrioritizationModel] = useState("");
  const [submitClicked, setSubmitClicked] = useState(false);
  const fullText = `Im building a ${prioritizationText}. The product team uses the ${prioritizationModel} to prioritize features.`;
  const images = [
    "https://media.licdn.com/dms/image/C5112AQHe-rQWyp9oAQ/article-cover_image-shrink_423_752/0/1520186101455?e=1689206400&v=beta&t=E96JMEwGw-oFa_0lGYiuwWUgi3YxZnCZP_VEgujIgFQ",
    "https://emerj.com/wp-content/uploads/2020/02/The-AI-Product-Manager-A-Key-Role-for-the-Future-of-AI-Deployment-950x540-1-1-1045x594.jpg",
    "https://symphonyindustrial.ai/digital-manufacturing/wp-content/uploads/sites/3/2021/10/Careers-Banner.jpg.webp",
  ];

  const handlePrioritizationClick = () => {
    setShowPrioritizationSubOptions(!showPrioritizationSubOptions);
    setshowProblemIdentifiactionSubOptions(false);
    setshowResearchPhaseSubOptions(false);
  };
  const handlePrioritizationSchemeClick = () => {
    setShowPrioritizationSchemeText(!showPrioritizationSchemeText);
    setshowResearchPhaseSubOptions(false);
  };
  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImageIndex((currentImageIndex) =>
        currentImageIndex === images.length - 1 ? 0 : currentImageIndex + 1
      );
    }, 3000);
    return () => clearInterval(intervalId);
  }, []);

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
            <button
              onClick={() => {
                setshowProblemIdentifiactionSubOptions(
                  !showProblemIdentifiactionSubOptions
                );
                setShowPrioritizationSubOptions(false);
                setShowPrioritizationSchemeText(false);
                setshowResearchPhaseSubOptions(false);
                setSubmitClicked(false);
              }}
            >
              Problem identification
            </button>
            <button onClick={handlePrioritizationClick} className="relative">
              Prioritization
            </button>
            <button
              onClick={() => {
                setshowResearchPhaseSubOptions(!showResearchPhaseSubOptions);
                setSubmitClicked(false);
                setShowPrioritizationSchemeText(false);
                setshowProblemIdentifiactionSubOptions(false);
                setShowPrioritizationSubOptions(false);
              }}
            >
              Research Phase
            </button>
            <button>Discovery Phase</button>
            <button>Business Outcome</button>
            <button>Evaluation / Validation</button>
            <button>Execution</button>
          </div>
          {showPrioritizationSubOptions && (
            <div className="sub-options">
              <button onClick={handlePrioritizationSchemeClick}>
                Assist in learning different prioritisation frameworks
              </button>
              <button
                onClick={() => {
                  setShowPrioritizationSchemeText(false);
                  setSubmitClicked(false);
                  setshowResearchPhaseSubOptions(false);
                }}
              >
                Assist on prioritisation on basis of listed features
              </button>
            </div>
          )}
          {showProblemIdentifiactionSubOptions && (
            <div className="sub-options">
              <button>Data analysis</button>
              <button>Market research</button>
              <button>User Feedback</button>
            </div>
          )}
          {showResearchPhaseSubOptions && (
            <div className="sub-options">
              <button>Competitive analysis</button>
              <button>User research</button>
              <button>Ideation</button>
            </div>
          )}
        </div>
        {showPrioritizationSchemeText && (
          <p>
            I'm building a CRM for{" "}
            <input
              type="text"
              value={prioritizationText}
              onChange={(event) => setPrioritizationText(event.target.value)}
            />
            . The product team uses the{" "}
            <select
              value={prioritizationModel}
              onChange={(event) => setPrioritizationModel(event.target.value)}
            >
              <option value="MoSCoW method">MoSCoW method</option>
              <option value="KANO model">KANO model</option>
              <option value="Value vs. Complexity">Value vs. Complexity</option>
              <option value="Bubble Sort">Bubble Sort</option>
              <option value="Numerical Assignment">Numerical Assignment</option>
              <option value="Opportunity Prioritization">
                Opportunity Prioritization"
              </option>
            </select>{" "}
            to prioritize features.
          </p>
        )}
        <div className="submit-container">
          {showPrioritizationSchemeText && (
            <button
              className="submit-button"
              onClick={() => setSubmitClicked(true)}
            >
              Submit
            </button>
          )}
        </div>
        {submitClicked && (
          <div>
            <img src={kanoImg} alt="kanoImage" />
          </div>
        )}
      </div>
    </div>
  );
};

export default MainPage;
