import React, { useState } from "react";
import fmcg from "../assets/industries/fmcg.png";
import retail from "../assets/industries/retail.png";
import financial from "../assets/industries/financial.png";
import insurance from "../assets/industries/insurance.png";
import investors from "../assets/industries/investors.png";
import media from "../assets/industries/media.png";
import technology from "../assets/industries/technology.png";
import automotive from "../assets/industries/automotive.png";
import advertising from "../assets/industries/advertising.png";
import humanResources from "../assets/industries/humanResources.png";
import education from "../assets/industries/education.png";
import healthcare from "../assets/industries/healthcare.png";

const industries = [
  {
    id: 1,
    title: "FMCG",
    shortdescribtion: "Meet Your Customers' Needs Every Time",
    longdescrib:
      "In the ever-evolving world of consumer packaged goods, staying ahead of the curve is not just an option—it's a necessity. Here's how Sago can guide you to success:",
    points: [
      "Connect with the right people to make the right decisions even when you need to move quickly.",
      "Better understand not just what customers want and need, but why and how they make their decisions.",
      "Gain feedback at every phase of product and ad development, from concept to execution with agile testing.",
    ],
    image: fmcg,
  },
  {
    id: 2,
    title: "Retail and Merchandising",
    shortdescribtion: "Drive Smarter Decisions on the Shop Floor",
    longdescrib:
      "In retail, every display, promotion, and product placement counts. Thought Metrics helps you:",
    points: [
      "Stay in tune with changing shopper behaviors and preferences.",
      "Optimize in-store and online experiences based on real insights.",
      "Test pricing, promotions, and layouts quickly to boost conversions.",
    ],
    image: retail,
  },
  {
    id: 3,
    title: "Financial Services",
    shortdescribtion: "Build Trust with Every Transaction",
    longdescrib:
      "In a space where confidence drives choices, our research gives you the edge to:",
    points: [
      "Understand what drives customer loyalty and defection.",
      "Segment your audience to tailor services that truly resonate.",
      "Refine messaging and product offerings to build long-term trust.",
    ],
    image: financial,
  },
  {
    id: 4,
    title: "Insurance",
    shortdescribtion: "Simplify the Complex, Earn Customer Confidence",
    longdescrib: "Insurance decisions are personal and complex — we help you:",
    points: [
      "Decode the motivations and anxieties behind insurance choices.",
      "Test policy concepts, channels, and messaging before launch.",
      "Build clarity and trust through research-led communication.",
    ],
    image: insurance,
  },
  {
    id: 5,
    title: "Investors",
    shortdescribtion: "See the Market Before It Moves",
    longdescrib:
      "Whether you're sizing up a new market or evaluating a venture:",
    points: [
      "Use rigorous market assessments to make informed investment decisions.",
      "Gauge brand traction and customer sentiment with real-time insights.",
      "Back your thesis with evidence, not just instinct.",
    ],
    image: investors,
  },
  {
    id: 6,
    title: "Media",
    shortdescribtion: "Create Content That Captures Minds",
    longdescrib: "In media, engagement is everything. Our insights help you:",
    points: [
      "Understand audience preferences across platforms and formats.",
      "Test content, characters, and story arcs before the launch.",
      "Track media consumption shifts and stay ahead of trends.",
    ],
    image: media,
  },
  {
    id: 7,
    title: "Technology",
    shortdescribtion: "Design for Humans, Not Just Users",
    longdescrib:
      "Innovation is only as good as its adoption. Thought Metrics enables you to:",
    points: [
      "Discover what real users want from your tools and platforms.",
      "Uncover usability gaps through qualitative testing.",
      "Optimize UX and messaging for clarity, trust, and adoption.",
    ],
    image: technology,
  },
  {
    id: 8,
    title: "Automotive",
    shortdescribtion: "From Test Drive to Loyalty — Know the Journey",
    longdescrib:
      "Buyers are evolving — from EV interest to digital-first expectations. We help you:",
    points: [
      "Understand the full decision-making journey, from research to purchase.",
      "Test features, designs, and positioning for different segments.",
      "Navigate category shifts and competitive dynamics with confidence.",
    ],
    image: automotive,
  },
  {
    id: 9,
    title: "Advertising and Marketing",
    shortdescribtion: "Make Every Message Matter",
    longdescrib:
      "Creative is powerful when it connects. Our approach helps you:",
    points: [
      "Test campaign ideas, messages, and visuals before going live.",
      "Track brand recall, perception, and effectiveness over time.",
      "Measure emotional and cognitive response for deeper creative impact.",
    ],
    image: advertising,
  },
  {
    id: 10,
    title: "Human Resources",
    shortdescribtion: "Shape Cultures People Want to Belong To",
    longdescrib:
      "Attracting and retaining talent starts with understanding people. We help you:",
    points: [
      "Explore employee motivations, engagement drivers, and pain points.",
      "Test new HR initiatives before rollout.",
      "Benchmark satisfaction and guide culture-building efforts.",
    ],
    image: humanResources,
  },
  {
    id: 11,
    title: "Education",
    shortdescribtion: "Design Learning That Sticks",
    longdescrib:
      "From students to institutions, we uncover insights that improve education outcomes:",
    points: [
      "Understand learner needs, habits, and barriers.",
      "Test curricula, content, and platforms for effectiveness.",
      "Track engagement and feedback to continuously improve learning delivery.",
    ],
    image: education,
  },
  {
    id: 12,
    title: "Healthcare and Life Sciences",
    shortdescribtion: "Build Empathy Into Every Innovation",
    longdescrib:
      "Patients and providers each have unique needs — we help you listen better:",
    points: [
      "Understand patient journeys, behaviors, and gaps in care.",
      "Test health communications and interventions for clarity and trust.",
      "Equip R&D and marketing with real-world insights that save lives.",
    ],
    image: healthcare,
  },
];

