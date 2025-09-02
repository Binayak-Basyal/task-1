import './Mealtime.css'
import { Link, useNavigate, Outlet } from 'react-router-dom';
import React, { useEffect, useRef } from 'react';

function Playtime({ setNavbarOpen }) {
  const navigate = useNavigate();
  const productsRef = useRef(null);

  useEffect(() => {
  if (window.location.pathname === "/playtime") {
    navigate("/playtime/indoor", { replace: true });
  }
}, [navigate]);

  const handleBack = () => {
    setNavbarOpen(true);
    setTimeout(() => navigate("/"), 400);
  };

  // Scroll left/right for desktop carousel
  const scrollProducts = (direction) => {
    if (productsRef.current) {
      const scrollAmount = 220;
      productsRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="mealtime-container">
      <div className="mealtime-content">
        <div className='leftcontent'>
          <div className="mealtime-header">
            <div className="left-group">
              <span className='back-arrow' onClick={handleBack}>&#60;</span>
              <span className='heading'>Shop Playtime</span>
            </div>
            <span className='closing' onClick={() => navigate("/")}>&#10006;</span>
          </div>
          <div className="mealtime-left">
            <ul>
              <li><Link to="/playtime/indoor" className={location.pathname === "/playtime/indoor" ? "active-playtime" : ""}>Indoor Games</Link></li>

              <li><Link to="/playtime/outdoor" className={location.pathname === "/playtime/outdoor" ? "active-playtime" : ""}>Outdoor Toys</Link></li>

              <li><Link to="/playtime/educational" className={location.pathname === "/playtime/educational" ? "active-playtime" : ""}>Educational Toys</Link></li>

              <li><Link to="/playtime/creative" className={location.pathname === "/playtime/creative" ? "active-playtime" : ""}>Creative Kits</Link></li>
            </ul>
          </div>
        </div>
        <div className="graphicscontent">
          <Outlet />
        </div>
      </div>
    </div>
  );
}
export default Playtime;