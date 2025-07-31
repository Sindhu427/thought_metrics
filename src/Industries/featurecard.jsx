import React from "react";
import feature1 from "../assets/features/feature1.svg";
import feature2 from "../assets/features/feature2.svg";
import feature3 from "../assets/features/feature3.svg";

const FeaturesSection = () => {
  const features = [
    {
      icon: feature1,
      title: "Unparalleled access to respondents",
      description:
        "Thought Metrics delivers access to diverse and varied audiences you need, so you can make the right decisions, even when you need to move quickly.",
    },
    {
      icon: feature2,
      title: "Delivery at the speed of market",
      description:
        "Get results at the speed you need with tech-enabled solutions that make it smarter, faster, and easier to achieve meaningful audience engagement in depth and scale.",
    },
    {
      icon: feature3,
      title: "Choose self-serve to full service research support",
      description:
        "We are experts in market research, so whether you choose our self serve solutions or a do-it-for-me approach, you are in good hands.",
    },
  ];

  return (
    <section className="bg-white py-16 px-6 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-10">
        {features.map((feature, index) => (
          <div
            key={index}
            className="  h-[400px] bg-gray-100 px-6 py-20 rounded-lg shadow-sm flex flex-col "
          >
            <div className="bg-rose-300 w-16 h-16 flex items-center justify-center rounded mb-8">
              <img src={feature.icon} />
            </div>
            <h3 className="font-semibold text-sm mb-2">{feature.title}</h3>
            <p className="text-sm text-gray-700">{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturesSection;
