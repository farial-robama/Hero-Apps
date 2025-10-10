import React from "react";
import { Link } from "react-router";

const TrendingApp = ({ app }) => {
  const { id, image, title, downloads, ratingAvg } = app;
  return (
    <Link to={`/appsDetails/${id}`}>
      <div className="bg-[#FFFFFF] rounded-md shadow-sm hover:shadow-lg transition-shadow duration-150 flex flex-col  mx-auto  p-4">
        <div className="w-full h-full mb-3 ">
          <img
            className="w-full h-full object-cover rounded-md "
            src={image}
            alt=""
          />
          <p className="text-xs flex items-start my-2 font-semibold">{title}</p>
          <div className="flex justify-between text-xs">
            <p className="flex gap-1 items-center text-[#00D390] bg-[#F1F5E8] rounded-md px-1.5 py-1">
              <img className="w-3" src="/icon-downloads.png" alt="" />
              <span>{downloads}</span>
            </p>
            <p className="flex gap-1 items-center text-[#FF8811] bg-[#FFF0E1] rounded-md px-1.5 py-1">
              <img className="w-3" src="/icon-ratings.png" alt="" />
              <span>{ratingAvg}</span>
            </p>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default TrendingApp;
