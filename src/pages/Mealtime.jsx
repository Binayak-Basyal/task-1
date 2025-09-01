import './Mealtime.css'
import { Link, useNavigate } from 'react-router-dom';
import React, { useRef } from 'react';

function Mealtime({ setNavbarOpen }) {
  const navigate = useNavigate();
  const productsRef = useRef(null);

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
              <li><Link to="/">High Chair </Link></li>
              <li><Link to="/playtime">Booster </Link></li>
              <li><Link to="/bathtime">Tableware & Bibs </Link></li>
              <li><Link to="/theplayboxes">Mealtime Accessories </Link></li>
              <li><Link to="/gifts">Bundle & Save </Link></li>
              <li><Link to="/bestseller">All Mealtime </Link></li>
            </ul>
          </div>
        </div>
        <div className="graphicscontent">
          <div className="featured-title">
            Featured Mealtime
            <span className="featured-arrows">
              <button onClick={() => scrollProducts('left')} aria-label="Scroll left">&#60;</button>
              <button onClick={() => scrollProducts('right')} aria-label="Scroll right">&#62;</button>
            </span>
            <span className="shop-all-link">
              <Link to="/mealtime">shop all</Link>
            </span>
          </div>
          <div className="products-wrapper"  ref={productsRef}>
            <div className="products">
              <div>
                <img src="public/chair.png" alt="" />
                <span className="product-label">BEST SELLER</span>
                <span className="product-name">The Chair</span>
              </div>
              <div>
                <img src="public/bite.png" alt="" />
                <span className="product-label">BEST SELLER</span>
                <span className="product-name">First Bites Full Kit</span>
              </div>
              <div>
                <img src="public/plate.png" alt="" />
                <span className="product-label">BEST SELLER</span>
                <span className="product-name">Suction Plate</span>
              </div>
               <div>
                <img src="public/chair.png" alt="" />
                <span className="product-label">BEST SELLER</span>
                <span className="product-name">The Chair</span>
              </div>
              <div>
                <img src="public/bite.png" alt="" />
                <span className="product-label">BEST SELLER</span>
                <span className="product-name">First Bites Full Kit</span>
              </div>
              <div>
                <img src="public/plate.png" alt="" />
                <span className="product-label">BEST SELLER</span>
                <span className="product-name">Suction Plate</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Mealtime;