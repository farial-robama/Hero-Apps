import React from 'react';

const HeroCard = () => {
    return (
        <div className='bg-linear-to-br from-[#632EE3] to-[#9F62F2] text-white text-center px-10 py-13'>
            <h1 className='font-bold text-2xl mb-4'>Trusted by Millions, Built for You</h1>
            <div className='grid md:grid-cols-3 grid-cols-1 px-8 '>
                <div className='space-y-2'>
                    <p className='opacity-80 text-xs font-extralight'>Total Downloads</p>
                    <h1 className='font-bold text-4xl'>29.6M</h1>
                    <p className='opacity-80 text-xs font-extralight'>21% more than last month</p>
                </div>
                <div className='space-y-2'>
                    <p className='opacity-80 text-xs font-extralight'>Total Reviews</p>
                    <h1 className='font-bold text-4xl'>906K</h1>
                    <p className='opacity-80 text-xs font-extralight'>46% more than last month</p>
                </div>
                <div className='space-y-2'>
                    <p className='opacity-80 text-xs font-extralight'>Active Apps</p>
                    <h1 className='font-bold text-4xl'>132+</h1>
                    <p className='opacity-80 text-xs font-extralight'>31 more will Launch</p>
                </div>
            </div>
            
        </div>
    );
};

export default HeroCard;