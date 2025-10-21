import React from "react";

import star from '../../assets/icon-ratings.png'
import download from '../../assets/icon-downloads.png'


const AppCard = ({ app }) => {
 

    if (!app) return null;
    const { image,title,ratingAvg } = app;
    // console.log(app);

    return (

        <div className=" bg-gray-50 rounded-2xl shadow-md p-3 flex flex-col items-center justify-between hover:shadow-xl transition-shadow duration-300">
            <div className="w-full  bg-gray-200 rounded-xl overflow-hidden flex items-center justify-center">
                {image ?
                    (
                        <img src={image} className="object-cover w-full h-full bg-gray-200" />
                    )
                    :
                    (
                        <div className="text-gray-400 text-sm">No Image</div>
                    )}
            </div>

            <div className="w-full text-center mt-3">
                <p className="font-semibold  text-gray-800">{title}</p>
            </div>

            <div className="w-full flex justify-between items-center mt-2 text-xs">
                <div className="flex items-center gap-1 text-green-600 p-2 rounded-lg bg-[#FFF0E1] ">
                    <img className="h-4" src={download} alt="" />
                    <span>90M</span>
                </div>
                <div className="flex bg-[#FFF0E1] justify-center p-2 rounded-lg items-center gap-1 text-orange-500">
                    <span>{ratingAvg}</span>
                    <img className="h-4" src={star} alt="" />
                </div>
            </div>
        </div>

    );
};

export default AppCard;

