import React, { useState } from "react";
import { Document, Page } from "react-pdf";
import sampleFile from "../sample.pdf";
import priorPdf from "../pdfs/Prompts for Product Managers-48.pdf";

const SubOptionsButton = ({
  options,
  activeOption,
  onOptionClick,
  selectedOption,
  setPdfUrl,
  pdfUrl,
}) => {
  const [submittedContent, setSubmittedContent] = useState(null);
  const [selectOption, setSelectOption] = useState("");

  const handleButtonClick = (option) => {
    setPdfUrl("");
    onOptionClick(option);
    setSelectOption(option.label);
  };

  const handleSubmit = () => {
    setPdfUrl("");
    if (
      selectOption === "Assist in learning different prioritisation frameworks"
    ) {
      setPdfUrl(priorPdf); // Set the PDF URL to the desired PDF file
    }
  };
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        paddingBottom: "50px",
        alignItems: "center",
      }}
    >
      <div className="sub-options-buttons">
        {options.map((option) => (
          <button
            key={option.label}
            onClick={() => handleButtonClick(option)}
            style={{
              backgroundColor:
                activeOption && activeOption.label === option.label
                  ? "#d6ede4"
                  : "#e0e0e0",
              color:
                activeOption && activeOption.label === option.label
                  ? "black"
                  : "#333",
              border: "none",
              padding: "8px 16px",
              marginRight: "8px",
              cursor: "pointer",
            }}
          >
            {option.label}
          </button>
        ))}
      </div>
      {activeOption && (
        <div className="sub-options-content">{activeOption.content}</div>
      )}
      {activeOption && (
        <button
          onClick={handleSubmit}
          style={{
            width: "200px",
            height: "50px",
            border: "none",
            outline: "none",
            background: "#2f2f2f",
            color: "#fff",
            fontSize: "22px",
            borderRadius: "40px",
            textAlign: "center",
            boxShadow: "0 6px 20px -5px rgba(0,0,0,0.4)",
            position: "relative",
            overflow: "hidden",
            cursor: "pointer",
            marginTop: "40px",
          }}
        >
          Submit
        </button>
      )}
      {pdfUrl && (
        <iframe
          src={pdfUrl}
          title="PDF Viewer"
          style={{
            width: "80%",
            height: "800px",
            position: "relative",
            marginTop: "20px",

            border: "none",
            boxShadow: "0 0 10px 1px purple",
            animation: "borderFlow 2s infinite alternate",
          }}
        ></iframe>
      )}
    </div>
  );
};

export default SubOptionsButton;
