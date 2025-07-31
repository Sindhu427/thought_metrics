import React from "react";
import speakerGirl from "../assets/addmedia/speakerGirl.jpg"; // replace with your actual path

function AdMediaSection() {
  return (
    <div className="w-full bg-[#fef4f6] px-6 py-12 flex flex-col md:flex-row items-center justify-between relative overflow-hidden">
      {/* LEFT CONTENT */}
      <div className="md:w-1/2 z-10">
        {/* Breadcrumb */}
        <div className="text-sm text-gray-500 mb-2 flex items-center gap-2">
          <span className="text-red-400">🏠</span>
          <span>Home</span>
          <span>&gt;</span>
          <span>Industries</span>
          <span>&gt;</span>
          <span className="text-gray-800 font-medium">
            Advertising and Media
          </span>
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
        <button className="bg-[#ef5b68] text-white px-6 py-2 rounded hover:bg-[#d64c59] transition">
          Request a Bid
        </button>
      </div>

      {/* RIGHT IMAGE BLOCK */}
      <div className="md:w-1/2 mt-8 md:mt-0 relative z-10">
        {/* Red background offset */}
        <div className="absolute top-3 left-3 w-[90%] h-[90%] bg-[#ef5b68] rounded-lg z-0"></div>

        {/* Main image */}
        <img
          src={speakerGirl}
          alt="Speaking Woman"
          className="relative z-10 rounded-lg shadow-md"
        />
      </div>

      {/* Decorative background lines */}
      <div className="absolute bottom-0 right-0 w-48 h-48 md:w-64 md:h-64 border border-black border-opacity-30 rounded-lg transform translate-x-16 translate-y-16 z-0">
        <div className="absolute top-4 left-4 w-full h-full border border-black border-opacity-30 rounded-lg"></div>
        <div className="absolute top-8 left-8 w-full h-full border border-black border-opacity-30 rounded-lg"></div>
      </div>
    </div>
  );
}

export default AdMediaSection;
