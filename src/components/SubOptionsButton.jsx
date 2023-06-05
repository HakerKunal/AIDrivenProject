import React, { useState } from "react";
import priorPdf from "../pdfs/Prompts for Product Managers-48.pdf";

const SubOptionsButton = ({
  options,
  activeOption,
  onOptionClick,
  setPdfUrl,
  pdfUrl,
}) => {
  const [zoomedItem, setZoomedItem] = useState("");

  const handleItemClick = (item) => {
    setPdfUrl("");
    setZoomedItem(item);
  };

  const [selectOption, setSelectOption] = useState("");

  const handleButtonClick = (option) => {
    setPdfUrl("");
    onOptionClick(option);
    setSelectOption(option.label);
    setZoomedItem("");
  };

  const handleSubmit = () => {
    setPdfUrl("");
    if (
      zoomedItem.label ===
      "Assist in learning different prioritization frameworks"
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
      {activeOption && activeOption.content.length > 1 && zoomedItem === "" && (
        <div
          className="sub-options-content1 zoom-out-two-animation"
          style={{
            marginTop: "40px",
            paddingTop: "40px",
            paddingBottom: "40px",
          }}
        >
          {activeOption.content.map((item, index) => (
            <div
              key={index}
              onClick={() => handleItemClick(item)}
              className={`content-item  ${
                zoomedItem === item ? "zoom-out-animation" : ""
              }`}
            >
              <div
                className="label-option"
                style={{
                  position: "relative",
                  bottom: "31px",
                  right: "10px",
                }}
              >
                {item.label}
              </div>
              <div>{item.disabledContent}</div>
            </div>
          ))}
        </div>
      )}
      {activeOption && activeOption.content.length === 1 && (
        <div className="sub-options-content ">
          <div>{activeOption.content[0]}</div>
        </div>
      )}
      {zoomedItem && (
        <div style={{ position: "relative" }} className="zoom-in-animation">
          <div
            className="back-button"
            style={{ position: "absolute", top: 20, right: 0 }}
          >
            <a
              className="label"
              onClick={() => {
                setPdfUrl("");
                setZoomedItem("");
              }}
            >
              back
            </a>
          </div>
          <div
            // style={{ display: "flex", flexDirection: "column" }}
            className="content-item2"
          >
            <div
              className="label-option"
              style={{
                position: "relative",
                bottom: "31px",
                right: "10px",
              }}
            >
              {zoomedItem.label}
            </div>
            <div>
              <div>{zoomedItem.content}</div>
            </div>
          </div>
        </div>
      )}
      {activeOption && activeOption.content.length === 1 && (
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
      {activeOption && activeOption.content.length > 1 && zoomedItem !== "" && (
        <button
          onClick={handleSubmit}
          className="zoom-in-animation"
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
            boxShadow: "0 0 10px 1px green",
            animation: "borderFlow 2s infinite alternate",
          }}
        ></iframe>
      )}
    </div>
  );
};

export default SubOptionsButton;
