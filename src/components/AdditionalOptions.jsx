import React from "react";
import SubOptionsButton from "./SubOptionsButton";

const AdditionalOptions = ({
  selectedOption,
  activeSubOption,
  onSubOptionClick,
}) => {
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
                    I'm building a CRM for{" "}
                    <input type="text" placeholder="insert text here" />. The
                    product team uses the{" "}
                    <select>
                      <option value="MoSCoW method">MoSCoW method</option>
                      <option value="KANO model">KANO model</option>
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
                    to prioritize features.
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
          />
        </div>
      );
    }

    return null;
  };

  return <div className="sub-options">{renderContent()}</div>;
};

export default AdditionalOptions;
