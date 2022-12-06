import React from "react";
import { useParams, Link } from "react-router-dom";

import packageData from "../../data/data";

const PackagePage = () => {
  const { id } = useParams();

  if (Object.values(packageData.includes(id))) {
    var packageInfo = packageData[id];
  }

  return (
    <div className="top-0">
      <nav className="bg-[#A8DADC] h-16 flex justify-center items-center sticky top-0 text-lg shadow-md ">
        <Link to="/">
          <button className="h-full px-4 cursor-pointer  hover:bg-[#F1FAEE] transition-all delay-75 duration-300 rounded-full">
            Home
          </button>
        </Link>
      </nav>
      <main className="h-max flex flex-col justify-center">
        <h1 className="text-3xl md:text-4xl self-center m-5">
          {packageInfo.title}
        </h1>
        <div className="h-96 grid grid-cols-1 md:grid-cols-2 bg-purple-500">
          <h1>video</h1>
          <div className="flex flex-col justify-center items-center p-8 bg-green-200">
            <p>{packageInfo.mini_desc}</p>
            <button className="mt-10 p-4 text-white bg-[#457B9D] w-52 rounded border-gray-200  hover:bg-[#1D3557] duration-300">
              Unlock
            </button>
          </div>
        </div>
        <div className="bg-purple-700 px-12 py-8 text-">
          <p>{packageInfo.disc}</p>
        </div>
      </main>
    </div>
  );
};

export default PackagePage;
