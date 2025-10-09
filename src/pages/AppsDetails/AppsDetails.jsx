import React, { useEffect } from 'react';
import useApps from '../../Hooks/useApps';
import { useParams } from 'react-router';
import RatingsChart from './RatingsChart';
import { useState } from 'react';
import useInstalledApps from '../Utility/useInstalledApps';


const AppsDetails = () => {
    const {id} = useParams()
    const {apps} = useApps()
    const { installApp, isAppInstalled} = useInstalledApps()

     const app = apps.find(app => String(app.id) === id)


    if (!app) {
        return <p>Loading App Details....</p>
    }

    const installed = isAppInstalled(app.id)

    const {image, title, companyName, description, reviews, ratingAvg, downloads,ratings, size} =app

    
    return (
        <div className='flex flex-col bg-[#F1F5E8] p-10 space-y-6'>
            <div className='flex md:flex-row flex-col gap-7'>
            <img src={image} alt="" />
            <div className='flex flex-col space-y-6'>
                <div className=' border-b border-[#627382]/30 w-full py-4'>
                    <h1>{title}</h1>
                <p>{companyName}</p>
                </div>
                <div className='flex flex-row gap-10'>
                    <div className='flex flex-col'>
                        <img className='w-7' src="/icon-downloads.png" alt="" />
                        <p className='text-xs text-[#627382] font-[400]'>Downloads</p>
                        <h1 className='text-2xl font-bold'>{downloads}</h1>
                    </div>
                    <div className='flex flex-col'>
                        <img className='w-7' src="/icon-ratings.png" alt="" />
                        <p className='text-xs text-[#627382] font-[400]'>Average Ratings</p>
                        <h1 className='text-2xl font-bold'>{ratingAvg}</h1>
                    </div>
                    <div className='flex flex-col'>
                        <img className='w-7' src="/icon-review.png" alt="" />
                        <p className='text-xs text-[#627382] font-[400]'>Total Reviews</p>
                        <h1 className='text-2xl font-bold'>{reviews}</h1>
                    </div>

                </div>

                <button onClick={() => installApp(app)} disabled={installed} className="btn btn-active btn-accent bg-[#00D390] md:w-[150px] w-full text-xs text-white p-2 border-0">{
                    installed ? "Installed" : `Install Now (${size}MB)`}</button>
                
            </div>
            
        </div>
        <div className=' border-t border-[#627382]/30 w-full py-4'>
            <h1 className='font-semibold text-lg'>Ratings</h1>
            <RatingsChart key={id} ratings={ratings} ></RatingsChart>
        </div>
        <div className=' border-t border-[#627382]/30 w-full py-4'>
            <h1 className='font-semibold text-lg'>Description</h1>
            <p className='text-xs text-[#627382] font-[400]'>{description}</p>
        </div>
        </div>
    );
};

export default AppsDetails;