import React from "react";
import logo from "../../assets/logo.png";
const Footer = () => {
  return (
    <footer className="bg-[#031A33] text-gray-300 border-t border-[#0a2c59] px-6 py-6">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="flex items-center gap-2 mb-4 md:mb-0">
          <img src={logo} alt="Hero.io Logo" className="w-8 h-8" />
          <span className="font-semibold text-white tracking-wide text-gradient text-2xl " >
            HERO.IO
          </span>
        </div>
        <div className="text-center md:text-right">
          <p className="font-semibold mb-2 text-white">Social Links</p>
          <div className="flex justify-center md:justify-end space-x-4 text-xl">
            <a
              href="#"
              className="hover:text-[#9f62f2] transition-colors duration-200"
            >
              <i className="fa-brands fa-x-twitter"></i>
            </a>
            <a
              href="#"
              className="hover:text-[#9f62f2] transition-colors duration-200"
            >
              <i className="fa-brands fa-linkedin-in"></i>
            </a>
            <a
              href="#"
              className="hover:text-[#9f62f2] transition-colors duration-200"
            >
              <i className="fa-brands fa-facebook-f"></i>
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-[#0a2c59] my-4"></div>

      <p className="text-center text-sm text-gray-400">
        Copyright © 2025 - All rights reserved
      </p>
    </footer>
  );
};

export default Footer;
