import React, { useEffect, useState } from "react";
import useInstalledApps from "../Utility/useInstalledApps";
import SortedAppsList from "./SortedAppsList";

const Installation = () => {
  const { installedApps, uninstallApp } = useInstalledApps();
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    if (installedApps) {
      setLoading(false);
    }
  }, [installedApps]);

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

  if (!installedApps || installedApps.length === 0) {
    return (
      <p className="text-center text-lg text-[#627382] font-[400] my-6">
        No apps installed.
      </p>
    );
  }
  return (
    <div className="text-center px-13 py-16">
      <h1 className="text-2xl font-bold pt-2">Your Installed Apps</h1>
      <p className="text-xs text-[#627382] font-[400] mt-2 mb-8">
        Explore All Trending Apps on the Market developed by us
      </p>
        <SortedAppsList
          apps={installedApps}
          uninstallApp={uninstallApp}
        ></SortedAppsList>
    </div>
  );
};

export default Installation;
