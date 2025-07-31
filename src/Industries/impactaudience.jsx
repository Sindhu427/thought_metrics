import React, { useState } from "react";
// import impactImage from "../assets/impact.png"; // Use your image path
import { ChevronDown, ChevronUp } from "react-bootstrap-icons";
import impactaudience from "../assets/impactaudience.svg";

const accordionData = [
  {
    title: "Who to target?",
    content: [
      "How should we segment our market?",
      "Which segments should we target?",
      "What are the personas of our targeted segments?",
      "What does the customer journey look like?",
    ],
  },
  {
    title: "How to reach our target?",
    content: [
      "How should we segment our market?",
      "Which segments should we target?",
      "What are the personas of our targeted segments?",
      "What does the customer journey look like?",
    ],
  },
  {
    title: "What to say and show to our audience",
    content: [
      "How should we segment our market?",
      "Which segments should we target?",
      "What are the personas of our targeted segments?",
      "What does the customer journey look like?",
    ],
  },
  {
    title: "How to measure our effectiveness",
    content: [
      "How should we segment our market?",
      "Which segments should we target?",
      "What are the personas of our targeted segments?",
      "What does the customer journey look like?",
    ],
  },
  {
    title: "What industry trends and shifts to expect",
    content: [
      "How should we segment our market?",
      "Which segments should we target?",
      "What are the personas of our targeted segments?",
      "What does the customer journey look like?",
    ],
  },
];

const ImpactAudienceSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const toggleAccordion = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <section className="bg-[#C9EAF3]  ">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-start py-20 px-6">
        {/* LEFT COLUMN */}
        <div>
          <h2 className="text-2xl md:text-3xl font-semibold text-black mb-2">
            Make an impact on your <br />
            audience
          </h2>
          <div className="w-24 h-1 bg-red-500 mb-4"></div>

          <p className="text-gray-800 mb-6 max-w-md leading-relaxed">
            Crafting impactful brands, campaigns, and advertisements is both an
            art and a science. An advertising market research company can help
            you validate your intuitions or illuminate a new path forward.
            Whether you’re in a creative agency trying to demonstrate your added
            value to clients or part of an in-house marketing team driving your
            company’s brand, high quality advertising market research insights
            can help you answer key strategy-driving questions.
          </p>

          <img
            src={impactaudience}
            alt="Impact Illustration"
            className="rounded-lg shadow-md w-full max-w-md"
          />
        </div>

        {/* RIGHT COLUMN - ACCORDION */}
        <div className="space-y-4 py-16">
          {accordionData.map((item, index) => (
            <div key={index}>
              <button
                className="w-full flex justify-between items-center text-left font-semibold text-black focus:outline-none"
                onClick={() => toggleAccordion(index)}
              >
                <span>{item.title}</span>
                {activeIndex === index ? (
                  <ChevronUp className="text-red-500" />
                ) : (
                  <ChevronDown className="text-red-500" />
                )}
              </button>
              {activeIndex === index && item.content.length > 0 && (
                <ul className="list-disc list-inside mt-2 text-gray-800 space-y-1 pl-2">
                  {item.content.map((point, idx) => (
                    <li key={idx}>{point}</li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ImpactAudienceSection;
