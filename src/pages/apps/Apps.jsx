import React from "react";
import { useLoaderData } from "react-router";
import AppCard from "../../components/appcard/AppCard";

const Apps = () => {
  const apps = useLoaderData();

  return (
    <div className="px-15">
      <h1 className="text-4xl font-bold text-center mt-20 mb-5 ">
        Our All Applications
      </h1>
      <h1 className="text-center text-gray-500 mb-5">
        Explore All Apps on the Market developed by us. We code for Millions
      </h1>
      <div className="flex justify-between items-center mb-7">
        <h1 className="text-2xl font-bold">(132) App Found</h1>
        <label className="input rounded-xl">
          <svg
            className="h-[1em] opacity-50"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <g
              strokeLinejoin="round"
              strokeLinecap="round"
              strokeWidth="2.5"
              fill="none"
              stroke="currentColor"
            >
              <circle cx="11" cy="11" r="8"></circle>
              <path d="m21 21-4.3-4.3"></path>
            </g>
          </svg>
          <input type="search" required placeholder="Search" />
        </label>
      </div>

      <div className="grid grid-cols-4 gap-10 mb-20">
        {apps.map((app, index) => (
          <AppCard key={index} app={app}></AppCard>
        ))}
      </div>
    </div>
  );
};

export default Apps;
