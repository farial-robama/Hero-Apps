import React from 'react';
import Banner from '../../components/Banner/Banner';
import HeroCard from '../../components/HeroCard/HeroCard';
import TrendingApps from '../TrendingApps/TrendingApps';
import useApps from '../../Hooks/useApps';

const Home = () => {
    const {apps, loading, error} = useApps()

    if (loading) {
        return <p>Loading..</p>
    }
    if (error) {
        return <p>Error : {error.message}</p>
    }

    return (
        <div className='bg-[#F1F5E8]'>
            <Banner></Banner>
            <HeroCard></HeroCard>
            <TrendingApps apps={apps}></TrendingApps>
            
        </div>
    );
};

export default Home;