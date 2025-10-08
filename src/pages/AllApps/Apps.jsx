import React from 'react';
import useApps from '../../Hooks/useApps';
import Application from './Application';

const Apps = () => {
    const {apps, loading, error} = useApps()
    
    if (loading) {
        return <p>Loading...</p>
    }
    if (error) {
        return <p>Error: {error.message}</p>
    }

    return (
        <div className=' bg-[#F1F5E8] text-center p-10'>
            <h1 className='text-2xl font-bold'>Our All Applications</h1>
            <p className='text-xs text-[#627382] font-[400] mt-2 mb-6'>Explore All Apps on the Market developed by us. We code for Millions</p>
                <div className='grid grid-cols-4 gap-4'>
                    {
                   apps.length > 0 ? (apps.map(app => 
                   <Application key={app.id} app={app}></Application> )) : (<p>No apps found</p>)
                  }
                </div>
            
        </div>
    );
};

export default Apps;