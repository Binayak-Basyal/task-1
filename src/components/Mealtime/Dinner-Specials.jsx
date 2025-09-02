import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import './BreakfastEssentials.css';

function DinnerSpecials() {
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
        Dinner Specials 
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
            <img src="../../public/Family Dinner Plate Set.png" alt="" />
            <span className="product-label">BEST SELLER</span>
            <span className="product-name">Family Dinner Plate Set</span>
          </div>
          <div>
            <img src="public/bite.png" alt="" />
            <span className="product-label">BEST SELLER</span>
            <span className="product-name">Granola & Yogurt Kit</span>
          </div>
          <div>
            <img src="public/plate.png" alt="" />
            <span className="product-label">BEST SELLER</span>
            <span className="product-name">Peanut Butter Protein Bites</span>
          </div>
          <div>
            <img src="public/chair.png" alt="" />
            <span className="product-label">BEST SELLER</span>
            <span className="product-name">Whole Grain Bread Loaf</span>
          </div>
          <div>
            <img src="public/bite.png" alt="" />
            <span className="product-label">BEST SELLER</span>
            <span className="product-name">Smoothie Maker Cup</span>
          </div>
          <div>
            <img src="public/plate.png" alt="" />
            <span className="product-label">BEST SELLER</span>
            <span className="product-name">Breakfast Energy Bars</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DinnerSpecials;