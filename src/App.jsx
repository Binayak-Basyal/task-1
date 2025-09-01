import { useState } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar.jsx';
import Home from './pages/Home.jsx';
import Announcementbar from './components/Announcementbar.jsx';
import Mealtime from './pages/Mealtime.jsx';
import './App.css';

function App() {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const location = useLocation();

  const isOverlayPage = location.pathname !== '/';

  return (
    <>
      <div className={`navbar-wrapper${navbarOpen ? ' slide-in' : ''}`}>
        <Navbar open={navbarOpen} setOpen={setNavbarOpen} />
      </div>
      <div className={`overlay-page${isOverlayPage ? ' show' : ''}`}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/mealtime" element={<Mealtime setNavbarOpen={setNavbarOpen} />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
