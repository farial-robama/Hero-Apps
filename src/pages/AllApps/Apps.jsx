import React, { useState } from "react";
import useApps from "../../Hooks/useApps";
import Application from "./Application";
import { Search } from "lucide-react";

const Apps = () => {
  const { apps, loading, error } = useApps();
  const [search, setSearch] = useState("");
  
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

  if (error) {
    return <p className="text-xs text-[#627382] font-[400] mt-2 mb-6">Error: {error.message}</p>;
  }

  const filteredApps = apps.filter((app) =>
    app.title.toLowerCase().includes(search.trim().toLocaleLowerCase())
  );

  return (
    <div className=" bg-[#F1F5E8] text-center p-10">
      <h1 className="text-2xl font-bold">Our All Applications</h1>
      <p className="text-xs text-[#627382] font-[400] mt-2 mb-6">
        Explore All Apps on the Market developed by us. We code for Millions
      </p>

      <div className="flex justify-between items-center mb-4">
        <h1 className="font-semibold mb-3">
          ({filteredApps.length}) Apps found
        </h1>

        <label className="input text-[#627382] bg-[#F1F5E8]">
          <svg
            className="h-[1em] opacity-50"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <g
              strokeLinejoin="round"
              strokeLinecap="round"
              strokeWidth="2.5"
              fill="none"
              stroke="currentColor"
            >
              <circle cx="11" cy="11" r="8"></circle>
              <path d="m21 21-4.3-4.3"></path>
            </g>
          </svg>
          <input
            type="text"
            placeholder="Search"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="grow"
          />
        </label>
      </div>

      {search && filteredApps.length === 0 ? (
        <div>
            <span className="loading loading-ball loading-xs"></span>
        <span className="loading loading-ball loading-sm"></span>
            <span className="loading loading-ball loading-md"></span>
        </div>
      )
      : (<div className="grid grid-cols-4 gap-4">
        {filteredApps.length > 0 ? (
          filteredApps.map((app) => (
            <Application key={app.id} app={app}></Application>
          ))
        ) : (
          <p>No apps found</p>
        )}
      </div>)
    }

    </div>
  );
};

export default Apps;
