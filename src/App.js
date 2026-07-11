import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import VideoBackground from './components/VideoBackground';
import Home from './pages/Home';
import Crypto from './pages/Crypto';
import Animations from './pages/Animations';
import VRPage from './pages/VRPage';
import Contact from './pages/Contact';
import AIPage from './pages/AIPage';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <BrowserRouter>
      <VideoBackground />
      <div style={{ position: 'relative' }}>
        <NavBar />
        <div className="app-container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/ai" element={<AIPage />} />
            <Route path="/ai/framesaipage" element={<AIPage />} />
            <Route path="/ai/stocksaipage" element={<AIPage />} />
            <Route path="/crypto" element={<Crypto />} />
            <Route path="/animations" element={<Animations />} />
            <Route path="/vrpage" element={<VRPage />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
