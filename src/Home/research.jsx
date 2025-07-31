import React from "react";
import research1 from "../assets/research/research1.svg";
import research2 from "../assets/research/research2.svg";
import research3 from "../assets/research/research3.svg";
import research4 from "../assets/research/research4.svg";
import { ArrowRight } from "react-bootstrap-icons";

function Research() {
  return (
    <section className=" bg-[#ECECEC]">
      <div className="py-12 px-6 max-w-7xl mx-auto ">
        <h2 className="text-3xl font-medium mb-12 max-w-5xl">
          We’re a full-service B2B market research thought partner committed to
          strengthening your strategies with deep, subject matter expertise.
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div
            className={` col-span-1 bg-[#EBFFD8] p-10 rounded relative overflow-hidden flex flex-col md:flex-row `}
          >
            <div className="flex-1 mb-12 max-w-3/4   ">
              <h3 className="font-semibold mb-2  ">
                Branding and Advertising Communication
              </h3>
              <p className="text-sm mb-4">
                We help brands resonate. From brand perception and awareness to
                message testing and ad effectiveness, our research empowers you
                to communicate with clarity and impact. Backed by qualitative
                insights and robust tracking, we ensure your brand voice
                connects with the right audience.
              </p>
              <button className="flex items-center space-x-1 text-sm font-medium">
                <ArrowRight className="w-8 h-8" />
              </button>
            </div>
            <div className="absolute bottom-0 right-0 pt-12">
              <img src={research1} />
            </div>
          </div>
          <div
            className={` col-span-2  bg-linear-to-r from-[#F2EDFF] to-[#FFFFFF]  rounded relative overflow-hidden flex flex-col md:flex-row `}
          >
            <div className="flex-1 p-10 ">
              <h3 className="font-semibold mb-2 w-1/2">
                Market Opportunity Research
              </h3>
              <p className="text-sm mb-4">
                Find your edge before you enter. Our market opportunity research
                identifies whitespace, tests feasibility, and maps competitive
                dynamics. Whether you're planning a launch or exploring new
                segments, we provide the insights to make bold, informed moves.
              </p>
              <button className="flex items-center space-x-1 text-sm font-medium">
                <ArrowRight className="w-8 h-8" />
              </button>
            </div>
            <div className="h-full flex justify-center items-end pb-8">
              <img src={research2} />
            </div>
          </div>
          <div
            className={` col-span-2 bg-linear-to-r from-[#DDDDDD] via-[#F5F5F5] to-[#FFFFFF]  rounded relative overflow-hidden flex flex-col md:flex-row `}
          >
            <div className="flex-1 flex flex-col justify-center items-start p-10">
              <h3 className="font-semibold mb-2 w-1/3">
                Customer Research and Segmentation
              </h3>
              <p className="text-sm mb-4">
                Know who you're talking to—and why it matters. We uncover the
                motivations, behaviors, and needs of your customers, then
                segment them meaningfully to guide strategy. Our blend of
                qualitative and quantitative approaches ensures depth, accuracy,
                and actionable clarity.
              </p>
              <button className="flex items-center space-x-1 text-sm font-medium">
                <ArrowRight className="w-8 h-8" />
              </button>
            </div>
            <div className="h-full">
              <img src={research3} />
            </div>
          </div>
          <div
            className={` col-span-1 bg-[#FFEAEB]  rounded relative overflow-hidden flex flex-col md:flex-row `}
          >
            <div className="flex-1 p-10 flex flex-col justify-center items-start">
              <div className="absolute top-5 right-7">
                <img src={research4} />
              </div>
              <h3 className="font-semibold mb-2">Product Research</h3>
              <p className="text-sm mb-4">
                Build products that solve real problems. From concept testing
                and feature prioritization to in-use feedback, we support every
                phase of product development. Our insights help you align
                innovation with user expectations—minimizing risk and maximizing
                relevance.
              </p>
              <button className="flex items-center space-x-1 text-sm font-medium">
                <ArrowRight className="w-8 h-8" />
              </button>
            </div>
            <div className="absolute bottom-5 right-7 ">
              <img src={research4} className="w-20" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Research;
