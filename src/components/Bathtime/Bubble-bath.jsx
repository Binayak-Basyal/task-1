import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import '../Mealtime/BreakfastEssentials.css';

function Bubblebath() {
  const productsRef = useRef(null);

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
    <div className="graphicscontent">
      <div className="featured-title">
        Baby Samphoo
        <span className="featured-arrows">
          <button onClick={() => scrollProducts('left')} aria-label="Scroll left">&#60;</button>
          <button onClick={() => scrollProducts('right')} aria-label="Scroll right">&#62;</button>
        </span>
        <span className="shop-all-link">
          <Link to="/mealtime">shop all</Link>
        </span>
      </div>
      <div className="products-wrapper" ref={productsRef}>
        <div className="products">
          <div>
            <img src="../../public/Oatmeal Starter Pack.png" alt="" />
            <span className="product-label">BEST SELLER</span>
            <span className="product-name">Oatmeal Starter Pack</span>
          </div>
          <div>
            <img src="../../public/Granola & Yogurt Kit.png" alt="" />
            <span className="product-label">BEST SELLER</span>
            <span className="product-name">Granola & Yogurt Kit</span>
          </div>
          <div>
            <img src="../../public/Peanut Butter Protein Bites.png" alt="" />
            <span className="product-label">BEST SELLER</span>
            <span className="product-name">Peanut Butter Protein Bites</span>
          </div>
          <div>
            <img src="../../public/Whole Grain Bread Loaf.png" alt="" />
            <span className="product-label">BEST SELLER</span>
            <span className="product-name">Whole Grain Bread Loaf</span>
          </div>
          <div>
            <img src="../../public/Smoothie Maker Cup.png" alt="" />
            <span className="product-label">BEST SELLER</span>
            <span className="product-name">Smoothie Maker Cup</span>
          </div>
          <div>
            <img src="../../public/Breakfast Energy Bars.png" alt="" />
            <span className="product-label">BEST SELLER</span>
            <span className="product-name">Breakfast Energy Bars</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Bubblebath;