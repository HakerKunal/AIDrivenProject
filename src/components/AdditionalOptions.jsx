import React, { useState, useEffect } from "react";
import SubOptionsButton from "./SubOptionsButton";

const AdditionalOptions = ({
  selectedOption,
  activeSubOption,
  onSubOptionClick,
  setPdfUrl,
  pdfUrl,
}) => {
  const [isLoading, setIsLoading] = useState(false);

  const renderContent = () => {
    if (selectedOption === "Problem Identification") {
      return (
        <SubOptionsButton
          options={[
            {
              label: "Data analysis",
              content: <p>Content for Data analysis button</p>,
            },
            {
              label: "Market research",
              content: <p>Content for Market research button</p>,
            },
            {
              label: "User Feedback",
              content: <p>Content for User Feedback button</p>,
            },
          ]}
          activeOption={activeSubOption}
          onOptionClick={onSubOptionClick}
          selectedOption={selectedOption}
          setPdfUrl={setPdfUrl}
          pdfUrl={pdfUrl}
        />
      );
    }

    if (selectedOption === "Prioritization") {
      return (
        <div className="sub-options-buttons">
          <SubOptionsButton
            options={[
              {
                label: "Assist in learning different prioritisation frameworks",
                content: (
                  <p>
                    I am a product manager, who wants to build a{" "}
                    <input
                      type="text"
                      placeholder="App/Product name"
                      style={{
                        border: "2px solid purple",
                        borderRadius: "5px",
                        padding: "8px",
                        outline: "none",
                        fontSize: "16px",
                        color: "black",
                      }}
                    />
                    . The My team uses the{" "}
                    <select
                      style={{
                        border: "2px solid purple",
                        borderRadius: "5px",
                        padding: "8px",
                        outline: "none",
                        fontSize: "16px",
                        color: "black",
                      }}
                    >
                      <option value="MoSCoW method">MoSCoW</option>
                      <option value="KANO model">KANO</option>
                      <option value="Value vs. Complexity">
                        Value vs. Complexity
                      </option>
                      <option value="Bubble Sort">Bubble Sort</option>
                      <option value="Numerical Assignment">
                        Numerical Assignment
                      </option>
                      <option value="Opportunity Prioritization">
                        Opportunity Prioritization
                      </option>
                    </select>{" "}
                    model to prioritise features.
                    <br />
                    <br />
                    Please suggest examples of features that I should build for
                    my MVP using the above prioritisation method. <br />
                    <br />
                    Tabulate this.
                  </p>
                ),
              },
              {
                label: "Assist on prioritisation on basis of listed features",
                content: <p>Content for Assist on prioritisation button</p>,
              },
            ]}
            activeOption={activeSubOption}
            onOptionClick={onSubOptionClick}
            selectedOption={selectedOption}
            setPdfUrl={setPdfUrl}
            pdfUrl={pdfUrl}
          />
        </div>
      );
    }

    if (selectedOption === "Research Phase") {
      return (
        <div className="sub-options-buttons">
          <SubOptionsButton
            options={[
              {
                label: "Competitive analysis",
                content: <p>Content for Competitive analysis button</p>,
              },
              {
                label: "User research",
                content: <p>Content for User research button</p>,
              },
              {
                label: "Ideation",
                content: <p>Content for Ideation button</p>,
              },
            ]}
            activeOption={activeSubOption}
            onOptionClick={onSubOptionClick}
            selectedOption={selectedOption}
            setPdfUrl={setPdfUrl}
            pdfUrl={pdfUrl}
          />
        </div>
      );
    }

    if (selectedOption === "Product Ideation") {
      return (
        <div className="sub-options-buttons">
          <SubOptionsButton
            options={[
              {
                label: "Expand Product Lines",
                content: <p>Content for Expand Product Lines button</p>,
              },
              {
                label: "Aid Product Ideation",
                content: <p>Content for Aid Product Ideation button</p>,
              },
              {
                label: "Ideation",
                content: <p>Content for Ideation button</p>,
              },
            ]}
            activeOption={activeSubOption}
            onOptionClick={onSubOptionClick}
            selectedOption={selectedOption}
            setPdfUrl={setPdfUrl}
            pdfUrl={pdfUrl}
          />
        </div>
      );
    }

    return null;
  };

  return <div className="sub-options">{renderContent()}</div>;
};

export default AdditionalOptions;
