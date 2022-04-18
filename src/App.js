import './App.css';
import { Home } from './components/Home.component';
import { Navbar } from './components/Navbar.component';

function App() {
  return (
    <div className="h-screen bg-purple-900">
      <Navbar />
      <Home />
    </div>
  );
}

export default App;
