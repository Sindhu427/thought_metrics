import React from "react";
import model from "../assets/hero/model.png";
import icon1 from "../assets/hero/icon1.svg";
import icon2 from "../assets/hero/icon2.svg";
import icon3 from "../assets/hero/icon3.svg";
import { ArrowRight } from "react-bootstrap-icons";

const features = [
  {
    id: 1,
    title: "Audience",
    description:
      "Tap into a wide panel of respondents for any of your market research needs.",
    icon: icon1,
  },
  {
    id: 2,
    title: "Qualitative Research",
    description:
      "Tap into a wide panel of respondents for any of your market research needs.",
    icon: icon2,
  },
  {
    id: 3,
    title: "Quantitative Research",
    description:
      "Tap into a wide panel of respondents for any of your market research needs.",
    icon: icon3,
  },
  {
    id: 4,
    title: "Quality Checks",
    description:
      "Tap into a wide panel of respondents for any of your market research needs.",
    icon: icon2,
  },
];

function HeroSection() {
  return (
    <section className="py-10 px-6 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
      {/* Left Side */}
      <div className="flex flex-col items-start space-y-4">
        <img
          src={model}
          alt="Person holding phone"
          className="w-full h-auto "
        />
      </div>

      {/* Right Side */}
      <div className=" grid grid-cols-1  lg:grid-cols-2 gap-6 ">
        {features.map((feature) => (
          <div
            key={feature.id}
            className="group border rounded-lg overflow-hidden flex flex-col hover:bg-red-400 transition duration-300"
          >
            <div className="flex flex-col p-4 mb-24">
              {/* {feature.icon} */}
              <img
                src={feature.icon}
                alt="hero-icon"
                className="w-10 h-10 mb-2"
              />
              <h3 className="font-semibold mb-4">{feature.title}</h3>
              <p className="text-sm flex-grow w-11/12">{feature.description}</p>
            </div>

            <div className="flex justify-end items-center">
              <button className="bg-red-400 p-1 px-5 rounded-tl-lg rounded-br-lg text-white transition group-hover:bg-white group-hover:text-black">
                <ArrowRight className="w-8 h-8" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default HeroSection;
