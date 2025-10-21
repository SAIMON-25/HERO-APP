import React from "react";
import playStore from "../../assets/paly_store.png";
import appleStore from "../../assets/apple_store.png";
import banner from "../../assets/hero.png";

const Banner = () => {
  return (
    <div className="my-10">
      <div className=" w-2/3 mx-auto">
        <h1 className="text-6xl font-bold text-center my-3">
          We Build <br /> <span className="text-gradient">Productive</span> Apps
        </h1>
        <h1 className="text-center text-gray-400 mb-5">
          At HERO.IO, we craft innovative apps designed to make everyday life
          simpler, smarter, and more exciting.Our goal is to turn your ideas
          into digital experiences that truly make an impact.
        </h1>
        <div className="flex justify-center mb-10 gap-5 sm:gap-15">
          <a href="https://play.google.com/store/games?hl=en" className="btn">
            <img src={playStore} alt="" />{" "}
            <span className="mx-2">Google Play</span>
          </a>
          <a href="https://www.apple.com/app-store/" className="btn">
            <img src={appleStore} alt="" />{" "}
            <span className="mx-2">Apple Store</span>
          </a>
        </div>
        <div className="flex justify-center">
          <img className="text-center" src={banner} alt="" />
        </div>
      </div>

      <div className=" py-15 text-white bg-gradient-to-r from-[#632ee3] to-[#481097]">
        <h1 className="text-center text-4xl font-bold mb-5">Trusted by Millions, Built for You</h1>
        <div className="sm:flex  justify-center sm:gap-30">
            <div className="text-center mb-5 sm:mb-0">
                <h1 className="mb-3 text-gray-300">Total Downloads</h1>
                <h1 className="text-6xl font-bold mb-3">29.6M</h1>
                <h1>21% more than last month</h1>
            </div>
            <div className="text-center mb-5 sm:mb-0">
                <h1 className="mb-3 text-gray-300">Total Reviews</h1>
                <h1 className="text-6xl font-bold mb-3">906K</h1>
                <h1>46% more than last month</h1>
            </div>
            <div className="text-center mb-5 sm:mb-0">
                <h1 className="mb-3 text-gray-300">Active Apps</h1>
                <h1 className="text-6xl font-bold mb-3">132+</h1>
                <h1>31 more will Launch</h1>
            </div>
            
        </div>
      </div>
    </div>
  );
};

export default Banner;
