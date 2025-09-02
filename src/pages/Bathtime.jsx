import './Mealtime.css'
import { Link, useNavigate, Outlet } from 'react-router-dom';
import React, { useEffect ,useRef } from 'react';

function Bathtime({ setNavbarOpen }) {
  const navigate = useNavigate();
  const productsRef = useRef(null);

  useEffect(() => {
  if (window.location.pathname === "/bathtime") {
    navigate("/bathtime/bathtoys", { replace: true });
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
              <li><Link to="/bathtime/bathtoys" className={location.pathname === "/bathtime/bathtoys" ? "active-bathtime" : ""} >Bath Toys</Link></li>
              <li><Link to="/bathtime/babysamphoo" className={location.pathname === "/bathtime/babysamphoo" ? "active-bathtime" : ""}  >Baby Shampoo</Link></li>
              <li><Link to="/bathtime/bubblebath" className={location.pathname === "/bathtime/bubblebath" ? "active-bathtime" : ""}  >Bubble Bath</Link></li>
              <li><Link to="/bathtime/bathtowels" className={location.pathname === "/bathtime/bathtowels" ? "active-bathtime" : ""}  >Bath Towels</Link></li>
              <li><Link to="/bathtime/spongesloofahs" className={location.pathname === "/bathtime/spongesloofahs" ? "active-bathtime" : ""}  >Sponges & Loofahs</Link></li>
              <li><Link to="/bathtime/skincarelotions" className={location.pathname === "/bathtime/skincarelotions" ? "active-bathtime" : ""}  >Skincare & Lotions</Link></li>
              <li><Link to="/bathtime/bathsafety" className={location.pathname === "/bathtime/bathsafety" ? "active-bathtime" : ""}  >Bath Safety Items</Link></li>
              <li><Link to="/bathtime/storageorganizers" className={location.pathname === "/bathtime/storageorganizers" ? "active-bathtime" : ""}  >Storage & Organizers</Link></li>
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
export default Bathtime;