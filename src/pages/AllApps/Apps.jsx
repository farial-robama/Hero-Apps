import React, { useState } from "react";
import useApps from "../../Hooks/useApps";
import Application from "./Application";
import { Search } from "lucide-react";

const Apps = () => {
  const { apps, loading, error } = useApps();
  const [search, setSearch] = useState("");
  const [searchSubmitted, setSearchSubmitted] = useState(false);
  
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
    return <p className="text-xs text-[#627382] font-[400] mt-2 mb-6">Error: {error.message}</p>;
  }

  const filteredApps = apps.filter((app) =>
    app.title.toLowerCase().includes(search.trim().toLocaleLowerCase())
  );

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      setSearchSubmitted(true)
    }
  }

  return (
    <div className="w-full text-center py-12 md:px-12 px-6 flex flex-col justify-center">
      <h1 className="text-2xl font-bold">Our All Applications</h1>
      <p className="text-xs text-[#627382] font-[400] mt-2 mb-6">
        Explore All Apps on the Market developed by us. We code for Millions
      </p>

      <div className="flex justify-between md:flex-row flex-col-reverse gap-2.5 items-center mb-4">
        <h1 className="font-semibold mb-3">
          ({filteredApps.length}) Apps Found
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
            onChange={(e) => {
              setSearch(e.target.value)
              setSearchSubmitted(false)}}
            onKeyDown={handleKeyDown}
            className="grow"
          />
        </label>
      </div>

      {search && filteredApps.length === 0 ? (
        searchSubmitted ?
        (
          <div className="text-center mt-7">
          
          <p className="text-lg text-[#627382] font-[400]">No apps found matching "<span>{search}</span>"</p>
      
          </div>
        ) :
        (
        <div>
            <span className="loading loading-ball loading-xs"></span>
        <span className="loading loading-ball loading-sm"></span>
            <span className="loading loading-ball loading-md"></span>
        </div>
      )
    ) : (
      <div className="grid md:grid-cols-4 grid-cols-2 gap-4">
        {filteredApps.length > 0 ? (
          filteredApps.map((app) => (
            <Application key={app.id} app={app}></Application>
          ))
        ) : (
          <p className="text-sm text-[#627382] font-[400]">No apps found</p>
        )}
      </div>)
    }

    </div>
  );
};

export default Apps;
