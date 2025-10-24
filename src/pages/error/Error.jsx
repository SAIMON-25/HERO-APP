import React from 'react';
import error from '../../assets/error-404.png'
import { useNavigate } from 'react-router';
const Error = () => {

    const navigate = useNavigate();

    const handleNavigate = ()=>{
        navigate('/')
    }

    return (
        <div className='flex justify-center items-center min-h-screen'>
            <div className=' text-center'>
                <img src={error} alt="" />
                <h1 className='text-4xl font-semibold my-3'>Oops, page not found</h1>
                <h1 className='mb-10'>The page you are looking for is not available.</h1>
                <button onClick={handleNavigate} className='btn bg-gradient-to-r from-[#632ee3] to-[#9f62f2] text-white'>Go back !</button>
            </div>
        </div>
    );
};

export default Error;