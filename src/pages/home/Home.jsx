import React from "react";
import Navbar from "../../components/navbar/Navbar";
import Banner from "../../components/banner/Banner";
import { NavLink, useLoaderData } from "react-router";
import AppCard from "../../components/appcard/AppCard";

const Home = () => {
  const apps = useLoaderData();
  console.log(apps);

  const trendingApp = apps.slice(0, 8);
  console.log(trendingApp);

  return (
    <>
      <Banner></Banner>
      <AppCard></AppCard>
      <div className="text-center ">
        <h1 className="text-5xl font-semibold mb-3">Trending Apps</h1>
        <h1 className="text-gray-500">Explore All Trending Apps on the Market developed by us</h1>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-4 gap-10 px-15 my-15">
        {trendingApp.map((app, index) => (
          <AppCard key={index} app={app}></AppCard>
        ))}
      </div>

      <div className="text-center mb-25">
       <NavLink to={'/allApps'}> <button className="btn rounded-xl px-10 py-5 text-xl bg-gradient-to-r from-[#632ee3] to-[#9f62f2] text-white">Show All</button></NavLink>
      </div>
    </>
  );
};

export default Home;
