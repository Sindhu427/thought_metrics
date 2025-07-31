import React from "react";
import audienceimg from "../assets/audienceimg.svg";

const AudienceSection = () => {
  const points = [
    "Advertising buyers",
    "Marketers",
    "IT leaders",
    "Metaverse experts",
    "Developers",
    "Influencers & digital media thought leaders",
    "Product & UX designers",
    "Project managers",
    "Purchasing decision-makers",
    "Finance decision-makers",
    "Healthcare professionals",
    "Business owners",
    "C-suite executives",
    "Heads of HR",
    "Users of particular product or service",
  ];

  return (
    <section className="max-w-6xl mx-auto px-6 py-20 grid grid-cols-1 lg:grid-cols-5 gap-12 ">
      {/* LEFT SIDE */}

      <div className="col-span-1 lg:col-span-2">
        <h2 className="text-xl md:text-3xl font-semibold text-black mb-2">
          Advertising and marketing audiences we reach
        </h2>
        <div className="w-32 h-1 bg-red-500 mb-6"></div>

        <p className="text-gray-700 mb-6 max-w-md leading-relaxed">
          Impact-driving advertising market research starts with speaking to the
          right people. Thought Metrics finds the professionals with the exact
          expertise to answer your advertising market research questions.
        </p>

        <ul className="list-disc list-inside text-gray-800 ">
          {points.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>

      {/* RIGHT SIDE */}
      <div className="flex justify-center items-end h-full col-span-1 lg:col-span-3 ">
        <img
          src={audienceimg}
          alt="Audience Visual"
          className="max-w-full h-auto object-contain"
        />
      </div>
    </section>
  );
};

export default AudienceSection;
