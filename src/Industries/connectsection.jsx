import React from "react";
import connectpeople from "../assets/connectpeople.svg";
import connectlines from "../assets/connectlines.svg";

function ConnectSection() {
  return (
    <div className="relative w-full bg-gradient-to-r from-[#F0F0FA] to-[#E3E4E8] overflow-hidden">
      {/* Background section with text */}
      <div
        className="max-w-7xl mx-auto px-6 h-[480px] bg-no-repeat bg-cover bg-right"
        style={{
          backgroundImage: `url(${connectpeople})`,
        }}
      >
        <div className="grid grid-cols-2 w-full h-full">
          <div className="  flex justify-center items-center">
            <div>
              <h2 className="text-2xl md:text-3xl font-semibold text-black leading-tight mb-6">
                Know what clicks <br className="hidden md:block" /> before you
                create it!
              </h2>
              <button className="bg-[#E8505E] hover:bg-[#3851A2] text-white text-sm md:text-base px-12 py-2.5 rounded-lg shadow transition duration-300 ease-in-out">
                Let’s Connect
              </button>
            </div>
          </div>
          <div></div>
        </div>
      </div>

      {/* Decorative bottom image */}
      <div className="absolute -bottom-24 md:-bottom-52 right-0">
        <img
          src={connectlines}
          alt="Connect Lines"
          className="w-32 md:w-40 h-auto object-cover"
        />
      </div>
    </div>
  );
}

export default ConnectSection;
