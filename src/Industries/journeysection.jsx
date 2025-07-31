import React from "react";

const JourneySection = () => {
  const items = [
    {
      title: "Global Sample",
      description:
        "Target the diverse audiences you need to reach. Our varied methods of recruitment ensure a wide respondent pool from which to collect your data.",
    },
    {
      title: "Digital Discussions",
      description:
        "Capture dynamic and nuanced insights with our agile approach to data collection and analysis. Stay ahead of the curve and make informed decisions that drive success.",
    },
    {
      title: "Automated research",
      description:
        "Automate your research and do more research in less time with quick-turn repeatable solutions. Our AI solutions help you determine which concepts and ads resonate most with your target audience.",
    },
    {
      title: "Rapid Alert Omnibus",
      description:
        "Get quick and reliable insights into your most pressing research questions with Thought Metric’s omnibus solutions. Share your questions with a global audience and get rich insights in as little as 48 hours.",
    },
  ];

  return (
    <section className="bg-[#E8505E] text-white ">
      <div className="max-w-7xl mx-auto py-16 px-4 ">
        <h2 className="text-2xl md:text-3xl font-semibold mb-12 ">
          Discover What Your Audience Really Thinks at Every Step of the Journey
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {items.map((item, index) => (
            <div
              key={index}
              className="border border-white rounded-lg p-8 h-[400px] w-full"
            >
              <h3 className="font-semibold text-white text-2xl mb-4">
                {item.title}
              </h3>
              <p className=" text-white leading-relaxed py-10">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default JourneySection;
