import React from "react";
import { Cover } from "./Cover.component";
import { MainContent } from "./MainContent.component";
import { Navbar } from "../../components/Navbar.component";
import { Footer } from "../../components/Footer.component";

export const Home = () => {
  return (
    <div className="h-full w-full  flex flex-col items-center">
      <Navbar />
      <Cover />
      <MainContent />
      <Footer />
    </div>
  );
};
