import "./App.css";
import { Footer } from "./components/Footer.component";
import { Home } from "./pages/homePage/Home.component";
import { Navbar } from "./components/Navbar.component";
import { Route, Routes } from "react-router-dom";
import PackagePage from "./pages/package/PackagePage.component";

function App() {
  return (
    <div className="home h-full min-w-[350px] bg-[#f1faee]">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/packagePage/:id" element={<PackagePage />} />
      </Routes>
    </div>
  );
}

export default App;
