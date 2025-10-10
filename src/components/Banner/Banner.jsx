import React from 'react';
import { Link } from 'react-router';

const Banner = () => {
    return (
        <div className='flex flex-col text-center pt-10'>
            <h1 className='font-bold text-[#001931] text-5xl mb-3.5'>We Build <br /> <span className='bg-linear-to-br from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent'>Productive</span> Apps</h1>
            <p className='text-xs text-[#627382] font-[400] w-2/4 mx-auto'>At HERO.IO , we craft innovative apps designed to make everyday life simpler, smarter, and more exciting.Our goal is to turn your ideas into digital experiences that truly make an impact.</p>
            <div className='flex flex-row gap-4 justify-center mt-6'>
                <button className="btn text-[#001931] bg-[#F1F5E8] border-gray-300">
                    <a className='flex items-center gap-2' href="https://play.google.com/store/"><img className='w-7' src="/google-play.png" alt="" />Google Play</a></button>
                <button className="btn text-[#001931] bg-[#F1F5E8] border-gray-300">
                    <a className='flex items-center gap-2' href="https://www.apple.com/app-store/"><img className='w-7' src="/app-store.png" alt="" />App Store</a></button>
            </div>
            <img className='md:w-130 w-72 mx-auto mt-6' src="/hero.png" alt="" />
        </div>
    );
};

export default Banner;