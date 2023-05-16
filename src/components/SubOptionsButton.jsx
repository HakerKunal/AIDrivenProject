import React, { useState } from "react";

const SubOptionsButton = ({ options, activeOption, onOptionClick }) => {
  const handleButtonClick = (option) => {
    onOptionClick(option);
  };

  return (
    <div>
      <div className="sub-options-buttons">
        {options.map((option) => (
          <button
            key={option.label}
            onClick={() => handleButtonClick(option)}
            style={{
              backgroundColor:
                activeOption && activeOption.label === option.label
                  ? "#d5c5db "
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
    </div>
  );
};

export default SubOptionsButton;
