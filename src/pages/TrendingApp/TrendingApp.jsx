import React from 'react';

const TrendingApp = ({app}) => {
    return (
            <div className='bg-[#FFFFFF] rounded-md shadow-sm hover:shadow-lg transition-shadow duration-150 flex flex-col  mx-auto  p-4'>
            <div className='w-60 h-60  mb-3 '>
                <img className='w-full h-full object-cover rounded-md ' src={app.image} alt="" />
            </div>
            <p className='text-xs flex items-start '>{app.title}</p>
            <div className='flex justify-between text-xs'>
                <p className='flex gap-1'><img className='w-4' src="/icon-downloads.png" alt="" /><span>{app.downloads}</span></p>
                <p className='flex gap-1'><img className='w-4' src="/icon-ratings.png" alt="" /><span>{app.ratingAvg}</span></p>
            </div>
            
        </div>

    );
};

export default TrendingApp;