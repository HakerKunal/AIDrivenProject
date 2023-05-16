import React, { useState } from "react";

const OptionButton = ({ option, onClick, selectedOption }) => {
  const handleClick = () => {
    onClick(option);
  };

  return (
    <button
      className={`option-box ${selectedOption === option ? "pressed" : ""}`}
      onClick={handleClick}
    >
      {option}
    </button>
  );
};

export default OptionButton;
