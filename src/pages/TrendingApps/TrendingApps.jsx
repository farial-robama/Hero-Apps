import React from 'react';
import TrendingApp from '../TrendingApp/TrendingApp';
import { useNavigate } from 'react-router';


const TrendingApps = ({apps}) => {
    const topApps = Array.isArray(apps) ? apps.slice(0,8) : [] ;
    const navigate = useNavigate()
    return (
        <div className='text-center py-10'>
            <h1 className='text-2xl font-bold'>Trending Apps</h1>
            <p className='text-xs text-[#627382] font-[400] mt-2 mb-6'>Explore All Trending Apps on the Market developed by us</p>
            <div className='grid grid-cols-4 gap-4'>
                {
                   topApps.length > 0 ? (topApps.map(app => <TrendingApp key={app.id} app={app}></TrendingApp>)) : (<p>No apps found</p>)
                }
            </div>
             <button onClick={() => navigate('/allapps')} className="btn bg-linear-to-br from-[#632EE3] to-[#9F62F2] text-[#FFFFFF] mt-7">Show All</button>
            
        </div>
    );
};

export default TrendingApps;