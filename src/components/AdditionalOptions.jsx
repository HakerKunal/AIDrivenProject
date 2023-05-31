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

  const initalSentence = (
    <p style={{ textAlign: "center", fontSize: "18px" }}>
      I am a product manager building{" "}
      <input
        type="text"
        placeholder="Enter product name"
        style={{
          border: "2px solid #066a37",
          borderRadius: "5px",
          padding: "8px",
          outline: "none",
          fontSize: "12px",
          color: "black",
        }}
      />
      .
    </p>
  );

  const renderContent = () => {
    if (selectedOption === "Product Strategy") {
      return (
        <SubOptionsButton
          options={[
            {
              label: "Market research and analysis",
              content: [
                <p style={{ textAlign: "center", fontSize: "18px" }}>
                  I am a product manager building{" "}
                  <input
                    type="text"
                    placeholder="Enter product name"
                    style={{
                      border: "2px solid #066a37",
                      borderRadius: "5px",
                      padding: "8px",
                      outline: "none",
                      fontSize: "12px",
                      color: "black",
                    }}
                  />
                  . What are the current market trends and opportunities for
                  this product?
                </p>,
              ],
            },
            {
              label: "Competitive analysis",
              content: [
                <p style={{ textAlign: "center", fontSize: "18px" }}>
                  I am a product manager building{" "}
                  <input
                    type="text"
                    placeholder="Enter product name"
                    style={{
                      border: "2px solid #066a37",
                      borderRadius: "5px",
                      padding: "8px",
                      outline: "none",
                      fontSize: "12px",
                      color: "black",
                    }}
                  />
                  . Who are our main competitiors,and what are their strengths
                  and weeknesses?
                </p>,
              ],
            },
            {
              label: "Customer segmentation and targeting",
              content: [
                <p style={{ textAlign: "center", fontSize: "18px" }}>
                  I am a product manager building{" "}
                  <input
                    type="text"
                    placeholder="Enter product name"
                    style={{
                      border: "2px solid #066a37",
                      borderRadius: "5px",
                      padding: "8px",
                      outline: "none",
                      fontSize: "12px",
                      color: "black",
                    }}
                  />
                  . Who are our target customers, and what are their needs and
                  pain points?
                </p>,
              ],
            },
            {
              label: "Product vision and goals",
              content: [
                <p style={{ textAlign: "center", fontSize: "18px" }}>
                  I am a product manager building{" "}
                  <input
                    type="text"
                    placeholder="Enter product name"
                    style={{
                      border: "2px solid #066a37",
                      borderRadius: "5px",
                      padding: "8px",
                      outline: "none",
                      fontSize: "12px",
                      color: "black",
                    }}
                  />
                  . What is our long-term vision for the product, and what goals
                  do we want to achieve?
                </p>,
              ],
            },
            {
              label: "Establishing product-market fit",
              content: [
                <p style={{ textAlign: "center", fontSize: "18px" }}>
                  I am a product manager building{" "}
                  <input
                    type="text"
                    placeholder="Enter product name"
                    style={{
                      border: "2px solid #066a37",
                      borderRadius: "5px",
                      padding: "8px",
                      outline: "none",
                      fontSize: "12px",
                      color: "black",
                    }}
                  />
                  . How does our product meet the needs of the target market
                  better than competitors?
                </p>,
              ],
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

    if (selectedOption === "Product Planning") {
      return (
        <div className="sub-options-buttons">
          <SubOptionsButton
            options={[
              {
                label: "Feature identification and prioritization",
                content: [
                  {
                    label:
                      "Assist in learning different prioritization frameworks",
                    content: (
                      <div>
                        I am a product manager, who wants to build a{" "}
                        <input
                          type="text"
                          placeholder="App/Product name"
                          style={{
                            border: "2px solid #066a37",
                            borderRadius: "5px",
                            padding: "8px",
                            outline: "none",
                            fontSize: "12px",
                            color: "black",
                          }}
                        />
                        . The My team uses the{" "}
                        <select
                          style={{
                            border: "2px solid #066a37",
                            borderRadius: "5px",
                            padding: "8px",
                            outline: "none",
                            fontSize: "12px",
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
                        Please suggest examples of features that I should build
                        for my MVP using the above prioritisation method. <br />
                        <br />
                        Tabulate this.
                      </div>
                    ),
                  },
                  {
                    label: "Assist on feature prioritization",
                    content: (
                      <div style={{ textAlign: "left" }}>
                        I am a product manager building{" "}
                        <input
                          type="text"
                          placeholder="Enter product name"
                          style={{
                            border: "2px solid #066a37",
                            borderRadius: "5px",
                            padding: "8px",
                            outline: "none",
                            fontSize: "12px",
                            color: "black",
                          }}
                        />
                        . Can you provide insights on effective methods or
                        frameworks to prioritize features based on their impact,
                        feasibility, and alignment with strategic goals?
                      </div>
                    ),
                  },
                ],
              },
              {
                label: "Requirements gathering",
                content: [
                  <p style={{ textAlign: "center", fontSize: "18px" }}>
                    I am a product manager building{" "}
                    <input
                      type="text"
                      placeholder="Enter product name"
                      style={{
                        border: "2px solid #066a37",
                        borderRadius: "5px",
                        padding: "8px",
                        outline: "none",
                        fontSize: "12px",
                        color: "black",
                      }}
                    />
                    . What are the specific functional and non-functional
                    requirnments of the product?
                  </p>,
                ],
              },
              {
                label: "Release planning and scheduling",
                content: [
                  <p style={{ textAlign: "center", fontSize: "18px" }}>
                    I am a product manager building{" "}
                    <input
                      type="text"
                      placeholder="Enter product name"
                      style={{
                        border: "2px solid #066a37",
                        borderRadius: "5px",
                        padding: "8px",
                        outline: "none",
                        fontSize: "12px",
                        color: "black",
                      }}
                    />
                    . What is the timeline for delivering product increments and
                    achieving milestones?
                  </p>,
                ],
              },
              {
                label: "Resource estimation and allocation",
                content: [
                  <p style={{ textAlign: "center", fontSize: "18px" }}>
                    I am a product manager building{" "}
                    <input
                      type="text"
                      placeholder="Enter product name"
                      style={{
                        border: "2px solid #066a37",
                        borderRadius: "5px",
                        padding: "8px",
                        outline: "none",
                        fontSize: "12px",
                        color: "black",
                      }}
                    />
                    . What resources (budget, manpower, technology) are required
                    for successful product development?
                  </p>,
                ],
              },
              {
                label: "Stakeholder collaboration",
                content: [
                  <p style={{ textAlign: "center", fontSize: "18px" }}>
                    I am a product manager building{" "}
                    <input
                      type="text"
                      placeholder="Enter product name"
                      style={{
                        border: "2px solid #066a37",
                        borderRadius: "5px",
                        padding: "8px",
                        outline: "none",
                        fontSize: "12px",
                        color: "black",
                      }}
                    />
                    . Which stakeholders should be involved, and how can we
                    collaborote effectively with them?
                  </p>,
                ],
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

    if (selectedOption === "Product Development") {
      return (
        <div className="sub-options-buttons">
          <SubOptionsButton
            options={[
              {
                label: "Agile or Waterfall development methodology",
                content: [
                  <p style={{ textAlign: "center", fontSize: "18px" }}>
                    I am a product manager building{" "}
                    <input
                      type="text"
                      placeholder="Enter product name"
                      style={{
                        border: "2px solid #066a37",
                        borderRadius: "5px",
                        padding: "8px",
                        outline: "none",
                        fontSize: "12px",
                        color: "black",
                      }}
                    />
                    . Which development approach is best suited for the nature
                    of the product and its requirements?
                  </p>,
                ],
              },
              {
                label: "Development sprints and iterations",
                content: [
                  <p style={{ textAlign: "center", fontSize: "18px" }}>
                    I am a product manager building{" "}
                    <input
                      type="text"
                      placeholder="Enter product name"
                      style={{
                        border: "2px solid #066a37",
                        borderRadius: "5px",
                        padding: "8px",
                        outline: "none",
                        fontSize: "12px",
                        color: "black",
                      }}
                    />
                    . How can we break down the product development into smaller
                    iterations for incremental progress?
                  </p>,
                ],
              },
              {
                label: "Quality assurance and testing",
                content: [
                  <p style={{ textAlign: "center", fontSize: "18px" }}>
                    I am a product manager building{" "}
                    <input
                      type="text"
                      placeholder="Enter product name"
                      style={{
                        border: "2px solid #066a37",
                        borderRadius: "5px",
                        padding: "8px",
                        outline: "none",
                        fontSize: "12px",
                        color: "black",
                      }}
                    />
                    . What quality standards and testing processes should be
                    implemented to ensure a robust and reliable product?
                  </p>,
                ],
              },
              {
                label: "Feedback and iteration loops",
                content: [
                  <p style={{ textAlign: "center", fontSize: "18px" }}>
                    I am a product manager building{" "}
                    <input
                      type="text"
                      placeholder="Enter product name"
                      style={{
                        border: "2px solid #066a37",
                        borderRadius: "5px",
                        padding: "8px",
                        outline: "none",
                        fontSize: "12px",
                        color: "black",
                      }}
                    />
                    . How can we gather user feedback and incorporate it into
                    the development process for continuous imporvement?
                  </p>,
                ],
              },
              {
                label: "Integration with other systems or platforms",
                content: [
                  <p style={{ textAlign: "center", fontSize: "18px" }}>
                    I am a product manager building{" "}
                    <input
                      type="text"
                      placeholder="Enter product name"
                      style={{
                        border: "2px solid #066a37",
                        borderRadius: "5px",
                        padding: "8px",
                        outline: "none",
                        fontSize: "12px",
                        color: "black",
                      }}
                    />
                    . What integrations with external systems or platforms are
                    necessary to enhance the product's functionality?
                  </p>,
                ],
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

    if (selectedOption === "Product Launch") {
      return (
        <div className="sub-options-buttons">
          <SubOptionsButton
            options={[
              {
                label: "Marketing messaging and positioning",
                content: [
                  <p style={{ textAlign: "center", fontSize: "18px" }}>
                    I am a product manager building{" "}
                    <input
                      type="text"
                      placeholder="Enter product name"
                      style={{
                        border: "2px solid #066a37",
                        borderRadius: "5px",
                        padding: "8px",
                        outline: "none",
                        fontSize: "12px",
                        color: "black",
                      }}
                    />
                    . What unique value propositions and messages should be
                    communicated to our target customers?
                  </p>,
                ],
              },
              {
                label: "Pricing and packaging strategies",
                content: [
                  <p style={{ textAlign: "center", fontSize: "18px" }}>
                    I am a product manager building{" "}
                    <input
                      type="text"
                      placeholder="Enter product name"
                      style={{
                        border: "2px solid #066a37",
                        borderRadius: "5px",
                        padding: "8px",
                        outline: "none",
                        fontSize: "12px",
                        color: "black",
                      }}
                    />
                    . What pricing model and packaging options will resonate
                    with our target customers and align with our goals?
                  </p>,
                ],
              },
              {
                label: "Sales enablement and training",
                content: [
                  <p style={{ textAlign: "center", fontSize: "18px" }}>
                    I am a product manager building{" "}
                    <input
                      type="text"
                      placeholder="Enter product name"
                      style={{
                        border: "2px solid #066a37",
                        borderRadius: "5px",
                        padding: "8px",
                        outline: "none",
                        fontSize: "12px",
                        color: "black",
                      }}
                    />
                    . How can we equip our sales teams with the knowledge and
                    tools to effectively sell the product?
                  </p>,
                ],
              },
              {
                label: "Collateral creation (e.g. website, brochures)",
                content: [
                  <p style={{ textAlign: "center", fontSize: "18px" }}>
                    I am a product manager building{" "}
                    <input
                      type="text"
                      placeholder="Enter product name"
                      style={{
                        border: "2px solid #066a37",
                        borderRadius: "5px",
                        padding: "8px",
                        outline: "none",
                        fontSize: "12px",
                        color: "black",
                      }}
                    />
                    . What marketing collateral (website, brochures, demos) do
                    we need to create to support the launch?
                  </p>,
                ],
              },
              {
                label: "Go-to-market execution and coordination",
                content: [
                  <p style={{ textAlign: "center", fontSize: "18px" }}>
                    I am a product manager building{" "}
                    <input
                      type="text"
                      placeholder="Enter product name"
                      style={{
                        border: "2px solid #066a37",
                        borderRadius: "5px",
                        padding: "8px",
                        outline: "none",
                        fontSize: "12px",
                        color: "black",
                      }}
                    />
                    . How can we coordinate cross-functional efforts to ensure a
                    smooth and successful product launch?
                  </p>,
                ],
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
    if (selectedOption === "Product Lifecycle Management") {
      return (
        <div className="sub-options-buttons">
          <SubOptionsButton
            options={[
              {
                label: "Performance monitoring and analytics",
                content: [
                  <p style={{ textAlign: "center", fontSize: "18px" }}>
                    I am a product manager building{" "}
                    <input
                      type="text"
                      placeholder="Enter product name"
                      style={{
                        border: "2px solid #066a37",
                        borderRadius: "5px",
                        padding: "8px",
                        outline: "none",
                        fontSize: "12px",
                        color: "black",
                      }}
                    />
                    . What metrics and KPIs should be tracked to evaluate the
                    products's performance and success?
                  </p>,
                ],
              },
              {
                label: "Customer feedback collection and analysis",
                content: [
                  <p style={{ textAlign: "center", fontSize: "18px" }}>
                    I am a product manager building{" "}
                    <input
                      type="text"
                      placeholder="Enter product name"
                      style={{
                        border: "2px solid #066a37",
                        borderRadius: "5px",
                        padding: "8px",
                        outline: "none",
                        fontSize: "12px",
                        color: "black",
                      }}
                    />
                    . How can we gather feedback from customers to understand
                    their satisfaction,needs, and areas for improvement?
                  </p>,
                ],
              },
              {
                label: "Data-driven decision-making",
                content: [
                  <p style={{ textAlign: "center", fontSize: "18px" }}>
                    I am a product manager building{" "}
                    <input
                      type="text"
                      placeholder="Enter product name"
                      style={{
                        border: "2px solid #066a37",
                        borderRadius: "5px",
                        padding: "8px",
                        outline: "none",
                        fontSize: "12px",
                        color: "black",
                      }}
                    />
                    . How can we leverage data and insights to make informed
                    decisions about product enchancements or changes?
                  </p>,
                ],
              },
              {
                label: "Product updates, enchancements, and bug fixes",
                content: [
                  <p style={{ textAlign: "center", fontSize: "18px" }}>
                    I am a product manager building{" "}
                    <input
                      type="text"
                      placeholder="Enter product name"
                      style={{
                        border: "2px solid #066a37",
                        borderRadius: "5px",
                        padding: "8px",
                        outline: "none",
                        fontSize: "12px",
                        color: "black",
                      }}
                    />
                    . What updates, enchancements, or bug fixes should be
                    priortized based on user feedback and market demands?
                  </p>,
                ],
              },
              {
                label: "Versioning and release management",
                content: [
                  <p style={{ textAlign: "center", fontSize: "18px" }}>
                    I am a product manager building{" "}
                    <input
                      type="text"
                      placeholder="Enter product name"
                      style={{
                        border: "2px solid #066a37",
                        borderRadius: "5px",
                        padding: "8px",
                        outline: "none",
                        fontSize: "12px",
                        color: "black",
                      }}
                    />
                    . How should we manage product versions and releases to
                    ensure proper version control and customer communication?
                  </p>,
                ],
              },
              {
                label: "Competitive monitoring and analysis",
                content: [
                  <p style={{ textAlign: "center", fontSize: "18px" }}>
                    I am a product manager building{" "}
                    <input
                      type="text"
                      placeholder="Enter product name"
                      style={{
                        border: "2px solid #066a37",
                        borderRadius: "5px",
                        padding: "8px",
                        outline: "none",
                        fontSize: "12px",
                        color: "black",
                      }}
                    />
                    . What are our competitors doing, and how can we proactively
                    respond to market changes and stay ahead?
                  </p>,
                ],
              },
              {
                label: "Sunsetting or retiring the product",
                content: [
                  <p style={{ textAlign: "center", fontSize: "18px" }}>
                    I am a product manager building{" "}
                    <input
                      type="text"
                      placeholder="Enter product name"
                      style={{
                        border: "2px solid #066a37",
                        borderRadius: "5px",
                        padding: "8px",
                        outline: "none",
                        fontSize: "12px",
                        color: "black",
                      }}
                    />
                    . When and how should we retire a product that no longer
                    meets business objectives or customer needs?
                  </p>,
                ],
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