function Industry() {
  const [active, setActive] = useState(1);

  const currentIndustry = industries.find((industry) => industry.id === active);

  return (
    <div className="max-w-7xl mx-auto min-h-screen p-6">
      <h2 className="text-3xl font-medium mb-12">
        Designed to meet your unique needs.​
      </h2>
      <div className="flex flex-col md:flex-row w-full ">
        {/* Industry Content */}
        <div className="flex flex-col border border-black p-10">
          <div className="py-16">
            <h2 className="text-2xl font-bold mb-10">
              {currentIndustry.title}
            </h2>
            <div className="flex flex-col md:flex-row gap-4 items-start">
              <div>
                <h3 className="font-semibold mb-4">
                  {currentIndustry.shortdescribtion}
                </h3>
                <p className="mb-4 max-w-xl">{currentIndustry.longdescrib}</p>
                <ul className="list-disc pl-6 mb-4 space-y-2">
                  {currentIndustry.points.map((point, index) => (
                    <li key={index}>{point}</li>
                  ))}
                </ul>
              </div>
              <div className="w-full max-w-md h-full">
                <img
                  src={currentIndustry.image}
                  alt={currentIndustry.title}
                  className="rounded w-full max-w-md"
                />
              </div>
            </div>
          </div>

          <div className="flex justify-between items-center mt-6 space-x-4">
            <div className="w-10 h-10 rounded-full bg-red-400 flex items-center justify-center text-white font-bold">
              {String(currentIndustry.id).padStart(2, "0")}
            </div>
            <button className="bg-red-400 text-white px-4 py-2 rounded hover:bg-red-500">
              See More
            </button>
          </div>
        </div>

        {/* Industries List */}
        <div className="flex-shrink-0 w-full md:w-64 mt-8 md:mt-0 md:ml-8">
          <ul className="flex flex-col gap-2">
            {industries.map((industry) => (
              <li key={industry.id}>
                <button
                  onClick={() => setActive(industry.id)}
                  className={`w-full px-4 py-3 text-center rounded ${
                    industry.id === active
                      ? "bg-red-400 text-white"
                      : "bg-gray-100 hover:bg-gray-200"
                  }`}
                >
                  {industry.title}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Industry;
