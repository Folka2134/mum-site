import './App.css';
import { Home } from './components/homePage/Home.component';
import { Navbar } from './components/Navbar.component';

function App() {
  return (
    <div className="h-full bg-[#FAFAF8]">
      <Navbar />
      <Home />
    </div>
  );
}

export default App;
