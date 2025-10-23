import React from 'react';
import noapp from '../../assets/App-Error.png'
import { NavLink } from 'react-router';



const NoApp = ({setSearchItem}) => {



    return (
        <div className='grid place-items-center my-20'>
            
            <img className='mb-5' src={noapp} alt="" />
            <h1 className='text-4xl font-bold text-red-600 my-5'>OPPS!! APP NOT FOUND</h1>
            <h1 className='mb-3 text-gray-500'>The App you are requesting is not found on our system.  please try another apps</h1>
           <button onClick={()=>setSearchItem('')}  className="btn rounded-lg px-10 py-5 text-xl bg-gradient-to-r from-[#632ee3] to-[#9f62f2] text-white hover:opacity-70">Show All Apps</button>
        </div>
    );
};

export default NoApp;