import React from "react";
import { useLoaderData, useParams } from "react-router";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  LabelList,
} from "recharts";
import download from "../../assets/icon-downloads.png";
import star from "../../assets/icon-ratings.png";
import review from "../../assets/icon-review.png";

const AppDetail = () => {
  const apps = useLoaderData();

  const { appId } = useParams();

  // console.log(appId);
  const app = apps.filter((app) => app.id == appId);
  console.log(app);

  if (!app) {
    return null;
  }

  const {
    image,
    title,
    companyName,
    description,
    size,
    reviews,
    ratingAvg,
    downloads,
    ratings,
  } = app[0];

  //   const ratingData = [
  //     { name: "5 star", count: 11500 },
  //     { name: "4 star", count: 8000 },
  //     { name: "3 star", count: 3000 },
  //     { name: "2 star", count: 1800 },
  //     { name: "1 star", count: 900 },
  //   ];

  console.log(ratings);

  return (
    <div className=" mx-auto bg-white  px-25  my-25">
      <div className="grid grid-cols-4 gap-15 border-b-2 border-gray-200 pb-15">
        <div>
          <img src={image} alt="App Logo" className="w-100" />
        </div>
        <div className="col-span-3">
          <div className="border-b-2 border-gray-200 pb-5">
            <h1 className="text-4xl font-bold text-gray-800 mb-3">{title}</h1>
            <p className="text-gray-500">
              Developed by{" "}
              <a href="#" className="text-indigo-500 hover:underline">
                {companyName}
              </a>
            </p>
          </div>

          <div className="mt-10">
            <div className="flex flex-wrap items-center gap-20 mb-8">
              <div>
                <img src={download} alt="" />
                <p className="text-gray-500 my-1">Downloads</p>
                <p className="text-green-600 text-3xl font-bold ">
                  {downloads}
                </p>
              </div>
              <div>
                <img src={star} alt="" />
                <p className="text-gray-500 my-1">Average Ratings</p>
                <p className="text-orange-500 text-3xl font-bold">
                  {ratingAvg}
                </p>
              </div>
              <div>
                <img src={review} alt="" />
                <p className="text-gray-500 my-1">Total Reviews</p>
                <p className="text-purple-600 font-bold text-3xl">{reviews}</p>
              </div>
            </div>
          </div>

          <div>
            <button className="ml-auto bg-green-500 text-white px-5 py-2 rounded-md font-semibold hover:bg-green-600">
              Install Now ({size} MB)
            </button>
          </div>
        </div>
      </div>

      <div className="my-10 border-b-2 border-gray-200 pb-15 ">
        <h2 className="text-xl font-bold text-gray-700 mb-4">Ratings</h2>
        <ResponsiveContainer width="100%" height={400}>
          <BarChart data={ratings} layout="vertical" margin={{ left: 0 }} barCategoryGap="25%"  >
            <XAxis
              type="number"
              axisLine={false} 
              tickLine={false} 
              margin={{ top: 10 }}
            />
            <YAxis
              dataKey="name"
              type="category"
              width={60}
              axisLine={false}
              tickLine={false}
            />
            <Tooltip />
            <Bar dataKey="count" fill="#ff9900"> </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>


      <div className="space-y-4 text-gray-700 leading-relaxed">
      <h1 className="text-2xl font-bold">Description</h1>
      <p>{description}</p>
      </div>
    </div>
  );
};

export default AppDetail;
