import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import Home from './pages/Home';
import Crypto from './pages/Crypto';
import Animations from './pages/Animations';
import Capstone from './pages/Capstone';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <BrowserRouter>
      <div style={{ background: '#1e1e2f', minHeight: '100vh' }}>
        <NavBar />
        <div className="app-container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/crypto" element={<Crypto />} />
            <Route path="/animations" element={<Animations />} />
            <Route path="/capstone" element={<Capstone />} />
          </Routes>
        </div>
      </div>
    </ BrowserRouter>
  );
}

export default App;
