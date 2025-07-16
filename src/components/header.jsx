import React from "react";
import { CaretDownFill } from "react-bootstrap-icons";

function Header() {
  return (
    <nav className="w-full bg-pink-50 py-4 px-6 flex justify-center">
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
        <li className="flex items-center gap-1 hover:underline cursor-pointer">
          Industries{" "}
          <span>
            <CaretDownFill className="w-4 h-4" />
          </span>
        </li>
        <li className="flex items-center gap-1 hover:underline cursor-pointer">
          Resources{" "}
          <span>
            <CaretDownFill className="w-4 h-4" />
          </span>
        </li>
        <li>
          {" "}
          <button className="border border-[#3851A2] text-[#3851A2] px-4 py-2 rounded hover:bg-blue-50 text-sm transition">
            Start Your Research
          </button>
        </li>
        <li>
          <button className="bg-red-400 text-white px-4 py-2 rounded hover:bg-[#3851A2]">
            Join a Paid Focus Group
          </button>
        </li>
      </ul>
    </nav>
  );
}

export default Header;
