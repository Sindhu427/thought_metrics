import React from "react";
import connectpeople from "../assets/connectpeople.svg";
import connectlines from "../assets/connectlines.svg";

function ConnectSection() {
  return (
    <div className="relative w-full bg-gray-50">
      <div
        className="w-full h-[480px] bg-no-repeat bg-cover bg-right flex items-center "
        style={{
          backgroundImage: `url(${connectpeople})`,
        }}
      >
        <div className="max-w-7xl  mx-auto flex justify-between items-center h-full">
          <div className="grid grid-cols-2 ">
            <div className="">
              <h2 className="text-2xl md:text-3xl font-semibold text-black mb-4 ">
                Know what clicks <br /> before you create it!
              </h2>
              <button className="bg-[#E8505E] text-white px-6 py-2 rounded hover:bg-[#3851A2] transition">
                Let’s Connect
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute -bottom-48 right-0  ">
        <img
          src={connectlines}
          alt="Connect Lines"
          className="w-36 h-full object-cover "
        />
      </div>
    </div>
  );
}

export default ConnectSection;
