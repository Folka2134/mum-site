import React, { useState } from "react";
import { About } from "./About.component";
import { Contact } from "./Contact.component";
import { PackagePre } from "./PackagePre.component";

import packageData from "../../data/data";

export const MainContent = () => {
  const [packages, setPackages] = useState(packageData);

  return (
    <div className="h-full min-h-screen w-full pt-12 grid place-items-center border-t-2">
      <About />
      <PackagePre packages={packages} />
      <Contact />
    </div>
  );
};
