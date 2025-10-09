import React, { useState } from "react";

const SortedAppsList = ({ apps, uninstallApp }) => {
  const [sort, setSort] = useState("");

  const sortedApps = [...apps].sort((a, b) => {
    if (sort === "high-low") {
      return b.size - a.size;
    } else if (sort === "low-high") {
      return a.size - b.size;
    }
    return 0;
  });
  return (
    <div>
      <div className="flex justify-between items-center">
        <div className="font-semibold mb-3">
        {sortedApps.length} App{sortedApps.length !== 1 ? "s " : ""}
         Found 
      </div>
      <div className="dropdown dropdown-start mb-3">
        <div tabIndex={0} role="button" className="btn m-1 text-[#627382] bg-[#F1F5E8] border-gray-200">
          {sort === "high-low"
            ? "Sorted: High-Low"
            : sort === "low-high"
            ? "Sorted: Low-High"
            : "Sort by Size"}{" "}
          {" "}
          <img src="/dropdown.png" alt="" />
        </div>
        <ul
          tabIndex={0}
          className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm"
        >
          <li>
            <a onClick={() => setSort("high-low")}>High-Low</a>
          </li>
          <li>
            <a onClick={() => setSort("low-high")}>Low-high</a>
          </li>
        </ul>
      </div>
        </div>   

      <div className="grid grid-cols-1 gap-3">
        {sortedApps.map((app) => (
          <div
            key={app.id}
            className="flex justify-between items-center bg-white rounded-md p-3 "
          >
            <div className="flex flex-row gap-3">
              <img className="w-20 rounded-md" src={app.image} alt="" />
              <div className="flex flex-col gap-3.5">
                <h1 className="font-semibold">{app.title}</h1>
                <div className="flex items-center gap-4 text-xs">
                  <p className="flex text-[#00D390] gap-1 items-center">
                    <img className="w-3" src="/icon-downloads.png" alt="" />
                    <span>{app.downloads}</span>
                  </p>
                  <p className="flex gap-1 items-center text-[#FF8811]">
                    <img className="w-3" src="/icon-ratings.png" alt="" />
                    <span>{app.ratingAvg}</span>
                  </p>
                  <p className="text-[#627382]">{app.size} MB</p>
                </div>
              </div>
            </div>
            <button
              onClick={() => uninstallApp(app.id)}
              className="btn btn-active btn-accent bg-[#00D390] w-[100px] text-xs text-white p-2 border-0"
            >
              Uninstall
            </button>
          </div>
        ))}
      </div>
      </div>
  );
};

export default SortedAppsList;
