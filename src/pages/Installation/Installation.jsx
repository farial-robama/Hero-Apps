import React from 'react';
import useInstalledApps from '../Utility/useInstalledApps';
import AppsList from './SortedAppsList';
import SortedAppsList from './SortedAppsList';

const Installation = () => {
    const { installedApps, uninstallApp } = useInstalledApps()
    if (installedApps.length === 0) {
        return <p>No apps installed.</p>
    }
    return (
        <div className=' bg-[#F1F5E8] text-center p-10'>
            <h1 className='text-2xl font-bold'>Your Installed Apps</h1>
            <p className='text-xs text-[#627382] font-[400] mt-2 mb-6'>Explore All Trending Apps on the Market developed by us</p>
            <div>
                <h1>1 App Found</h1>
            <SortedAppsList apps={installedApps} uninstallApp={uninstallApp}></SortedAppsList>

            </div>
           <div className='grid grid-cols-1 gap-3'>
             {
                installedApps.map(app => (
            <div key={app.id} className='flex justify-between items-center bg-white p-3 '>
           <div className='flex flex-row gap-3'>
                <img className='w-20 rounded-md' src={app.image} alt="" />
            <div className='flex flex-col gap-3.5'>
                <h1 className='font-semibold'>{app.title}</h1>
            <div className='flex items-center gap-4 text-xs'>
                <p className='flex text-[#00D390] gap-1 items-center'><img className='w-3' src="/icon-downloads.png" alt="" /><span>{app.downloads}</span></p>
                <p className='flex gap-1 items-center text-[#FF8811]'><img className='w-3' src="/icon-ratings.png" alt="" /><span>{app.ratingAvg}</span></p>
                <p className='text-[#627382]'>{app.size} MB</p>
            </div>
            </div>
            
           </div>
           <button onClick={() => uninstallApp(app.id)} className="btn btn-active btn-accent bg-[#00D390] w-[150px] text-xs text-white p-2 border-0">Uninstall</button>
            
        </div>
                ))
            }
           </div>
        </div>
    );
};

export default Installation;