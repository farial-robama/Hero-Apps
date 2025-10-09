import React from 'react';
import { Link } from 'react-router';

const ErrorPage = () => {
    return (
        <div className=' bg-[#F1F5E8] text-center flex flex-col items-center p-30'>
            <img className='mb-5' src="/error-404.png" alt="" />
            <div>
                <h1 className='text-2xl font-bold pt-3.5'>Oops, page not found!</h1>
            <p className='text-xs text-[#627382] font-[400] mt-2 mb-3'>The page you are looking for is not available.</p>
            <Link to='/' className="btn bg-linear-to-br from-[#632EE3] to-[#9F62F2] text-[#FFFFFF] ">
        Go Back</Link>
            </div>
        </div>
    );
};

export default ErrorPage;