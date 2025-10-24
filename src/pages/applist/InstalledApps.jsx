import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router";
import { getLocalItem, removeLocalItem } from "../../utilities/utility";
import downloadicon from "../../assets/icon-downloads.png";
import staricon from "../../assets/icon-ratings.png";
import { Bounce, ToastContainer, toast } from "react-toastify";

const InstalledApps = () => {
  const [localApps, setLocalApps] = useState([]);
  const [sortby,setSortby] = useState('');
  const applist = useLoaderData();

  useEffect(() => {
    setLocalApps(getLocalItem());
  }, []);
  const apps = applist.filter((app) => localApps.includes(app.id));


  if(sortby=='ascending'){
    apps.sort((a,b)=>a.size - b.size)
  }
  else if(sortby == 'descending'){
        apps.sort((a,b)=>b.size - a.size)
  }


  const handleUninstall = (id) => {
    removeLocalItem(id);
    toast("Successfully Uninstalled");
    setLocalApps(getLocalItem());
  };

  return (
    <div className=" mx-auto mt-10 p-6 bg-gray-50 min-h-screen sm:px-25">
      <div className="text-center mb-8">
        <h1 className="text-5xl mb-4 font-bold text-gray-800">
          Your Installed Apps
        </h1>
        <p className="text-gray-500">
          Explore All Trending Apps on the Market developed by us
        </p>
      </div>

      <div className="flex justify-between items-center mb-4">
        <p className="text-gray-700 font-medium">
          ({apps.length}) App{apps.length > 1 ? "s" : ""} Found
        </p>

        <details className="dropdown">
          <summary className="btn m-1">Sort By</summary>
          <ul className="menu dropdown-content bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
            <li onClick={()=>setSortby('descending')}>
              <a>Descending</a>
            </li>
            <li onClick={()=>setSortby('ascending')}>
              <a>Ascending</a>
            </li>
          </ul>
        </details>
      </div>

      <div className="space-y-4">
        {apps.map((app) => (
          <div
            key={app.id}
            className="flex items-center justify-between bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow"
          >
            <div className="flex items-center gap-4">
              <img
                src={app.image}
                alt={app.name}
                className="w-12 h-12 rounded-md bg-gray-100 object-cover"
              />

              <div>
                <h3 className="font-semibold text-xl text-gray-800 mb-3">
                  {app.title}
                </h3>
                <div className="flex items-center gap-3 text-sm text-gray-500 mt-1">
                  <span className="flex items-center ">
                    {" "}
                    <img className="h-5 mr-2" src={downloadicon} alt="" />{" "}
                    {app.downloads}
                  </span>
                  <span className="flex items-center ">
                    {" "}
                    <img className="h-5 mr-2" src={staricon} alt="" />{" "}
                    {app.ratingAvg}
                  </span>
                  <span>{app.size} MB</span>
                </div>
              </div>
            </div>

            <button
              onClick={() => handleUninstall(app.id)}
              className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded text-sm font-medium"
            >
              Uninstall
            </button>
          </div>
        ))}
      </div>

      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        transition={Bounce}
      />
    </div>
  );
};

export default InstalledApps;
