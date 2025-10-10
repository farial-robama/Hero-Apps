import React, { useEffect } from "react";
import useApps from "../../Hooks/useApps";
import { Link, useNavigate, useParams } from "react-router";
import RatingsChart from "./RatingsChart";
import { useState } from "react";
import useInstalledApps from "../Utility/useInstalledApps";

const AppsDetails = () => {
  const { id } = useParams();
  const { apps } = useApps();
  const navigate = useNavigate();
  const { installApp, isAppInstalled } = useInstalledApps();

  const app = apps.find((app) => String(app.id) === id);

  if (!app) {
    return (
      <div className=" bg-[#F1F5E8] text-center flex flex-col items-center p-30">
        <img className="mb-5" src="/App-Error.png" alt="" />
        <div>
          <h1 className="text-2xl font-bold pt-3.5">OPPS!! APP NOT FOUND</h1>
          <p className="text-xs text-[#627382] font-[400] mt-2 mb-3">
            The App you are requesting is not found on our system. please try
            another apps
          </p>
          <button
            onClick={() => navigate(-1)}
            className="btn bg-linear-to-br from-[#632EE3] to-[#9F62F2] text-[#FFFFFF] "
          >
            Go Back!
          </button>
        </div>
      </div>
    );
  }

  const installed = isAppInstalled(app.id);

  const {
    image,
    title,
    companyName,
    description,
    reviews,
    ratingAvg,
    downloads,
    ratings,
    size,
  } = app;

  return (
    <div className="flex flex-col border-b p-10 space-y-6">
      <div className="flex md:flex-row flex-col items-center gap-7">
        <img
          className=" p-4 w-76 bg-[#FFFFFF] rounded-md shadow-sm"
          src={image}
          alt=""
        />
        <div className="flex flex-col space-y-6 flex-1">
          <div className="border-b border-[#627382]/30 w-full py-6 ">
            <h1 className="font-semibold text-2xl pb-2">{title}</h1>
            <p className="text-[#627382]">
              Developed by{" "}
              <span className="bg-linear-to-br from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent font-semibold">
                {companyName}
              </span>
            </p>
          </div>
          <div className="flex flex-row gap-13 pt-3">
            <div className="flex flex-col gap-1.5">
              <img className="w-6" src="/icon-downloads.png" alt="" />
              <p className="text-xs text-[#627382] font-[400]">Downloads</p>
              <h1 className="text-2xl font-bold">{downloads}</h1>
            </div>
            <div className="flex flex-col gap-1.5">
              <img className="w-6" src="/icon-ratings.png" alt="" />
              <p className="text-xs text-[#627382] font-[400]">
                Average Ratings
              </p>
              <h1 className="text-2xl font-bold">{ratingAvg}</h1>
            </div>
            <div className="flex flex-col gap-1.5">
              <img className="w-7" src="/icon-review.png" alt="" />
              <p className="text-xs text-[#627382] font-[400]">Total Reviews</p>
              <h1 className="text-2xl font-bold">{reviews}</h1>
            </div>
          </div>

          <button
            onClick={() => installApp(app)}
            disabled={installed}
            className="btn btn-active btn-accent bg-[#00D390] md:w-[150px] w-full text-xs text-white p-2 border-0"
          >
            {installed ? "Installed" : `Install Now (${size}MB)`}
          </button>
        </div>
      </div>
      <div className=" border-t border-[#627382]/30 w-full pt-4">
        <h1 className="font-semibold text-lg">Ratings</h1>
        <RatingsChart key={id} ratings={ratings}></RatingsChart>
      </div>
      <div className=" border-t border-[#627382]/30 w-full pt-7 pb-10">
        <h1 className="font-semibold text-lg pb-4">Description</h1>
        <p className="text-xs text-[#627382] font-[400]">{description}</p>
      </div>
    </div>
  );
};

export default AppsDetails;
