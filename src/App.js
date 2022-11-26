import "./App.css";
import { Footer } from "./components/Footer.component";
import { Home } from "./pages/homePage/Home.component";
import { Navbar } from "./components/Navbar.component";

function App() {
  return (
    <div className="home h-full min-w-[350px] bg-[#FAFAF8]">
      <Navbar />
      <Home />
      <Footer />
    </div>
  );
}

export default App;
