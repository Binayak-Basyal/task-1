import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import './BreakfastEssentials.css';

function LunchFavorites() {
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
        Lunch Favorites
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
            <img src="../../public/Bento Lunchbox Set.png" alt="" />
            <span className="product-label">BEST SELLER</span>
            <span className="product-name">Bento Lunchbox Set</span>
          </div>
          <div>
            <img src="../../public/Fresh Salad Kit.png" alt="" />
            <span className="product-label">BEST SELLER</span>
            <span className="product-name">Fresh Salad Kit</span>
          </div>
          <div>
            <img src="../../public/Sandwich Press.png" alt="" />
            <span className="product-label">BEST SELLER</span>
            <span className="product-name">Sandwich Press</span>
          </div>
          <div>
            <img src="../../public/Reusable Snack Pouches.png" alt="" />
            <span className="product-label">BEST SELLER</span>
            <span className="product-name">Reusable Snack Pouches</span>
          </div>
          <div>
            <img src="../../public/Healthy Wraps Pack.png" alt="" />
            <span className="product-label">BEST SELLER</span>
            <span className="product-name">Healthy Wraps Pack</span>
          </div>
          <div>
            <img src="../../public/Protein Shaker Bottle.png" alt="" />
            <span className="product-label">BEST SELLER</span>
            <span className="product-name">Protein Shaker Bottle</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LunchFavorites;