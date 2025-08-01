import React from "react";
import { ChevronUp, Linkedin, TwitterX, Vimeo } from "react-bootstrap-icons";
import logo from "../assets/Logo.svg";

function Footer() {
  return (
    <footer className="bg-[#E8505E] text-white py-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-5 gap-8 px-6">
        {/* Logo and Social */}
        <div className="flex flex-col space-y-5 md:col-span-1">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 rounded flex items-center justify-center">
              <img src={logo} alt="Thought Metrics" className="w-5 h-5" />
            </div>
            <span className="font-medium text-lg">Thought Metrics</span>
          </div>
          <div className="flex space-x-3">
            <a
              href="#"
              className="hover:text-gray-200 p-2.5 border border-white rounded-full"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href="#"
              className="hover:text-gray-200 p-2.5 border border-white rounded-full"
            >
              <TwitterX className="w-5 h-5" />
            </a>
            <a
              href="#"
              className="hover:text-gray-200 p-2.5 border border-white rounded-full"
            >
              <Vimeo className="w-5 h-5" />
            </a>
          </div>
        </div>

        {/* Research Methods */}
        <div>
          <h4 className="font-semibold mb-2">Research Methods</h4>
          <ul className="space-y-1">
            <li>
              <a href="#" className="hover:underline">
                Qualitative Research
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Quantitative Research
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Recruitment and Fieldwork
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Surveys
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Focus Group Discussions
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Quality checks
              </a>
            </li>
          </ul>
        </div>

        {/* Capabilities */}
        <div>
          <h4 className="font-semibold mb-2">Capabilities</h4>
          <ul className="space-y-1">
            <li>
              <a href="#" className="hover:underline">
                Branding and Advertising
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Market Opportunity Research
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Product Research
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Consumer Research and Segmentation
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Our Panel
              </a>
            </li>
          </ul>
        </div>

        {/* Legal */}
        <div>
          <h4 className="font-semibold mb-2">Legal</h4>
          <ul className="space-y-1">
            <li>
              <a href="#" className="hover:underline">
                Privacy
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                AI Policy
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Business Conduct and Ethics
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Site Disclaimer
              </a>
            </li>
          </ul>
        </div>

        {/* Connect */}
        <div>
          <h4 className="font-semibold mb-2">Connect</h4>
          <ul className="space-y-1">
            <li>
              <a href="#" className="hover:underline">
                Join Our Panel
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Request a Bid
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Careers
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Contact Us
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white mt-10 pt-5 relative">
        <div className="max-w-7xl mx-auto flex justify-between items-center text-sm">
          <p>© Copyright 2025. All Rights Reserved.</p>
          <a
            href="#top"
            className="bg-white/40 text-white-400 p-2 px-4 rounded hover:bg-gray-100 absolute top-0 right-10"
          >
            <ChevronUp className="w-6 h-6" />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
