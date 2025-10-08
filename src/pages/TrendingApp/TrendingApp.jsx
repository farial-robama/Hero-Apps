import React from 'react';
import { Link } from 'react-router';

const TrendingApp = ({app}) => {
    const {id, image, title, downloads, ratingAvg} = app
    return (
            <Link to={`/appsDetails/${id}`}>
            <div className='bg-[#FFFFFF] rounded-md shadow-sm hover:shadow-lg transition-shadow duration-150 flex flex-col  mx-auto  p-4'>
            <div className='w-60 h-60  mb-3 '>
                <img className='w-full h-full object-cover rounded-md ' src={image} alt="" />
            </div>
            <p className='text-xs flex items-start '>{title}</p>
            <div className='flex justify-between text-xs'>
                <p className='flex gap-1'><img className='w-4' src="/icon-downloads.png" alt="" /><span>{downloads}</span></p>
                <p className='flex gap-1'><img className='w-4' src="/icon-ratings.png" alt="" /><span>{ratingAvg}</span></p>
            </div>
            
        </div>
            </Link>

    );
};

export default TrendingApp;