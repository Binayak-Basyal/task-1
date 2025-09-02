import './Mealtime.css'
import { Link, useNavigate, Outlet, useLocation } from 'react-router-dom';
import React, { useRef, useEffect } from 'react';

function Mealtime({ setNavbarOpen }) {
  const navigate = useNavigate();
  const location = useLocation();
  const productsRef = useRef(null);

 useEffect(() => {
  if (window.location.pathname === "/mealtime") {
    navigate("/mealtime/all", { replace: true });
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
              <span className='heading'>Shop Mealtime</span>
            </div>
            <span className='closing' onClick={() => navigate("/")}>&#10006;</span>
          </div>
          <div className="mealtime-left">
            <ul>
              <li>
                <Link
                  to="/mealtime/breakfast"
                  className={location.pathname === "/mealtime/breakfast" ? "active-mealtime" : ""}
                >
                  Breakfast Essentials
                </Link>
              </li>
              <li>
                <Link
                  to="/mealtime/lunch"
                  className={location.pathname === "/mealtime/lunch" ? "active-mealtime" : ""}
                >
                  Lunch Favorites
                </Link>
              </li>
              <li>
                <Link
                  to="/mealtime/dinner"
                  className={location.pathname === "/mealtime/dinner" ? "active-mealtime" : ""}
                >
                  Dinner Specials
                </Link>
              </li>
              <li>
                <Link
                  to="/mealtime/snacks"
                  className={location.pathname === "/mealtime/snacks" ? "active-mealtime" : ""}
                >
                  Healthy Snacks
                </Link>
              </li>
              <li>
                <Link
                  to="/mealtime/drinks"
                  className={location.pathname === "/mealtime/drinks" ? "active-mealtime" : ""}
                >
                  Drinks & Juices
                </Link>
              </li>
              <li>
                <Link
                  to="/mealtime/all"
                  className={location.pathname === "/mealtime/all" ? "active-mealtime" : ""}
                >
                  All Mealtime
                </Link>
              </li>
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
export default Mealtime;