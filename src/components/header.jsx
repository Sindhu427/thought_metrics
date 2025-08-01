import React, { useState } from "react";
import { CaretDownFill } from "react-bootstrap-icons";
import applogo from "../assets/applogo.svg";
import { useNavigate } from "react-router";

function Header() {
  const navigate = useNavigate();
  const [showIndustries, setShowIndustries] = useState(false);
  return (
    <nav className="w-full bg-pink-50 py-4 ">
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <div>
          <img
            src={applogo}
            alt="Thought Metrics"
            className="w-full h-full cursor-pointer"
            onClick={() => {
              navigate("/");
            }}
          />
        </div>
        <ul className="flex space-x-5 items-center">
          <li className="flex items-center gap-1 hover:underline cursor-pointer">
            Research Methods{" "}
            <span>
              <CaretDownFill className="w-4 h-4" />
            </span>
          </li>
          <li className="flex items-center gap-1 hover:underline cursor-pointer">
            Capabilities{" "}
            <span>
              <CaretDownFill className="w-4 h-4" />
            </span>
          </li>
          <li className="relative">
            <div
              onClick={() => setShowIndustries(!showIndustries)}
              className="flex items-center gap-1 hover:underline cursor-pointer"
            >
              Industries <CaretDownFill className="w-4 h-4" />
            </div>

            {showIndustries && (
              <div className="absolute top-full left-0 bg-white rounded-lg shadow-lg z-10 mt-2 w-64">
                <ul className="py-2">
                  <li
                    className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                    onClick={() => {
                      navigate("/industries/advertising-media");
                      setShowIndustries(false);
                    }}
                  >
                    Advertising and Media
                  </li>
                </ul>
              </div>
            )}
          </li>
          <li className="flex items-center gap-1 hover:underline cursor-pointer">
            Resources{" "}
            <span>
              <CaretDownFill className="w-4 h-4" />
            </span>
          </li>
        </ul>
        <div className="flex items-center gap-2">
          <button className="border border-[#E8505E] text-[#E8505E] px-4 py-2 rounded hover:bg-blue-50 text-sm transition cursor-pointer">
            Start Your Research
          </button>
          <button className="bg-red-400 text-white px-4 py-2 rounded hover:bg-[#3851A2] cursor-pointer">
            Join a Paid Focus Group
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Header;
