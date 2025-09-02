import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import './Navbar.css';
import Announcementbar from "./Announcementbar";

function Navbar({ open, setOpen }) {
  const [announcementVisible, setAnnouncementVisible] = useState(true);
  const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 768);

  useEffect(() => {
    const handleResize = () => setIsDesktop(window.innerWidth >= 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleLinkClick = () => {
    if (!isDesktop) setOpen(false);
  };

  return (
    <>
      {isDesktop && announcementVisible && (
        <Announcementbar onClose={() => setAnnouncementVisible(false)} />
      )}
      <nav
        className="navbar"
        style={{ top: isDesktop && announcementVisible ? '2em' : '0' }}
      >
          <div className="navbar-logo">LOGO</div>
          <button className="navbar-hamburger" onClick={() => setOpen(!open)} aria-label="Menu">
              {open ? <span>&#10006;</span> : <span>&#9776;</span>}
          </button>
          <div className={`nav-links${open ? ' show' : ''}`}>
              <div className='maincontent'>
                  <p>Best Seller <span><Link to="/bestseller" onClick={handleLinkClick}>shop all</Link></span></p>
                  <div className="productsgrid-wrapper">
                      <div className='productsgrid'>
                          <div><img src="public/chair.png" alt="" srcSet="" /></div>
                          <div><img src="public/bite.png" alt="" srcSet="" /></div>  
                          <div><img src="public/plate.png" alt="" srcSet="" /></div>
                      </div>
                  </div>
              </div>
              <ul>
                  <li>
                      <Link to="/mealtime" onClick={handleLinkClick}>Mealtime <span>&#8594;</span></Link>
                  </li>
                  <li>
                      <Link to="/playtime"onClick={handleLinkClick}>Playtime <span>&#8594;</span></Link>
                  </li>
                  <li>
                      <Link to="/bathtime"onClick={handleLinkClick}>Bathtime <span>&#8594;</span></Link>
                  </li>
                  <li>
                      <Link to="/playboxes"onClick={handleLinkClick}>The Play Boxes <span>&#8594;</span></Link>
                  </li>
                  <li>
                      <Link to="/gifts"onClick={handleLinkClick}>Gifts <span>&#8594;</span></Link>
                  </li>
                  <li>
                      <Link to="/bestseller"onClick={handleLinkClick}>Best Seller <span>&#8594;</span></Link>
                  </li>
              </ul>
          </div>
      </nav>
      </>
  );
}

export default Navbar;
// filepath: c:\Users\DELL\Desktop\Tasks\task-1\src\components\Navbar.jsx