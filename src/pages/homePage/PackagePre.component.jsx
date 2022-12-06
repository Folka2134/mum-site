import React from "react";

import { PackageMini } from "../../components/PackageMini.component";

export const PackagePre = ({ packages }) => {
  return (
    <div className=" packages text-center border-t-2 pt-44">
      <h1 className="text-[38px] mb-12 font-semibold">Our Packages</h1>
      <div className="package-container grid grid-cols-1 lg:grid-cols-2 gap-12 md:m-6">
        {packages.map((packageInfo) => (
          <PackageMini key={packageInfo.id} packageInfo={packageInfo} />
        ))}
      </div>
    </div>
  );
};
