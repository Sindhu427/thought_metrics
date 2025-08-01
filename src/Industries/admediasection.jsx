import React from "react";
import speakerGirl from "../assets/addmedia/speakergirl.png";
import square from "../assets/addmedia/square.svg";
import { ChevronRight, Home } from "lucide-react";

function AdMediaSection() {
  return (
    <div className="w-full bg-pink-50  relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 py-12 flex flex-col md:flex-row items-center justify-between">
        {/* LEFT CONTENT */}
        <div className="md:w-1/2 z-10">
          {/* Breadcrumb */}
          <div className="text-sm text-[#9E9D9D] font-medium mb-2 flex items-center gap-2">
            <span className="text-red-400">
              <Home size={16} />
            </span>
            <span>Home</span>
            <span className="text-red-400">
              <ChevronRight size={16} />
            </span>
            <span>Industries</span>
            <span className="text-red-400">
              <ChevronRight size={16} />
            </span>
            <span>Advertising and Media</span>
          </div>

          {/* Heading */}
          <h2 className="text-3xl md:text-4xl font-bold text-[#ef5b68] leading-snug mb-4">
            Turn Audience <br />
            Understanding Into <br />
            Creative Impact
          </h2>

          {/* Description */}
          <p className="text-gray-800 mb-6 max-w-md">
            From campaign concepts to media mix decisions, we help agencies,
            brands, and marketers unlock insights that inspire, resonate, and
            convert.
          </p>

          {/* Button */}
          <button className="bg-[#ef5b68] text-white px-6 py-2 rounded hover:bg-[#3851A2] transition">
            Request a Bid
          </button>
        </div>

        {/* RIGHT IMAGE BLOCK */}
        <div className="md:w-1/2 mt-8 md:mt-0 relative z-10">
          {/* Main image */}
          <img
            src={speakerGirl}
            alt="Speaking Woman"
            className="relative z-10 rounded-lg shadow-md"
          />
        </div>
      </div>
      <div className="absolute right-0 top-0 bottom-0">
        <img src={square} alt="square" className="w-full h-full" />
      </div>
    </div>
  );
}

export default AdMediaSection;
