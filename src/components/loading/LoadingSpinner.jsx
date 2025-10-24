import React from "react";
import loadingicon from '../../assets/logo.png'

const LoadingSpinner = () => {
  return (
    <div className="flex justify-center items-center min-h-screen min-w-screen">
        <img className=" w-12 animate-spin " src={loadingicon} alt="" />
    </div>
  );
};

export default LoadingSpinner;
