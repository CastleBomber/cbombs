import { BrowserRouter,Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import Home from './pages/Home';
import Crypto from './pages/Crypto';
import Animations from './pages/Animations';
import Capstone from './pages/Capstone';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/crypto" element={<Crypto />} />
          <Route path="/animations" element={<Animations />} />
          <Route path="/capstone" element={<Capstone />} />
        </Routes>
      </div>
    </ BrowserRouter>
  );
}

export default App;
