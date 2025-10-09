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
      <div>
        <span className="loading loading-ball loading-xs"></span>
        <span className="loading loading-ball loading-sm"></span>
        <span className="loading loading-ball loading-md"></span>
        <span className="loading loading-ball loading-lg"></span>
        <span className="loading loading-ball loading-xl"></span>
      </div>
    );
  }

  if (installedApps.length === 0) {
    return (
      <p className="text-xs text-[#627382] font-[400] text-center mt-2 mb-8">
        No apps installed.
      </p>
    );
  }
  return (
    <div className=" bg-[#F1F5E8] text-center p-13">
      <h1 className="text-2xl font-bold pt-3.5">Your Installed Apps</h1>
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
