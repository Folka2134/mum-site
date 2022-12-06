import React from "react";
import { useParams } from "react-router-dom";

import packageData from "../../data/data";

const PackagePage = () => {
  const { id } = useParams();

  if (Object.values(packageData.includes(id))) {
    var packageInfo = packageData[id];
  }

  return (
    <div className=" top-0 bg-gray-400">
      <main className="flex">
        <div className="bg-purple-500">
          <h1>{packageInfo.title}</h1>
          <img src="#" alt="#" />
        </div>
        <div className="bg-purple-700">
          <p>{packageInfo.disc}</p>
        </div>
      </main>
    </div>
  );
};

export default PackagePage;
