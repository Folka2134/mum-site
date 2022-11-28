import React from "react";
import { Outlet, Link } from "react-router-dom";

export const PackagePre = ({ packages }) => {
  return (
    <div className=" packages text-center border-t-2 pt-44">
      <h1 className="text-[36px] mb-12 font-semibold">Our Packages</h1>
      <div className="package-container grid grid-cols-1 lg:grid-cols-2 gap-12 md:m-6">
        {packages.map((packageInfo) => (
          <div key={packageInfo.id} className="border-black rounded">
            <div
              className={`h-72 bg-${packageInfo.id}-bg w-full bg-center rounded-full shadow-lg`}
            ></div>
            <div className="flex flex-col items-center justify-center p-12">
              <h1 className="text-2xl text-center mb-5">{packageInfo.title}</h1>
              <p className="text-center">{packageInfo.mini_desc}</p>
              <Link to={`packagePage/${packageInfo.id}`}>
                <button className="mt-8 mb-1 p-4 text-white bg-[#457B9D] w-52 rounded  hover:bg-[#1D3557] duration-300">
                  Overview
                </button>
              </Link>
              <button className="p-4 text-white bg-[#457B9D] w-52 rounded border-gray-200  hover:bg-[#1D3557] duration-300">
                Unlock
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
