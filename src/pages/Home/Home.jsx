import React from "react";
import Banner from "../../components/Banner/Banner";
import HeroCard from "../../components/HeroCard/HeroCard";
import TrendingApps from "../TrendingApps/TrendingApps";
import useApps from "../../Hooks/useApps";

const Home = () => {
  const { apps, loading, error } = useApps();

  if (loading) {
    return (
      <div className="flex justify-center my-4">
        <span className="loading loading-ball loading-xs"></span>
        <span className="loading loading-ball loading-sm"></span>
        <span className="loading loading-ball loading-md"></span>
        <span className="loading loading-ball loading-lg"></span>
        <span className="loading loading-ball loading-xl"></span>
      </div>
    );
  }
  if (error) {
    return <p>Error : {error.message}</p>;
  }

  return (
    <div>
      <Banner></Banner>
      <HeroCard></HeroCard>
      <TrendingApps apps={apps}></TrendingApps>
    </div>
  );
};

export default Home;
